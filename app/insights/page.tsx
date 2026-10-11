import InsightsClient from "./InsightsClient";

export const metadata = {
  title: "Tender Insights & Resources",
  description:
    "Tender insights, guides and FAQs from Tender Elite. Learn how government tenders work in India and get practical tips to prepare stronger bids.",
  alternates: { canonical: "/insights" },
};

export default function Page() {
  return <InsightsClient />;
}