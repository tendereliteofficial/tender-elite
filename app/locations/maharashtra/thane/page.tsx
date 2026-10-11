import ThaneClient from "./ThaneClient";

export const metadata = {
  title: "Tender Services in Thane, Maharashtra",
  description:
    "Get local tender support in Thane, Maharashtra: tender search, GeM registration, bid preparation and submission by Tender Elite.",
  alternates: { canonical: "/locations/maharashtra/thane" },
};

export default function Page() {
  return <ThaneClient />;
}