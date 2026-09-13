import { cpSync, mkdirSync, rmSync } from "node:fs";
import { basename, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL(".", import.meta.url)));
const output = join(root, "dist");
const staticFiles = [
  "index.html",
  "eurobot.html",
  "nxp.html",
  "join.html",
  "join.css",
  "join.js",
  "partners.html",
  "partners.css",
  "partners.js",
  "styles.css",
  "competition.css",
  "app.js",
  "competition.js",
  "logo-removebg-preview.png",
  "logo.jpeg",
  "robots.txt",
  "sitemap.xml",
  "site.webmanifest",
];
const excluded = new Set([
  "comps/comps.txt",
  "comps/Eurobot/equipe eurobot 2026.jpeg",
  "memories/anniversary.HEIC",
]);

if (basename(output) !== "dist" || resolve(output) === root) {
  throw new Error("Refusing to clear an unsafe build output path");
}

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const file of staticFiles) {
  cpSync(join(root, file), join(output, file));
}

for (const directory of ["comps", "executive board", "memories", "videos"]) {
  cpSync(join(root, directory), join(output, directory), {
    recursive: true,
    filter(source) {
      const localPath = relative(root, source);
      return !excluded.has(localPath);
    },
  });
}

console.log(`Static production build ready: ${relative(root, output)}/`);
