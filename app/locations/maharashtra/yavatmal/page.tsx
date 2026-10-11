import { slugToTitle as _s } from "@/lib/seo";

export const metadata = {
  title: `Tender Services in ${_s("yavatmal")}, ${_s("maharashtra")}`,
  description: `Get local tender support in ${_s("yavatmal")}, ${_s("maharashtra")}: tender search, GeM registration, bid preparation and submission by Tender Elite.`,
  alternates: { canonical: "/locations/maharashtra/yavatmal" },
};

import Link from "next/link";
import type { ReactNode } from "react";

const serif = "Georgia, 'Times New Roman', serif";
const sans = "Arial, Helvetica, sans-serif";

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Insights", "/insights"],
  ["About Us", "/about-us"],
] as const;

const authorities = [
  "Yavatmal Municipal Council",
  "MIDC",
  "Maharashtra PWD",
  "Agricultural Development Authorities",
  "Water Resource Departments",
  "Railway Authorities",
  "Industrial Development Agencies",
  "Public Health Departments",
  "Infrastructure Authorities",
];

const services = [
  {
    name: "GeM Registration Services",
    link: "/services/tender-portal-registration",
  },
  {
    name: "Tender Submission Services",
    link: "/services/tender-submission",
  },
  {
    name: "Tender Portal Registration",
    link: "/services/tender-portal-registration",
  },
  {
    name: "BOQ Preparation & Verification",
    link: "/services/boq-preparation-cost-estimation",
  },
  {
    name: "Bid Documentation Support",
    link: "/services/bid-management-support",
  },
  {
    name: "Technical Tender Assistance",
    link: "/services/tender-documentation-compliance",
  },
  {
    name: "OEM Authorization Support",
    link: "/services/brand-approval-assistance",
  },
  {
    name: "Reverse Auction Support",
    link: "/services/reverse-auction-support",
  },
];

const snapshotRows = [
  ["City", "Yavatmal"],
  ["State", "Maharashtra"],
  ["Population", "28+ Lakh District Population"],
  ["Economic Importance", "Cotton & Agro-Industrial Hub"],
  ["Total Road Network", "13,500+ KM District Connectivity"],
  ["Railway Connectivity", "Wardha–Yavatmal–Nanded Rail Corridor"],
  ["Major Railway Connectivity", "Yavatmal, Dhamangaon Connectivity Region"],
  ["Strategic Connectivity", "Nagpur, Wardha & Marathwada Corridor"],
  ["Major Industrial Ecosystem", "Yavatmal MIDC & Cotton Processing Clusters"],
  ["Agricultural Importance", "Cotton, Soybean & Agro Processing"],
];

const timeline = [
  ["2020–21", "Healthcare infrastructure support, agro-industrial stabilization, utility modernization", "₹3,500+ Crore"],
  ["2021–22", "Industrial infrastructure upgrades, road redevelopment, irrigation modernization", "₹6,000+ Crore"],
  ["2022–23", "Cotton processing ecosystem expansion, logistics infrastructure growth", "₹10,000+ Crore"],
  ["2023–24", "Smart utility modernization, warehousing ecosystem expansion", "₹15,000+ Crore"],
  ["2024–25", "Large-scale investments in textile infrastructure & industrial modernization", "₹24,000+ Crore"],
  ["2025–26", "Integrated logistics ecosystem & agro-industrial corridor expansion", "₹34,000+ Crore (Projected)"],
  ["2026 & Beyond", "Smart industrial ecosystem & textile infrastructure growth", "₹50,000+ Crore Expected Long-Term Investment Pipeline"],
];

const economicCards = [
  {
    intro:
      "Yavatmal has emerged as one of Maharashtra’s strongest cotton-processing and agro-industrial ecosystems with continuous investments across:",
    items: [
      "Cotton Processing",
      "Textile Manufacturing",
      "Agro Processing",
      "Industrial Manufacturing",
      "Smart Infrastructure",
      "Warehousing & Logistics",
      "Renewable Energy",
      "Railway Infrastructure",
      "Commercial Infrastructure",
      "Utility Modernization",
    ],
  },
  {
    intro: "Yavatmal contributes significantly to:",
    items: [
      "Maharashtra’s cotton economy",
      "Textile processing ecosystem",
      "Soybean processing infrastructure",
      "Agro-industrial supply chain",
      "Logistics ecosystem growth",
    ],
  },
  {
    intro: "The district is widely recognized for:",
    items: [
      "Cotton cultivation",
      "Cotton ginning industries",
      "Soybean production",
      "Agro-processing ecosystem",
      "Textile support infrastructure",
      "The cotton economy remains one of the district’s largest economic drivers and supports thousands of farmers, industrial units, logistics operators, and textile businesses across Vidarbha.",
    ],
  },
];

const megaProjects = [
  {
    title: "Wardha–Yavatmal–Nanded Railway Corridor",
    text:
      "The Wardha–Yavatmal–Nanded broad gauge railway project is rapidly progressing and is expected to significantly improve freight transportation, agricultural logistics, industrial connectivity, supply chain infrastructure and passenger movement. The project is expected to boost economic growth across Vidarbha and Marathwada.",
  },
  {
    title: "Industrial & Agro Processing Infrastructure",
    text:
      "Yavatmal is witnessing increasing investments across soybean processing, agro-processing units, warehousing infrastructure, industrial corridors, logistics modernization and rural industrialization, which continue driving procurement and industrial growth opportunities.",
  },
  {
    title: "Cotton & Textile Processing Ecosystem",
    text:
      "Yavatmal remains one of Maharashtra’s strongest cotton-producing regions, ginning & pressing ecosystems, agro-processing corridors and textile support infrastructure markets. Investments continue across textile infrastructure, warehousing, agro logistics, industrial support infrastructure and cotton processing modernization.",
  },
];

const majorProjects = [
  {
    title: "Renewable Energy & Rural Infrastructure Growth",
    text:
      "Recent government initiatives include solar infrastructure projects, rural utility modernization, irrigation upgrades, agricultural power infrastructure and tribal development infrastructure. These projects are accelerating infrastructure investments across the district.",
  },
  {
    title: "Cotton, Agro & Logistics Modernization",
    text:
      "The district’s cotton and soybean economy, supported by agro-processing, warehousing, logistics and industrial infrastructure, creates procurement opportunities for contractors, OEMs, MSMEs, EPC firms, consultants and technology providers across Vidarbha.",
  },
];

const tenderCategories = [
  "Civil Construction",
  "Textile Infrastructure",
  "Industrial Infrastructure",
  "HVAC Works",
  "Electrical Engineering",
  "Fire Fighting Systems",
  "Railway Infrastructure",
  "Smart Infrastructure",
  "Water Supply & Irrigation",
  "Security & Surveillance",
  "Utility Modernization",
  "Industrial Automation",
];

const whyCards = [
  {
    title: "Massive Infrastructure Investments",
    intro: "Continuous investments in:",
    items: [
      "Railway infrastructure",
      "Logistics corridors",
      "Warehousing ecosystems",
      "Industrial modernization",
      "Smart infrastructure",
      "Irrigation projects",
    ],
    footer: "Are generating significant tender opportunities.",
  },
  {
    title: "Strong Cotton & Agro-Industrial Ecosystem",
    intro: "Yavatmal hosts:",
    items: [
      "Cotton processing industries",
      "Soybean processing units",
      "Agro-processing ecosystems",
      "Textile support infrastructure",
      "Industrial manufacturing",
    ],
    footer: "Creating large-scale procurement demand.",
  },
  {
    title: "Strategic Vidarbha Connectivity",
    intro: "Yavatmal’s connectivity with:",
    items: [
      "Nagpur",
      "Wardha",
      "Nanded",
      "Marathwada",
      "Industrial freight corridors",
    ],
    footer: "Makes it an important industrial and commercial growth region.",
  },
];

const areas = [
  "Yavatmal City",
  "Wani",
  "Pusad",
  "Pandharkawada",
  "Darwha",
  "Digras",
  "Ralegaon",
  "Ghatanji",
  "Umarkhed",
  "Arni",
  "Kalamb",
  "Agro Processing Corridor",
  "Cotton Market Region",
  "MIDC Area",
  "Railway Connectivity Region",
];

const industrialAreas = [
  "Yavatmal MIDC",
  "Agro Processing Clusters",
  "Sugar Industrial Ecosystems",
  "Cotton Processing Corridors",
  "Warehousing & Logistics Corridors",
  "Renewable Energy Infrastructure Zones",
  "Rural Industrial Ecosystems",
  "Food Processing Infrastructure",
  "Railway Connectivity Industrial Belt",
  "Marathwada Industrial Corridor",
];

const industrialSectors = [
  "Cotton Processing",
  "Textile Manufacturing",
  "Agro Processing",
  "Soybean Processing",
  "Industrial Manufacturing",
  "Logistics & Warehousing",
  "Renewable Energy",
  "Industrial Automation",
  "Commercial Infrastructure",
  "Utility Infrastructure",
];

const industrialOpportunities = [
  "Industrial Construction",
  "HVAC Systems",
  "Electrical Infrastructure",
  "Fire Fighting Systems",
  "Railway Infrastructure",
  "Textile Infrastructure",
  "Water Treatment Plants",
  "Smart Infrastructure",
  "Solar Projects",
  "Facility Management Contracts",
];

const industries = [
  {
    name: "Infrastructure",
    image: "/images/infrastructure.png",
    link: "/industries/construction-infrastructure"
  },
  {
    name: "IT & Software",
    image: "/images/itsoftware.png",
    link: "/industries/information-technology"
  },
  {
    name: "Pharmaceuticals",
    image: "/images/pharmaceuticals.png",
    link: "/industries/pharmaceutical"
  },
  {
    name: "Engineering",
    image: "/images/engineering.png",
    link: "/industries/mechanical-engineering"
  },
  {
    name: "Security Services",
    image: "/images/securityservices.png",
    link: "/industries/security-surveillance"
  },
  {
    name: "Facility Management",
    image: "/images/facilitymanagement.png",
    link: "/industries/facility-management"
  },
  {
    name: "Logistics",
    image: "/images/logistics.png",
    link: "/industries/logistics"
  },
  {
    name: "Healthcare",
    image: "/images/healthcare.png",
    link: "/industries/healthcare-medical"
  },
];

const locations = [
  {
    name: "Maharashtra",
    image: "/images/maharashtracard.png",
    link: "/states/maharashtra",
  },
  {
    name: "Karnataka",
    image: "/images/karnatakacard.png",
    link: "/states/karnataka",
  },
  {
    name: "Kerala",
    image: "/images/keralacard.png",
    link: "/states/kerala",
  },
  {
    name: "Gujarat",
    image: "/images/gujaratcard.png",
    link: "/states/gujarat",
  },
  {
    name: "Tamil Nadu",
    image: "/images/tamilnaducard.png",
    link: "/states/tamil-nadu",
  },
  {
    name: "Uttar Pradesh",
    image: "/images/uttarpradeshcard.png",
    link: "/states/uttar-pradesh",
  },
  {
    name: "Punjab",
    image: "/images/punjabcard.png",
    link: "/states/punjab",
  },
  {
    name: "Rajasthan",
    image: "/images/rajasthancard.png",
    link: "/states/rajasthan",
  },
];

const futureGrowth = [
  "Cotton ecosystem modernization",
  "Textile infrastructure expansion",
  "Railway corridor development",
  "Warehousing modernization",
  "Smart utility infrastructure",
  "Agro-industrial modernization",
  "Renewable energy projects",
  "Logistics ecosystem expansion",
];

const futureBeneficiaries = [
  "Contractors",
  "OEMs",
  "MSMEs",
  "Infrastructure Companies",
  "EPC Firms",
  "Consultants",
  "Technology Providers",
  "Agro Export Companies",
];

function SectionTitle({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <h2
      className={`text-center text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
        light ? "text-white" : "text-[#D4A017]"
      }`}
      style={{ fontFamily: serif }}
    >
      {children}
    </h2>
  );
}

function DarkCard({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="flex h-full flex-col rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 text-white shadow-[0_10px_25px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,0.25)] sm:p-7">
      {title && (
        <h3
          className="mb-5 text-xl font-bold leading-tight text-[#D4A017] sm:text-2xl"
          style={{ fontFamily: serif }}
        >
          {title}
        </h3>
      )}
      <div className="text-[15px] leading-7 sm:text-base">{children}</div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-[5px] border-[#D4A017] bg-white">
      <div className="mx-auto flex min-h-[90px] max-w-[1440px] items-center gap-4 px-5 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <img src="/images/logo-mark.png" alt="Tender Elite Logo" className="h-16 w-20 object-contain" />
          <img src="/images/logo-wordmark.png" alt="Tender Elite" className="hidden w-44 object-contain sm:block md:w-48" />
        </Link>

        <nav className="ml-auto hidden items-center gap-3 lg:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="rounded-[20px] border border-white bg-[#D4A017] px-5 py-3 text-sm font-semibold text-black shadow-[0_6px_14px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[0_12px_22px_rgba(7,27,59,0.20)]"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-[20px] border border-[#D4A017] bg-[#B71432] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#8F0F29]"
          >
            Contact Us
          </Link>
        </nav>

        <details className="relative ml-auto lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl bg-[#D4A017] text-xl font-bold text-[#071B3B]">
            ☰
          </summary>
          <div className="absolute right-0 top-14 w-56 rounded-2xl border bg-white p-3 shadow-2xl">
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="block rounded-xl px-4 py-3 font-semibold text-[#071B3B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4A017] hover:text-white"
              >
                {label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 block rounded-xl bg-[#B71432] px-4 py-3 text-center font-semibold text-white">
              Contact Us
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-[#071B3B] text-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 lg:min-h-[565px] lg:grid-cols-2 lg:px-12">
        <div>
          <h1
            className="text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: serif }}
          >
            Tender Consultant in
            <br />
            <span className="text-[#D4A017]">Yavatmal</span>
          </h1>

          <div className="my-6 h-[3px] w-full max-w-[580px] bg-[#D4A017]" />

          <p
            className="mb-5 max-w-[640px] text-base font-bold leading-7"
            style={{ fontFamily: serif }}
          >
            Maharashtra’s Cotton, Textile &amp; Agro-Industrial Growth Hub
          </p>

          <p className="max-w-[640px] text-[15px] leading-7 sm:text-base">
            Yavatmal is one of Vidarbha’s fastest-growing cotton, agro-processing, textile, and
            infrastructure development ecosystems. Located in eastern Maharashtra, Yavatmal is
            widely recognized as the “Cotton City” of Vidarbha because of its massive cotton
            cultivation, ginning, textile processing, and agro-industrial economy. The district
            plays a major role in Maharashtra’s cotton ecosystem and agricultural supply chain.
          </p>

          <p className="mt-5 max-w-[640px] text-[15px] leading-7 sm:text-base">
            <span className="font-bold text-[#D4A017]">Historically known for:</span>{" "}
            Cotton production, Soybean processing, Agro-processing industries, Textile ecosystem,
            Rural industrialization, Agricultural logistics.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/Yavatmalhero.png"
            alt="Yavatmal"
            className="h-[290px] w-full max-w-[663px] rounded-[20px] border-[3px] border-[#D4A017] object-cover shadow-[0_0_30px_rgba(0,0,0,0.75)] sm:h-[360px] lg:h-[404px]"
          />
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1250px] px-5">
        <div className="grid items-stretch gap-7 lg:grid-cols-3">
          <DarkCard>
            <p className="mb-4 text-[#D4A017]">Yavatmal is rapidly emerging as an important:</p>
            <ul className="space-y-2.5">
              {[
                "Textile manufacturing corridor",
                "Cotton processing ecosystem",
                "Logistics infrastructure region",
                "Agro-industrial growth hub",
                "Renewable energy ecosystem",
                "Industrial support economy",
              ].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>

          <DarkCard>
            <p className="mb-4 text-[#D4A017]">
              The district is witnessing continuous investments across:
            </p>
            <ul className="space-y-2.5">
              {[
                "Cotton Processing Infrastructure",
                "Textile Manufacturing",
                "Agro Processing Ecosystem",
                "Smart Urban Infrastructure",
                "Warehousing & Logistics",
                "Railway Infrastructure",
                "Renewable Energy Projects",
                "Industrial Manufacturing",
                "Irrigation Infrastructure",
                "Utility Modernization",
              ].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>

          <DarkCard>
            <p className="mb-4 text-[#D4A017]">Yavatmal’s economy is strongly supported by:</p>
            <ul className="space-y-2.5">
              {[
                "Cotton ginning & pressing industries",
                "Soybean processing",
                "Agro-processing infrastructure",
                "Textile support ecosystem",
                "Agricultural logistics corridors",
              ].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>
        </div>

        <div className="mt-7">
          <DarkCard>
            <p className="mb-5 text-[#D4A017]">
              The district continuously generates government and industrial tender opportunities through:
            </p>
            <div className="grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {authorities.map((item) => (
                <div key={item}>• {item}</div>
              ))}
            </div>
            <p className="mt-6 border-t border-white/20 pt-5">
              Tender Elite provides complete government tender consultancy, GeM registration, BOQ
              preparation, bid management, and tender submission services across Yavatmal.
            </p>
          </DarkCard>
        </div>
      </div>
    </section>
  );
}

function SnapshotSection() {
  return (
    <section className="bg-[#071B3B] py-12">
      <div className="mx-auto max-w-[1160px] px-5">
        <SectionTitle light>Yavatmal Infrastructure &amp; Connectivity Overview</SectionTitle>

        <h3
          className="mt-5 text-center text-3xl font-bold text-[#D4A017]"
          style={{ fontFamily: serif }}
        >
          Yavatmal City Snapshot
        </h3>

        <div className="mt-8 overflow-hidden rounded-[20px] border-[3px] border-white bg-white shadow-xl">
          <div className="grid grid-cols-1 bg-white text-[#071B3B] sm:grid-cols-[42%_58%]">
            <div className="border-b border-slate-300 px-5 py-4 text-center font-bold sm:border-b-0 sm:border-r">
              Category
            </div>
            <div className="px-5 py-4 text-center font-bold">Details</div>
          </div>

          {snapshotRows.map(([category, detail]) => (
            <div
              key={category}
              className="grid grid-cols-1 border-t border-slate-300 bg-white sm:grid-cols-[42%_58%]"
            >
              <div className="border-b border-slate-300 px-5 py-3 text-center text-sm font-semibold text-[#071B3B] sm:border-b-0 sm:border-r">
                {category}
              </div>
              <div className="px-5 py-3 text-center text-sm text-[#071B3B]">{detail}</div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-7 max-w-[1050px] text-center text-base font-bold leading-7 text-white">
          Yavatmal continues witnessing rapid agro-industrial modernization, textile ecosystem
          growth, logistics expansion, and infrastructure development.
        </p>
      </div>
    </section>
  );
}

function EconomicOverview() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>Yavatmal — Vidarbha’s Cotton &amp; Textile Infrastructure Engine</SectionTitle>

        <p className="mx-auto mt-5 max-w-[1100px] text-center text-lg font-bold leading-7 text-[#071B3B]">
          Yavatmal is emerging as a major cotton-processing, textile, agro-industrial and logistics
          growth region in Vidarbha.
        </p>

        <div className="mx-auto mt-9 grid max-w-[1220px] items-stretch gap-7 lg:grid-cols-3">
          {economicCards.map((card, index) => (
            <DarkCard key={index}>
              <p className="mb-4 text-[#D4A017]">{card.intro}</p>
              <ul className="space-y-2.5">
                {card.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </DarkCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1340px] px-5">
        <SectionTitle>Yavatmal Economic &amp; Development Growth Timeline</SectionTitle>

        <h3
          className="mt-5 text-center text-2xl font-bold text-[#071B3B]"
          style={{ fontFamily: serif }}
        >
          Economic Growth, Infrastructure Expansion &amp; Public Investment
        </h3>

        <div className="mt-8 overflow-x-auto pb-2">
          <div className="min-w-[1030px] overflow-hidden rounded-[20px] bg-[#071B3B]">
            <div className="grid grid-cols-[180px_minmax(0,1fr)_320px] border-b border-white/30 font-semibold text-white">
              <div className="border-r border-white/30 p-5">Financial Year</div>
              <div className="border-r border-white/30 p-5">
                Major Growth &amp; Infrastructure Highlights
              </div>
              <div className="p-5">Estimated Public Infrastructure &amp; Development Spending</div>
            </div>

            {timeline.map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-[180px_minmax(0,1fr)_320px] border-b border-white/30 text-white last:border-b-0"
              >
                <div className="border-r border-white/30 p-5">{row[0]}</div>
                <div className="border-r border-white/30 p-5 leading-7">{row[1]}</div>
                <div className="p-5 font-bold leading-7 text-[#D4A017]">{row[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MegaProjects() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1350px] px-5">
        <SectionTitle>Major Mega Projects Driving Yavatmal’s Growth</SectionTitle>

        <div className="mt-9 grid items-stretch gap-5 lg:grid-cols-3">
          {megaProjects.map((project) => (
            <DarkCard key={project.title} title={project.title}>
              <p className="leading-7">{project.text}</p>
            </DarkCard>
          ))}
        </div>

        <div className="mt-7 grid gap-7 lg:grid-cols-2">
          {majorProjects.map((project) => (
            <DarkCard key={project.title} title={project.title}>
              <p className="leading-7">{project.text}</p>
            </DarkCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function GovernmentDevelopment() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1150px] px-5">
        <SectionTitle>Government Development Spending &amp; Tender Ecosystem</SectionTitle>

        <div className="mx-auto mt-9 grid max-w-[1050px] items-stretch gap-7 md:grid-cols-2">
          <DarkCard title="Major Tender Generating Authorities">
            <ul className="space-y-2.5">
              {authorities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>

          <DarkCard title="Major Tender Categories">
            <ul className="space-y-2.5">
              {tenderCategories.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>
        </div>

        <p className="mt-8 text-center text-lg font-bold text-[#071B3B]">
          Tender Elite provides complete government tender consultancy services across Yavatmal
          including:
        </p>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>Services Offered by Tender Elite in Ahmednagar</SectionTitle>
        <div className="mx-auto mt-8 grid max-w-[1160px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
{services.map((service) => (
  <Link
    key={service.name}
    href={service.link}
    className="flex min-h-[145px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-5 py-6 text-center text-lg font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(7,27,59,0.28)]"
    style={{ fontFamily: serif }}
  >
    {service.name}
  </Link>
))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/services" className="rounded-[20px] bg-[#D4A017] px-9 py-3 font-bold text-[#071B3B] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyYavatmal() {
  return (
    <section className="bg-[#071B3B] py-14">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle light>Why Yavatmal Is One of Vidarbha’s Emerging Tender Markets</SectionTitle>

        <div className="mt-9 grid items-stretch gap-7 lg:grid-cols-3">
          {whyCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[20px] border-[3px] border-[#D4A017] bg-white p-7 text-[#071B3B] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01]"
            >
              <h3 className="text-2xl font-bold text-[#D4A017]" style={{ fontFamily: serif }}>
                {card.title}
              </h3>
              <p className="mt-5 text-lg font-medium">{card.intro}</p>
              <ul className="mt-3 space-y-2.5 text-lg font-medium" style={{ fontFamily: serif }}>
                {card.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="mt-5 border-t border-slate-200 pt-5 text-lg font-medium">
                {card.footer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AreasSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>Areas We Serve in Ahmednagar</SectionTitle>
        <p className="mt-5 text-center text-lg font-bold text-[#071B3B]">Tender Elite provides services across:</p>
        <div className="mx-auto mt-9 flex max-w-[1250px] flex-wrap justify-center gap-4">
          {areas.map((area) => (
            <Link
              key={area}
              href="/locations/maharashtra/"
              className="flex min-h-[80px] w-full max-w-[260px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-4 py-3 text-center font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2"
              style={{ fontFamily: serif }}
            >
              {area}
            </Link>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/locations/maharashtra/" className="rounded-[20px] bg-[#D4A017] px-9 py-3 font-bold text-[#071B3B] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}


function IndustrialAreasSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle>Industrial Areas &amp; MIDCs We Serve Near Beed</SectionTitle>
        <p className="mx-auto mt-5 max-w-[1065px] text-center text-base font-bold leading-7 text-[#071B3B]">
          Tender Elite provides consultancy services across major industrial ecosystems and agro-processing corridors near Beed.
        </p>
        <h3 className="mt-9 text-center text-3xl font-semibold text-[#D4A017]" style={{ fontFamily: serif }}>
          Major Industrial Areas &amp; Industrial Ecosystems
        </h3>
        <div className="mx-auto mt-8 flex max-w-[1200px] flex-wrap justify-center gap-5">
          {industrialAreas.map((area) => (
            <div
              key={area}
              className="flex min-h-[110px] w-full max-w-[280px] items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-5 py-5 text-center text-[17px] font-semibold leading-6 text-white transition-all duration-300 hover:-translate-y-2"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustrialOpportunitiesSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1050px] px-5">
        <div className="grid gap-7 lg:grid-cols-2">
          <DarkCard title="Key Industrial Sectors">
            <p className="mb-4">These ecosystems support:</p>
            <ul className="space-y-2.5">
              {industrialSectors.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>

          <DarkCard title="Tender Opportunities Across Infrastructure Zones">
            <p className="mb-4">Major tender opportunities include:</p>
            <ul className="space-y-2.5">
              {industrialOpportunities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle>Industries We Serve</SectionTitle>
        <p className="mx-auto mt-5 max-w-[900px] text-center font-bold leading-7 text-[#071B3B]">
          Empowering businesses across diverse sectors with expert tender consultancy, bid management, and strategic procurement support.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1140px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
{industries.map((industry) => (
  <Link
    key={industry.name}
    href={industry.link}
    className="group relative flex h-[195px] items-end justify-center overflow-hidden rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-2"
  >
    <img
      src={industry.image}
      alt={industry.name}
      className="absolute inset-0 h-full w-full object-cover opacity-100 transition-transform duration-500 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-black/10" />

    <div className="relative z-10 min-w-[150px] rounded-full border-2 border-[#D4A017] bg-[#071B3B] px-5 py-2 text-center text-sm font-bold text-white transition-all duration-300 group-hover:bg-[#D4A017] group-hover:text-[#071B3B]">
      {industry.name}
    </div>
  </Link>
))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/industries" className="rounded-[20px] bg-[#D4A017] px-9 py-3 font-bold text-[#071B3B] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

function LocationsSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>Locations We Serve</SectionTitle>

        <div className="mx-auto mt-9 grid max-w-[1230px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
{locations.map((location) => (
  <Link
    key={location.name}
    href={location.link}
    className="group relative flex h-[210px] items-end justify-center overflow-hidden rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-4 shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_32px_rgba(0,0,0,0.24)]"
  >
    <img
      src={location.image}
      alt={location.name}
      className="absolute inset-0 h-full w-full object-cover opacity-100 transition-transform duration-500 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-[#071B3B]/20 transition-all duration-300 group-hover:bg-[#071B3B]/15" />

    <div
      className="relative z-10 min-w-[145px] rounded-full border-2 border-[#D4A017] bg-[#071B3B] px-6 py-2 text-center text-sm font-bold text-white shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:bg-[#D4A017] group-hover:text-[#071B3B]"
      style={{ fontFamily: serif }}
    >
      {location.name}
    </div>
  </Link>
))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/locations"
            className="rounded-[20px] bg-[#D4A017] px-9 py-3 font-bold text-[#071B3B] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

function FutureOutlook() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionTitle>Future Outlook of Yavatmal Infrastructure &amp; Tender Market</SectionTitle>
        <div className="mx-auto mt-9 max-w-[1280px] rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 sm:p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-[#D4A017] sm:text-3xl" style={{ fontFamily: serif }}>
            Yavatmal is expected to witness massive future growth through:
          </h3>
          <div className="mt-6 grid gap-x-14 gap-y-3 md:grid-cols-2">
            {futureGrowth.map((item) => (
              <div key={item} className="text-base leading-7 text-white sm:text-lg">• {item}</div>
            ))}
          </div>

          <h3 className="mt-9 text-2xl font-bold text-[#D4A017] sm:text-3xl" style={{ fontFamily: serif }}>
            This will continue generating high-value government tender opportunities across multiple sectors for:
          </h3>
          <div className="mt-6 grid gap-x-14 gap-y-3 md:grid-cols-2">
            {futureBeneficiaries.map((item) => (
              <div key={item} className="text-base leading-7 text-white sm:text-lg">• {item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[900px] px-5">
        <div className="rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-6 py-10 text-center sm:px-10">
          <h2 className="text-3xl font-bold leading-tight text-[#D4A017] sm:text-4xl" style={{ fontFamily: serif }}>
            Looking for Tender Consultant Services in Yavatmal?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-[20px] border border-[#D4A017] bg-[#B71432] px-12 py-4 font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#8F0F29]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#071B3B] px-5 py-12 text-white sm:px-8 sm:py-14 xl:px-24">

      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">

        <div>

          <img
            src="/images/footer.png"
            alt="Tender Elite"
            className="mb-5 w-[225px] object-contain"
          />

          <p className="max-w-xs text-sm leading-6 tracking-wider text-white/80">
            Empowering businesses through premium tender consultancy. We
            don&apos;t just process tenders – we build opportunities for
            business growth.
          </p>

        </div>

    {/* QUICK LINKS */}
    <div>
      <h3 className="mb-5 font-semibold tracking-wider">
        Quick Links
      </h3>

      <Link
        href="/"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Home
      </Link>

      <Link
        href="/services"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Services
      </Link>

      <Link
        href="/industries"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Industries
      </Link>

      <Link
        href="/insights"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Insights
      </Link>

      <Link
        href="/about-us"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        About Us
      </Link>

      <Link
        href="/contact"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Contact Us
      </Link>
    </div>

    {/* SERVICES */}
    <div>
      <h3 className="mb-5 font-semibold tracking-wider">
        Services
      </h3>

      <Link
        href="/services/tender-submission"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Tender Submission Services
      </Link>

      <Link
        href="/services/gem-catalogue-management"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        GeM Catalogue Management
      </Link>

      <Link
        href="/services/tender-portal-registration"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Tender Portal Registration
      </Link>

      <Link
        href="/services/bid-management-support"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Bid Management
      </Link>

      <Link
        href="/services/vendor-assessment-support"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Vendor Assessment
      </Link>

      <Link
        href="/services/joint-venture-consortium-formation"
        className="block py-1.5 text-sm tracking-wider transition-all duration-200 hover:translate-x-1 hover:text-[#D4A017]"
      >
        Joint Venture Support
      </Link>
    </div>

        <div>

          <h3 className="mb-5 font-semibold tracking-wider">
            Contact Info.
          </h3>

          <p className="text-sm leading-8 tracking-wider text-white/80">
        +91 7045060062
        <br />
        sales@tenderelite.com
        <br />
        Mumbai, Maharashtra, India
          </p>

        </div>

      </div>

      <div className="mx-auto mt-10 flex max-w-[1240px] flex-col justify-between gap-4 border-t border-white/20 pt-6 text-xs tracking-wider text-white/60 sm:flex-row sm:items-center">

        <span>
          © 2025 Tender Elite Consultancy. All rights reserved.
        </span>

        <div className="flex flex-wrap gap-6">

          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-[#D4A017]"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="transition-colors hover:text-[#D4A017]"
          >
            Terms of Service
          </Link>

        </div>

      </div>

    </footer>
  );
}

export default function YavatmalPage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <IntroSection />
        <SnapshotSection />
        <EconomicOverview />
        <Timeline />
        <MegaProjects />
        <GovernmentDevelopment />
        <ServicesSection />
        <WhyYavatmal />
        <AreasSection />
        <IndustrialAreasSection />
        <IndustrialOpportunitiesSection />
        <IndustriesSection />
        <LocationsSection />
        <FutureOutlook />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
