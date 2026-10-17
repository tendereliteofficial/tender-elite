import type { Metadata } from "next";

const QUERY = `query($slug: String!) {
  pages(where: { name: $slug }, first: 1) {
    nodes { title seo { title metaDesc opengraphImage { sourceUrl } } }
  }
}`;

export async function withYoast(route: string, base: Metadata): Promise<Metadata> {
  const endpoint = process.env.WORDPRESS_API_URL;
  if (!endpoint) return base;

  const slug = route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "-");

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY, variables: { slug } }),
      next: { revalidate: 3600 },
    });
    if (!res.ok) return base;

    const json = await res.json();
    const node = json?.data?.pages?.nodes?.[0];
    const seo = node?.seo;
    if (!seo?.metaDesc) return base;

    // Yoast ka default title ("... - Tender Elite" ya "cms.") live na jaye
    const isDefault =
      !seo.title ||
      seo.title.includes("cms.tenderelite.com") ||
      seo.title === `${node?.title ?? ""} - Tender Elite`;

    const titleText = isDefault
      ? typeof base.title === "string" ? base.title : undefined
      : (seo.title as string);
    const image: string | undefined = seo.opengraphImage?.sourceUrl;

    const openGraph = {
      ...(base.openGraph ?? {}),
      ...(titleText ? { title: titleText } : {}),
      description: seo.metaDesc,
      ...(image ? { images: [image] } : {}),
    } as Metadata["openGraph"];

    return {
      ...base,
      ...(isDefault ? {} : { title: { absolute: seo.title as string } }),
      description: seo.metaDesc,
      openGraph,
    };
  } catch {
    return base; // WordPress na chale to code wala metadata chalega
  }
}