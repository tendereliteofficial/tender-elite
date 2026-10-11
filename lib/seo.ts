const ACRONYMS: Record<string, string> = {
  gem: "GeM", msme: "MSME", boq: "BOQ", rfq: "RFQ", eoi: "EOI", fmcg: "FMCG",
};
const SMALL = new Set(["and", "of", "for", "the", "in"]);

// Jahan "&" ya special naam chahiye, yahan add karein
const OVERRIDES: Record<string, string> = {
  "security-surveillance": "Security & Surveillance",
  "hospitality-tourism": "Hospitality & Tourism",
  "education-institutional": "Education & Institutional",
  "defence-security": "Defence & Security",
  "fmcg-consumer-goods": "FMCG & Consumer Goods",
  "automobile-transportation": "Automobile & Transportation",
  "healthcare-medical": "Healthcare & Medical",
  "manpower-staffing": "Manpower & Staffing",
  "construction-infrastructure": "Construction & Infrastructure",
  "food-catering": "Food & Catering",
  "mining-metals": "Mining & Metals",
  "water-supply-sanitation": "Water Supply & Sanitation",
  "government-public-sector": "Government & Public Sector",
  "electrical-electronics": "Electrical & Electronics",
  "oil-gas": "Oil & Gas",
  "textile-garment": "Textile & Garment",
  "printing-stationery": "Printing & Stationery",
  "agriculture-agro-industry": "Agriculture & Agro Industry",
  "boq-preparation-cost-estimation": "BOQ Preparation & Cost Estimation",
  "tender-documentation-compliance": "Tender Documentation & Compliance",
  "joint-venture-consortium-formation": "Joint Venture & Consortium Formation",
  "rfq-eoi-preparation-services": "RFQ & EOI Preparation Services",
  "gem-product-listing-uploading": "GeM Product Listing & Uploading",
  "chhatrapati-sambhajinagar": "Chhatrapati Sambhajinagar",
};

export function slugToTitle(slug: string): string {
  if (OVERRIDES[slug]) return OVERRIDES[slug];
  return slug
    .split("-")
    .map((w, i) =>
      ACRONYMS[w] ?? (i > 0 && SMALL.has(w) ? w : w[0].toUpperCase() + w.slice(1))
    )
    .join(" ");
}