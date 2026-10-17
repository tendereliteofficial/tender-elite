import { withYoast } from "@/lib/yoast-seo";
import NaviMumbaiClient from "./NaviMumbaiClient";

const baseMetadata = {
  title: "Tender Services in Navi Mumbai, Maharashtra",
  description:
    "Get local tender support in Navi Mumbai, Maharashtra: tender search, GeM registration, bid preparation and submission by Tender Elite.",
  alternates: { canonical: "/locations/maharashtra/navi-mumbai" },
};

export default function Page() {
  return <NaviMumbaiClient />;
}
export async function generateMetadata() {
  return withYoast("/locations/maharashtra/navi-mumbai", baseMetadata);
}
