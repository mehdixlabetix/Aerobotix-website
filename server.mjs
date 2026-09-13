import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL(".", import.meta.url)));
const port = Number(process.env.PORT ?? 4173);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".xml": "application/xml; charset=utf-8",
  ".webp": "image/webp",
};

const securityHeaders = {
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'sha256-5l1AVJTOG0oQXudMv37fyPOUUEH6LD59Vrle80viBeE='",
    "style-src 'self' https://fonts.googleapis.com",
    "font-src https://fonts.gstatic.com",
    "img-src 'self' data: https://res.cloudinary.com",
    "media-src https://res.cloudinary.com",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "form-action 'self' mailto:",
  ].join("; "),
  "Cross-Origin-Opener-Policy": "same-origin",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
};

function resolveFile(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const requested = decoded === "/" ? "index.html" : decoded.replace(/^\/+/, "");
  const normalized = normalize(requested);
  const absolute = resolve(join(root, normalized));
  if (absolute !== root && !absolute.startsWith(`${root}${sep}`)) return null;
  if (existsSync(absolute) && statSync(absolute).isFile()) return absolute;
  const htmlFallback = `${absolute}.html`;
  if (existsSync(htmlFallback) && statSync(htmlFallback).isFile()) return htmlFallback;
  return null;
}

const server = createServer((request, response) => {
  const file = resolveFile(request.url ?? "/");
  if (!file) {
    response.writeHead(404, {
      ...securityHeaders,
      "Content-Type": "text/plain; charset=utf-8",
    });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    ...securityHeaders,
    "Cache-Control": extname(file) === ".html" ? "no-cache" : "public, max-age=3600",
    "Content-Type": mimeTypes[extname(file)] ?? "application/octet-stream",
  });
  createReadStream(file).pipe(response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`AeRobotiX vitrine running at http://127.0.0.1:${port}`);
});
