import { withYoast } from "@/lib/yoast-seo";
import ContactClient from "./ContactClient";

const baseMetadata = {
  title: "Contact Us",
  description:
    "Contact Tender Elite for tender search, GeM registration, bid management and documentation support. Call or write to us for a free consultation.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactClient />;
}
export async function generateMetadata() {
  return withYoast("/contact", baseMetadata);
}
