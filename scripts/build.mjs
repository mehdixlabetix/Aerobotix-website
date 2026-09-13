import { cpSync, mkdirSync, rmSync } from "node:fs";
import { basename, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const output = join(root, "dist");
const fileMappings = [
  ["src/pages/index.html", "index.html"],
  ["src/pages/eurobot.html", "eurobot.html"],
  ["src/pages/nxp.html", "nxp.html"],
  ["src/pages/join.html", "join.html"],
  ["src/pages/partners.html", "partners.html"],
  ["src/styles/styles.css", "styles.css"],
  ["src/styles/competition.css", "competition.css"],
  ["src/styles/join.css", "join.css"],
  ["src/styles/partners.css", "partners.css"],
  ["src/scripts/app.js", "app.js"],
  ["src/scripts/competition.js", "competition.js"],
  ["src/scripts/join.js", "join.js"],
  ["src/scripts/partners.js", "partners.js"],
  ["assets/images/brand/logo-removebg-preview.png", "logo-removebg-preview.png"],
  ["assets/images/brand/logo.jpeg", "logo.jpeg"],
  ["public/favicon.svg", "favicon.svg"],
  ["public/robots.txt", "robots.txt"],
  ["public/sitemap.xml", "sitemap.xml"],
  ["public/site.webmanifest", "site.webmanifest"],
];
const directoryMappings = [
  ["assets/images/competitions", "comps"],
  ["assets/images/executive-board", "executive board"],
  ["assets/images/memories", "memories"],
  ["assets/videos", "videos"],
];
const excluded = new Set([
  "assets/images/competitions/comps.txt",
  "assets/images/competitions/Eurobot/equipe eurobot 2026.jpeg",
  "assets/images/memories/anniversary.HEIC",
]);

if (basename(output) !== "dist" || resolve(output) === root) {
  throw new Error("Refusing to clear an unsafe build output path");
}

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const [source, destination] of fileMappings) {
  cpSync(join(root, source), join(output, destination));
}

for (const [source, destination] of directoryMappings) {
  cpSync(join(root, source), join(output, destination), {
    recursive: true,
    filter(sourcePath) {
      const localPath = relative(root, sourcePath);
      return !excluded.has(localPath);
    },
  });
}

console.log(`Static production build ready: ${relative(root, output)}/`);
