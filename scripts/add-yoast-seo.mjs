import fs from "fs";
import path from "path";

const APP = path.join(process.cwd(), "app");
const IMPORT = 'import { withYoast } from "@/lib/yoast-seo";\n';

function walk(dir, route = "") {
  let found = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const page = entries.find((e) => e.isFile() && e.name === "page.tsx");
  if (page) found.push({ file: path.join(dir, page.name), route: route || "/" });
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    if (e.name === "api" || e.name.startsWith("_") || e.name.startsWith("[") || e.name.startsWith("@")) continue;
    const seg = e.name.startsWith("(") ? "" : `/${e.name}`;
    found = found.concat(walk(path.join(dir, e.name), route + seg));
  }
  return found;
}

let done = 0;
const skipped = [];

for (const { file, route } of walk(APP)) {
  let src = fs.readFileSync(file, "utf8");
  if (src.includes("withYoast")) continue;
  if (/^\s*["']use client["']/.test(src) || !/export const metadata\b/.test(src)) {
    skipped.push(route);
    continue;
  }
  src = src.replace(/export const metadata\b/, "const baseMetadata");
  src =
    IMPORT +
    src +
    `\nexport async function generateMetadata() {\n  return withYoast(${JSON.stringify(route)}, baseMetadata);\n}\n`;
  fs.writeFileSync(file, src);
  done++;
}

console.log(`${done} pages update hue`);
if (skipped.length) console.log("Skip hue (haath se dekho):", skipped);