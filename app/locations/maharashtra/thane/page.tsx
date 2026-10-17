import { withYoast } from "@/lib/yoast-seo";
import ThaneClient from "./ThaneClient";

const baseMetadata = {
  title: "Tender Services in Thane, Maharashtra",
  description:
    "Get local tender support in Thane, Maharashtra: tender search, GeM registration, bid preparation and submission by Tender Elite.",
  alternates: { canonical: "/locations/maharashtra/thane" },
};

export default function Page() {
  return <ThaneClient />;
}
export async function generateMetadata() {
  return withYoast("/locations/maharashtra/thane", baseMetadata);
}
