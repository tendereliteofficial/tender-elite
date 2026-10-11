import fs from "fs";
import path from "path";

const WRITE = process.argv.includes("--write");
const APP = path.join(process.cwd(), "app");

// slug ko page ke andar runtime par naam mein badalta hai (lib/seo.ts se)
const n = (slug) => `\${_s("${slug}")}`;

const TYPES = {
  industries: ([slug]) => ({
    title: `${n(slug)} Tender Support`,
    desc: `Find, prepare and win ${n(slug)} government tenders in India. Tender Elite offers expert bidding, documentation and compliance support.`,
  }),
  services: ([slug]) => ({
    title: `${n(slug)} Services`,
    desc: `Professional ${n(slug)} services for government tenders. Tender Elite helps you bid accurately, stay compliant and win more contracts.`,
  }),
  states: ([slug]) => ({
    title: `Tender Services in ${n(slug)}`,
    desc: `Tender search, bidding and documentation support for businesses in ${n(slug)}. Track live ${n(slug)} government tenders with Tender Elite.`,
  }),
  locations: (parts) =>
    parts.length === 1
      ? {
          title: `Tender Services in ${n(parts[0])}`,
          desc: `Explore tender support across cities in ${n(parts[0])}. Tender Elite helps with tender search, GeM registration, bidding and documentation.`,
        }
      : {
          title: `Tender Services in ${n(parts[1])}, ${n(parts[0])}`,
          desc: `Get local tender support in ${n(parts[1])}, ${n(parts[0])}: tender search, GeM registration, bid preparation and submission by Tender Elite.`,
        },
};

function findPages(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) findPages(full, out);
    else if (e.name === "page.tsx") out.push(full);
  }
  return out;
}

let changed = 0;
const skipped = [];

for (const [type, make] of Object.entries(TYPES)) {
  const base = path.join(APP, type);
  if (!fs.existsSync(base)) continue;

  for (const file of findPages(base)) {
    const parts = path.relative(base, path.dirname(file)).split(path.sep).filter(Boolean);
    const label = path.relative(process.cwd(), file);

    if (parts.length === 0) { skipped.push(`${label}  (index page, manually karein)`); continue; }
    if (parts.some((p) => p.startsWith("["))) { skipped.push(`${label}  (dynamic folder, generateMetadata chahiye)`); continue; }
    if (type !== "locations" && parts.length !== 1) { skipped.push(`${label}  (unexpected depth)`); continue; }
    if (type === "locations" && parts.length > 2) { skipped.push(`${label}  (unexpected depth)`); continue; }

    const src = fs.readFileSync(file, "utf8");
    if (/["']use client["']/.test(src)) { skipped.push(`${label}  ("use client")`); continue; }
    if (/export\s+const\s+metadata|generateMetadata/.test(src)) { skipped.push(`${label}  (metadata pehle se hai)`); continue; }

    const { title, desc } = make(parts);
    const block =
      `import { slugToTitle as _s } from "@/lib/seo";\n\n` +
      `export const metadata = {\n` +
      `  title: \`${title}\`,\n` +
      `  description: \`${desc}\`,\n` +
      `  alternates: { canonical: "/${type}/${parts.join("/")}" },\n` +
      `};\n\n`;

    if (WRITE) fs.writeFileSync(file, block + src);
    console.log(`${WRITE ? "UPDATED" : "WILL UPDATE"}: ${label}`);
    changed++;
  }
}

console.log(`\n${changed} files ${WRITE ? "updated" : "would be updated"}.`);
if (skipped.length) console.log("\nSKIPPED:\n" + skipped.join("\n"));