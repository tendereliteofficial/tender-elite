import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

const BASE = "https://www.tenderelite.com";

function walk(dir: string, route = ""): string[] {
  let urls: string[] = [];
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

export default function sitemap(): MetadataRoute.Sitemap {
  return walk(path.join(process.cwd(), "app")).map((p) => ({
    url: `${BASE}${p === "/" ? "" : p}`,
  }));
}