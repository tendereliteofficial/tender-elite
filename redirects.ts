type R = { source: string; destination: string; permanent: boolean };
const r = (source: string, destination: string): R => ({
  source,
  destination,
  permanent: true,
});

// Framer slug -> naya slug
const services: [string, string][] = [
  ["tender-submission-services", "tender-submission"],
  ["tender-portal-registration", "tender-portal-registration"],
  ["tender-documentation-and-compliance", "tender-documentation-compliance"],
  ["gem-product-listing-and-uploading", "gem-product-listing-uploading"],
  ["boq-preparation-and-cost-estimation", "boq-preparation-cost-estimation"],
  ["vendor-assesment", "vendor-assessment-support"],
  ["joint-venture-and-consortium-support", "joint-venture-consortium-formation"],
  ["msme-udyam", "msme-udyam-registration-assistance"],
  ["brand-approval", "brand-approval-assistance"],
  ["forward-auction-support-services", "forward-auction-support"],
  ["post-tender-documentation-support-services", "post-tender-documentation-support"],
  ["pre-bid-meeting-assistance", "pre-bid-meeting-assistance"],
  ["reverse-auction", "reverse-auction-support"],
  ["startup-india-registration-support", "startup-india-registration-support"],
  ["rfq-eoi-preparation-services", "rfq-eoi-preparation-services"],
  ["gem-catalogue-management-services", "gem-catalogue-management"],
  ["bid-management-support", "bid-management-support"],
];

const industries: [string, string][] = [
  ["agriculture-and-agro-industry", "agriculture-agro-industry"],
  ["automobile-transportation-industry", "automobile-transportation"],
  ["chemicals-industrial-products-industry", "chemicals-industrial-products"],
  ["construction-infrastructure-industry", "construction-infrastructure"],
  ["defence-security-industry", "defence-security"],
  ["education-institutional-industry", "education-institutional"],
  ["electrical-electronics-industry", "electrical-electronics"],
  ["facility-management-industry", "facility-management"],
  ["fmcg-consumer-goods-industry", "fmcg-consumer-goods"],
  ["food-catering-industry", "food-catering"],
  ["healthcare-medical-industry", "healthcare-medical"],
  ["hospitality-tourism-industry", "hospitality-tourism"],
  ["information-technology-\\(it\\)-industry", "information-technology"],
  ["logistics-supply-chain-industry", "logistics"],
  ["manpower-staffing-industry", "manpower-staffing"],
  ["mechanical-engineering-industry", "mechanical-engineering"],
  ["mining-metals-industry", "mining-metals"],
  ["oil-gas-industry", "oil-gas"],
  ["packaging-industry", "packaging"],
  ["pharmaceutical-industry", "pharmaceutical"],
  ["printing-stationery-industry", "printing-stationery"],
  ["railway-industry", "railway"],
  ["renewable-energy-industry", "renewable-energy"],
  ["security-surveillance-industry", "security-surveillance"],
  ["telecom-industry", "telecom"],
  ["textile-garment-industry", "textile-garment"],
  ["water-supply-sanitation-industry", "water-supply-sanitation"],
  ["government-public-sector-projects", "government-public-sector"],
];

// Maharashtra cities: jahan slug same hai
const citiesSame = [
  "kolhapur", "chhatrapati-sambhajinagar", "ulhasnagar", "vasai-virar",
  "panvel", "bhiwandi", "navi-mumbai", "thane", "nashik", "nagpur", "pune",
  "washim", "buldhana", "gondia", "hingoli", "karad", "malegaon", "baramati",
  "jaysingpur", "ichalkaranji", "palghar", "ratnagiri", "satara", "parbhani",
  "dhule", "beed", "yavatmal", "wardha", "chandrapur", "nanded", "akola",
  "jalgaon", "amravati", "ahmednagar", "solapur", "sangli", "mumbai",
];

// Maharashtra cities: jahan slug alag hai
const citiesDiff: [string, string][] = [
  ["mira-bhayandar", "mira-bhayandar"],
  ["dombivali", "kalyan-dombivli"],
  ["osmanabad-\\(dharashiv\\)", "osmanabad"],
];

// States: jahan slug same hai
const statesSame = [
  "nagaland", "kerala", "sikkim", "lakshadweep", "karnataka", "gujarat",
  "haryana", "puducherry", "ladakh", "delhi", "chandigarh",
  "andaman-and-nicobar-islands", "west-bengal", "uttarakhand", "uttar-pradesh",
  "tripura", "telangana", "tamil-nadu", "rajasthan", "punjab", "odisha",
  "mizoram", "meghalaya", "manipur", "madhya-pradesh", "jharkhand",
  "himachal-pradesh", "goa", "chhattisgarh", "bihar", "assam",
  "arunachal-pradesh", "andhra-pradesh", "maharashtra",
];

const statesDiff: [string, string][] = [
  ["jammu-kashmir", "jammu-and-kashmir"],
  ["dadra-and-nagar-haveli-and-daman", "dadra-and-nagar-haveli-and-daman-and-diu"],
  ["chattisgarh", "chhattisgarh"], // Framer ka spelling galti wala page
];

export const redirects: R[] = [
  ...services.map(([from, to]) => r(`/${from}`, `/services/${to}`)),
  ...industries.map(([from, to]) => r(`/${from}`, `/industries/${to}`)),
  ...citiesSame.map((c) => r(`/${c}`, `/locations/maharashtra/${c}`)),
  ...citiesDiff.map(([from, to]) => r(`/${from}`, `/locations/maharashtra/${to}`)),
  ...statesSame.map((s) => r(`/${s}`, `/states/${s}`)),
  ...statesDiff.map(([from, to]) => r(`/${from}`, `/states/${to}`)),

  // Baaki pages
  r("/tender-university", "/insights/tender-university"),
  r("/blogs", "/insights/blogs"),
  r("/frequently-asked-questions", "/insights/faqs"),
  r("/locations-we-serve", "/locations"),
  r("/locations-we-serve-in-maharashtra", "/locations/maharashtra"),
  r("/contact-us", "/contact"),

  // Latur ka nayi site mein page nahi hai, isliye Maharashtra list par
  r("/latur", "/locations/maharashtra"),
];