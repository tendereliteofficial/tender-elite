import { withYoast } from "@/lib/yoast-seo";
import InsightsClient from "./InsightsClient";

const baseMetadata = {
  title: "Tender Insights & Resources",
  description:
    "Tender insights, guides and FAQs from Tender Elite. Learn how government tenders work in India and get practical tips to prepare stronger bids.",
  alternates: { canonical: "/insights" },
};

export default function Page() {
  return <InsightsClient />;
}
export async function generateMetadata() {
  return withYoast("/insights", baseMetadata);
}
