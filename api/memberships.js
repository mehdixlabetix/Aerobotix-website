const limits = {
  first_name: 100,
  last_name: 100,
  email: 254,
  phone: 25,
  study_level: 100,
  field_of_study: 100,
  facebook_url: 500,
  interests: 2000,
  expectations: 2000,
};

const requiredFields = ["first_name", "last_name", "email", "phone"];
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+0-9() .-]{8,25}$/;

function json(body, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 15_000) return json({ ok: false, error: "Request too large" }, 413);

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
  if (!uuidPattern.test(body.id || "")) return json({ ok: false, error: "Invalid request ID" }, 400);

  const values = {};
  for (const [field, maximum] of Object.entries(limits)) {
    if (typeof body[field] !== "string") return json({ ok: false, error: `Invalid ${field}` }, 400);
    values[field] = body[field].trim();
    if (values[field].length > maximum) return json({ ok: false, error: `${field} is too long` }, 400);
  }
  if (requiredFields.some((field) => !values[field])) {
    return json({ ok: false, error: "Required fields are missing" }, 400);
  }
  if (!emailPattern.test(values.email)) return json({ ok: false, error: "Invalid email" }, 400);
  if (!phonePattern.test(values.phone)) return json({ ok: false, error: "Invalid phone" }, 400);
  if (values.facebook_url) {
    try {
      const facebookUrl = new URL(values.facebook_url);
      if (!["http:", "https:"].includes(facebookUrl.protocol)) throw new Error("Invalid protocol");
    } catch {
      return json({ ok: false, error: "Invalid Facebook URL" }, 400);
    }
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "");
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase environment variables are not configured");
    return json({ ok: false, error: "Service unavailable" }, 503);
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/membership_applications`, {
    method: "POST",
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      id: body.id,
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      phone: values.phone,
      study_level: values.study_level || null,
      field_of_study: values.field_of_study || null,
      facebook_url: values.facebook_url || null,
      interests: values.interests || null,
      expectations: values.expectations || null,
    }),
  });

  if (response.status === 409) return json({ ok: true });
  if (!response.ok) {
    console.error("Supabase membership insert failed", response.status, await response.text());
    return json({ ok: false, error: "Could not save application" }, 502);
  }
  return json({ ok: true }, 201);
}

export function GET() {
  return json({ ok: false, error: "Method not allowed" }, 405);
}
