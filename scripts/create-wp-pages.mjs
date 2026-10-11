import fs from "fs";
import path from "path";

const WP = "https://cms.tenderelite.com";
const USER = process.env.WP_USER;
const PASS = process.env.WP_APP_PASSWORD;

if (!USER || !PASS) {
  console.error("WP_USER ya WP_APP_PASSWORD set nahi hai");
  process.exit(1);
}

const auth = "Basic " + Buffer.from(`${USER}:${PASS}`).toString("base64");

function walk(dir, route = "") {
  let urls = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  if (entries.some((e) => e.isFile() && /^page\.(tsx|jsx|ts|js)$/.test(e.name))) {
    urls.push(route || "/");
  }
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    if (e.name === "api" || e.name.startsWith("_") || e.name.startsWith("[") || e.name.startsWith("@")) continue;
    const seg = e.name.startsWith("(") ? "" : `/${e.name}`;
    urls = urls.concat(walk(path.join(dir, e.name), route + seg));
  }
  return urls;
}

const toSlug = (route) => (route === "/" ? "home" : route.slice(1).replace(/\//g, "-"));

const toTitle = (route) =>
  route === "/"
    ? "Home"
    : route
        .split("/")
        .filter(Boolean)
        .map((s) => s.replace(/-/g, " "))
        .join(" / ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const routes = walk(path.join(process.cwd(), "app"));
console.log(`${routes.length} pages mile`);

for (const route of routes) {
  const slug = toSlug(route);
  try {
    const check = await fetch(`${WP}/wp-json/wp/v2/pages?slug=${slug}&status=any`, {
      headers: { Authorization: auth },
    });
    const found = await check.json();
    if (Array.isArray(found) && found.length > 0) {
      console.log("skip (pehle se hai):", slug);
      continue;
    }
    const res = await fetch(`${WP}/wp-json/wp/v2/pages`, {
      method: "POST",
      headers: { Authorization: auth, "Content-Type": "application/json" },
      body: JSON.stringify({ title: toTitle(route), slug, status: "publish" }),
    });
    console.log(res.ok ? "bana:" : `fail ${res.status}:`, slug);
  } catch (err) {
    console.error("error:", slug, err.message);
  }
  await sleep(300);
}