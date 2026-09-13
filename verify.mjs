import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const pages = ["index.html", "eurobot.html", "nxp.html", "join.html", "partners.html"];
const pageSources = new Map(
  pages.map((page) => [page, readFileSync(new URL(`./${page}`, import.meta.url), "utf8")]),
);
const html = pageSources.get("index.html");
const css = readFileSync(new URL("./styles.css", import.meta.url), "utf8");
const competitionCss = readFileSync(new URL("./competition.css", import.meta.url), "utf8");
const script = readFileSync(new URL("./app.js", import.meta.url), "utf8");
const competitionScript = readFileSync(new URL("./competition.js", import.meta.url), "utf8");

const failures = [];
if (html.includes("data-join-form")) failures.push("Membership form must live on its own page");
if (!pageSources.get("join.html").includes("data-join-form")) failures.push("Missing dedicated membership form");
if (!html.includes('href="./join.html"')) failures.push("Missing link to the joining page");
const requiredSections = ["home", "about", "axes", "memories", "competitions", "achievements", "events", "team"];

for (const id of requiredSections) {
  if (!html.includes(`id="${id}"`)) failures.push(`Missing section #${id}`);
}

for (const placeholder of ["__LOGO_DATA__", "TODO", "Lorem ipsum"]) {
  if (`${[...pageSources.values()].join("\n")}\n${css}\n${competitionCss}\n${script}\n${competitionScript}`.includes(placeholder)) {
    failures.push(`Unresolved placeholder: ${placeholder}`);
  }
}

if (/apiSecret|api_secret/i.test(`${[...pageSources.values()].join("\n")}\n${css}\n${competitionCss}\n${script}\n${competitionScript}`)) {
  failures.push("A private media credential appears in the client source");
}

const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicateIds.length) failures.push(`Duplicate IDs: ${[...new Set(duplicateIds)].join(", ")}`);

if (!html.includes('class="skip-link"')) failures.push("Missing skip link");
if (!css.includes("prefers-reduced-motion")) failures.push("Missing reduced-motion styles");
if (!html.includes('application/ld+json')) failures.push("Missing organization structured data");

for (const [page, source] of pageSources) {
  const pageIds = [...source.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const repeated = pageIds.filter((id, index) => pageIds.indexOf(id) !== index);
  if (repeated.length) failures.push(`${page} has duplicate IDs: ${[...new Set(repeated)].join(", ")}`);
  if (!source.includes('name="description"')) failures.push(`${page} is missing a meta description`);
  if (!source.includes('rel="canonical"')) failures.push(`${page} is missing a canonical URL`);
  if (!source.includes('class="skip-link"')) failures.push(`${page} is missing a skip link`);

  const assetMatches = [...source.matchAll(/(?:src|href|data-gallery-image)="(\.\/[^"#?]+(?:\?[^"#]*)?)"/g)];
  for (const match of assetMatches) {
    const relative = decodeURIComponent(match[1].split("?")[0].replace(/^\.\//, ""));
    if (relative.endsWith(".html") || relative === "") continue;
    if (!existsSync(resolve(root, relative))) failures.push(`${page} references missing asset: ${relative}`);
  }
}

for (const requiredPage of ["eurobot.html", "nxp.html", "competition.css", "competition.js", "vercel.json"]) {
  if (!existsSync(resolve(root, requiredPage))) failures.push(`Missing production file: ${requiredPage}`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Vitrine verification passed: ${pages.length} pages, ${requiredSections.length} home sections, and local assets resolved.`);
}
