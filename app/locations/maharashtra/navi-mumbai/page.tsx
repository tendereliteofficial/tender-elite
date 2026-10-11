import NaviMumbaiClient from "./NaviMumbaiClient";

export const metadata = {
  title: "Tender Services in Navi Mumbai, Maharashtra",
  description:
    "Get local tender support in Navi Mumbai, Maharashtra: tender search, GeM registration, bid preparation and submission by Tender Elite.",
  alternates: { canonical: "/locations/maharashtra/navi-mumbai" },
};

export default function Page() {
  return <NaviMumbaiClient />;
}