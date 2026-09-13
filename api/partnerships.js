const limits = {
  organization: 150,
  contact: 100,
  email: 254,
  phone: 25,
  role: 100,
  website: 300,
  interest: 100,
  message: 1500,
};

const requiredFields = ["organization", "contact", "email", "phone", "interest", "message"];
const allowedInterests = new Set([
  "Equipment & technical expertise",
  "Competition sponsorship",
  "Events & training",
  "Let’s explore the possibilities",
]);
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+0-9() .-]{8,25}$/;

function json(body, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 10_000) return json({ ok: false, error: "Request too large" }, 413);

  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return json({ ok: false, error: "Invalid origin" }, 403);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid JSON" }, 400);
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return json({ ok: false, error: "Invalid request" }, 400);
  }
  if (body.company_site) return json({ ok: true });
  if (!uuidPattern.test(body.id || "")) return json({ ok: false, error: "Invalid request ID" }, 400);

  const values = {};
  for (const [field, maximum] of Object.entries(limits)) {
    if (typeof body[field] !== "string") return json({ ok: false, error: `Invalid ${field}` }, 400);
    values[field] = body[field].trim();
    if (values[field].length > maximum) return json({ ok: false, error: `${field} is too long` }, 400);
  }
  if (requiredFields.some((field) => !values[field])) return json({ ok: false, error: "Required fields are missing" }, 400);
  if (!emailPattern.test(values.email)) return json({ ok: false, error: "Invalid email" }, 400);
  if (!phonePattern.test(values.phone)) return json({ ok: false, error: "Invalid phone" }, 400);
  if (values.website) {
    try {
      const website = new URL(values.website);
      if (!["http:", "https:"].includes(website.protocol)) throw new Error("Invalid protocol");
    } catch {
      return json({ ok: false, error: "Invalid website" }, 400);
    }
  }
  if (!allowedInterests.has(values.interest)) return json({ ok: false, error: "Invalid partnership interest" }, 400);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "");
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase environment variables are not configured");
    return json({ ok: false, error: "Service unavailable" }, 503);
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/partnership_inquiries`, {
    method: "POST",
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      id: body.id,
      organization: values.organization,
      contact_name: values.contact,
      email: values.email,
      phone: values.phone,
      contact_role: values.role || null,
      website: values.website || null,
      interest: values.interest,
      message: values.message,
    }),
  });

  if (response.status === 409) return json({ ok: true });
  if (!response.ok) {
    console.error("Supabase partnership insert failed", response.status, await response.text());
    return json({ ok: false, error: "Could not save request" }, 502);
  }
  return json({ ok: true }, 201);
}

export function GET() {
  return json({ ok: false, error: "Method not allowed" }, 405);
}
