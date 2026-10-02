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
  ["City", "Washim"],
  ["State", "Maharashtra"],
  ["Population", "11+ Lakh District Population"],
  ["Economic Importance", "Agro-Industrial & Logistics Hub"],
  ["Total Road Network", "5,150+ Sq. KM"],
  ["Railway Connectivity", "Purna–Akola Railway Corridor"],
  ["Total Railway Stations", "25+ Major Stations"],
  ["Major Economic Sectors", "Agriculture, Agro Processing & Logistics"],
  [
    "Strategic Connectivity",
    "Akola, Hingoli, Yavatmal & Nanded Corridor + Stations",
  ],
  ["Major Highway Connectivity", "NH-161 & Regional Connectivity Corridors"],
  ["Smart City Status", "Smart City Mission Active"],
  ["Highway Connectivity", "Butibori MIDC, Hingna MIDC, MIHAN"],
];

const timeline = [
  [
    "2020–21",
    "Healthcare strengthening, irrigation support, utility modernization",
    "₹2,500+ Crore",
  ],
  [
    "2021–22",
    "Rural road upgrades, agriculture infrastructure growth",
    "₹5,000+ Crore",
  ],
  [
    "2022–23",
    "Agro-processing ecosystem expansion, logistics modernization",
    "₹8,000+ Crore",
  ],
  [
    "2023–24",
    "Smart utility modernization, warehousing ecosystem growth",
    "₹12,000+ Crore",
  ],
  [
    "2024–25",
    "Large-scale investments in agro infrastructure & roads",
    "₹18,000+ Crore",
  ],
  [
    "2025–26",
    "Integrated agro-industrial ecosystem expansion",
    "₹28,000+ Crore (Projected)",
  ],
  [
    "2026 & Beyond",
    "Smart rural infrastructure & logistics ecosystem growth",
    "₹45,000+ Crore Expected Long-Term Investment Pipeline",
  ],
];

const megaProjects = [
  {
    title: "Agro Processing & Food Manufacturing Ecosystem",
    text:
      "Washim is witnessing increasing investments in agro-processing industries, soybean processing, cotton processing, food manufacturing ecosystem and agricultural warehousing infrastructure. The district investment ecosystem focuses on food processing, rural entrepreneurship, industrial infrastructure and logistics modernization.",
  },
  {
    title: "NH-161 Four Lane Highway Development",
    text:
      "The four-lane Washim–Pangare section of NH-161 is significantly improving agricultural transportation, industrial freight movement, logistics connectivity, regional transportation infrastructure and warehousing ecosystem growth. The project is expected to strengthen Washim’s role as a regional logistics and agro trade corridor.",
  },
  {
    title: "Banjara Virasat Museum & Tourism Infrastructure",
    text:
      "The Banjara Virasat Museum at Poharadevi is emerging as an important cultural and tourism infrastructure ecosystem in Washim district. The project is expected to boost tourism infrastructure, regional connectivity, hospitality ecosystem, civic infrastructure and transportation demand.",
  },
  {
    title: "Rural Infrastructure & Agro Logistics Growth",
    text:
      "The Maharashtra Government continues investing in rural road infrastructure, warehousing ecosystem, logistics modernization, agro transportation corridors and utility infrastructure to strengthen the district’s agriculture-driven economy.",
  },
];

const authorities = [
  "Washim Municipal Council",
  "MIDC",
  "Maharashtra PWD",
  "Agriculture Departments",
  "Irrigation Authorities",
  "Rural Development Departments",
  "Highway Authorities",
  "Infrastructure Agencies",
  "Public Utility Departments",
];

const tenderCategories = [
  "Civil Construction",
  "Agro Processing Infrastructure",
  "Irrigation Infrastructure",
  "Smart Infrastructure",
  "HVAC Works",
  "Electrical Engineering",
  "Fire Fighting Systems",
  "Transportation Infrastructure",
  "Water Supply Projects",
  "Security & Surveillance",
  "Utility Modernization",
  "Warehousing Infrastructure",
];

const whyCards = [
  {
    title: "Massive Agro & Rural Infrastructure Investments",
    intro: "Continuous investments in:",
    items: [
      "Irrigation infrastructure",
      "Agro-processing ecosystem",
      "Logistics infrastructure",
      "Warehousing infrastructure",
      "Transportation corridors",
      "Smart rural infrastructure",
    ],
    footer:
      "Are generating significant procurement opportunities.",
  },
  {
    title: "Strong Agriculture & Agro Processing Ecosystem",
    intro: "Washim hosts:",
    items: [
      "Soybean ecosystem",
      "Cotton processing industries",
      "Agro warehousing infrastructure",
      "Food processing ecosystem",
      "Agricultural transportation infrastructure",
    ],
    footer:
      "Creating continuous industrial procurement demand.",
  },
  {
    title: "Strategic Regional Connectivity",
    intro: "Washim’s connectivity with:",
    items: [
      "Akola",
      "Hingoli",
      "Yavatmal",
      "Nanded",
      "Vidarbha logistics network",
    ],
    footer:
      "Makes it an important transportation and agro-industrial growth region.",
  },
];

const areas = [
  "Washim City",
  "Risod",
  "Malegaon",
  "Mangrulpir",
  "Karanja Lad",
  "Manora",
  "Shirpur",
  "Agro Processing Corridor",
  "Logistics Infrastructure Region",
  "Rural Development Zones",
];

const industrialAreas = [
  "Washim Industrial Area",
  "Agro Processing Clusters",
  "Soybean Processing Ecosystems",
  "Cotton Processing Corridors",
  "Food Processing Infrastructure Zones",
  "Warehousing & Logistics Corridors",
  "Rural Industrial Infrastructure Zones",
  "Agricultural Trade Corridors",
  "Industrial Utility Infrastructure",
  "Vidarbha Agro Industrial Belt",
];

const industrialSectors = [
  "Agro Processing",
  "Food Processing",
  "Irrigation Infrastructure",
  "Industrial Manufacturing",
  "Logistics & Warehousing",
  "Renewable Energy",
  "Commercial Infrastructure",
  "Utility Infrastructure",
  "Agricultural Trade",
  "Rural Industrialization",
];

const industrialOpportunities = [
  "Industrial Construction",
  "HVAC Systems",
  "Electrical Infrastructure",
  "Fire Fighting Systems",
  "Agro Infrastructure",
  "Irrigation Projects",
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
  "Agro-processing modernization",
  "Logistics infrastructure expansion",
  "Warehousing ecosystem growth",
  "Irrigation infrastructure modernization",
  "Smart rural infrastructure upgrades",
  "Transportation corridor expansion",
  "Industrial utility modernization",
  "Food processing ecosystem growth",
];

const futureBeneficiaries = [
  "Contractors",
  "OEMs",
  "MSMEs",
  "Infrastructure Companies",
  "EPC Firms",
  "Consultants",
  "Technology Providers",
  "Agro Processing Industries",
];

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-center text-3xl font-bold leading-tight text-[#D4A017] sm:text-4xl lg:text-5xl"
      style={{ fontFamily: serif }}
    >
      {children}
    </h2>
  );
}

function DarkCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      className="
        flex h-full flex-col
        rounded-[20px]
        border-[3px] border-[#D4A017]
        bg-[#071B3B]
        p-6
        text-white
        shadow-[0_10px_25px_rgba(0,0,0,0.14)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-[0_20px_35px_rgba(0,0,0,0.25)]
        sm:p-7
      "
    >
      <h3
        className="mb-5 text-xl font-bold leading-tight text-[#D4A017] sm:text-2xl"
        style={{ fontFamily: serif }}
      >
        {title}
      </h3>

      <div className="text-[15px] leading-7 sm:text-base">
        {children}
      </div>
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
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-8 lg:min-h-[650px] lg:grid-cols-2 lg:px-12">
        <div>
          <h1
            className="text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: serif }}
          >
            Tender Consultant in
            <br />
            <span className="text-[#D4A017]">Washim</span>
          </h1>

          <div className="my-6 h-[3px] w-full max-w-[580px] bg-[#D4A017]" />

          <p
            className="mb-5 max-w-[620px] text-base font-bold leading-7"
            style={{ fontFamily: serif }}
          >
            Maharashtra’s Emerging Agro-Industrial, Logistics & Rural
            Infrastructure Growth Hub
          </p>

          <p className="max-w-[630px] text-[15px] leading-7 sm:text-base">
            Washim is one of Maharashtra’s rapidly developing agro-industrial,
            logistics, and rural infrastructure growth ecosystems located in
            the Vidarbha region. Historically known as “Vatsagulma,” Washim
            was once the capital of the Vakataka dynasty and today serves as
            an important agriculture, transportation, and regional trade
            center connecting Vidarbha, Marathwada, and North Maharashtra.
          </p>

          <p className="mt-5 max-w-[630px] text-[15px] leading-7 sm:text-base">
            <span className="font-semibold text-[#D4A017]">
              Washim is widely recognized for:
            </span>
            <br />
            Cotton & soybean cultivation, Agro-processing industries, Pulses &
            oilseed economy, Rural trade ecosystem, Logistics connectivity,
            Agriculture infrastructure, Transportation corridors, Aviation
            Infrastructure, Urban Infrastructure Expansion.
          </p>

          <p className="mt-5 max-w-[630px] text-[15px] leading-7 sm:text-base">
            <span className="font-semibold text-[#D4A017]">
              Historically known for:
            </span>
            <br />
            Agriculture economy, Cotton production, Soybean cultivation,
            Rural industrial ecosystem, Irrigation infrastructure, Grain
            trading markets.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/Washimhero.png"
            alt="Washim"
            className="
              h-[300px]
              w-full
              max-w-[640px]
              rounded-[20px]
              border-[3px]
              border-[#D4A017]
              object-cover
              shadow-[0_0_30px_rgba(0,0,0,0.75)]
              sm:h-[390px]
              lg:h-[463px]
            "
          />
        </div>
      </div>
    </section>
  );
}

function IntroCards() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1250px] px-5">
        <div className="grid items-stretch gap-7 lg:grid-cols-3">
          <DarkCard title="Today, Washim is rapidly emerging as:">
            <ul className="space-y-2.5">
              <li>• An agro-processing corridor</li>
              <li>• Warehousing & logistics hub</li>
              <li>• Smart rural infrastructure zone</li>
              <li>• Food processing ecosystem</li>
              <li>• Industrial support region</li>
              <li>• Transportation growth corridor</li>
            </ul>
          </DarkCard>

          <DarkCard title="Continuous Infrastructure Investments">
            <ul className="space-y-2.5">
              <li>• Agro Processing Infrastructure</li>
              <li>• Smart Urban Infrastructure</li>
              <li>• Irrigation Projects</li>
              <li>• Rural Road Connectivity</li>
              <li>• Warehousing & Logistics</li>
              <li>• Industrial Infrastructure</li>
              <li>• Renewable Energy</li>
              <li>• Water Infrastructure</li>
              <li>• Transportation Corridors</li>
              <li>• Utility Modernization</li>
            </ul>
          </DarkCard>

          <DarkCard title="Agriculture & Rural Economy">
            <p className="mb-4 text-[#D4A017]">
              Washim’s economy is strongly supported by:
            </p>

            <ul className="space-y-2.5">
              <li>• Soybean cultivation</li>
              <li>• Cotton production</li>
              <li>• Pulses & grains economy</li>
              <li>• Agro-processing industries</li>
              <li>• Logistics infrastructure</li>
              <li>• Agricultural trade ecosystem</li>
            </ul>
          </DarkCard>
        </div>

        <div className="mt-7 grid items-stretch gap-7 lg:grid-cols-2">
          <DarkCard title="Agriculture Remains the Backbone of Washim’s Economy">
            <p className="mb-4 text-[#D4A017]">
              Major crops include:
            </p>

            <ul className="space-y-2.5">
              <li>• Soybean</li>
              <li>• Cotton</li>
              <li>• Tur</li>
              <li>• Wheat</li>
              <li>• Jowar</li>
              <li>• Gram</li>
            </ul>
          </DarkCard>

          <DarkCard title="Government & Industrial Tender Ecosystem">
            <p className="mb-4 text-[#D4A017]">
              The district continuously generates government and industrial
              tender opportunities through:
            </p>

            <ul className="space-y-2.5">
              {authorities.slice(0, 6).map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <p className="mt-5 border-t border-white/20 pt-5">
              Tender Elite provides complete government tender consultancy, GeM
              registration, BOQ preparation, bid management, and tender
              submission services across Washim.
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
        <SectionTitle>Washim Infrastructure & Connectivity Overview</SectionTitle>

        <h3
          className="mt-5 text-center text-3xl font-bold text-[#D4A017]"
          style={{ fontFamily: serif }}
        >
          Washim City Snapshot
        </h3>

        <div className="mt-8 overflow-hidden rounded-[20px] border-[3px] border-white bg-white shadow-xl">
          {/* HEADER ROW - WHITE */}
          <div className="grid grid-cols-1 bg-white text-[#071B3B] sm:grid-cols-[42%_58%]">
            <div className="border-b border-slate-300 px-5 py-4 text-center font-bold sm:border-b-0 sm:border-r">
              Category
            </div>

            <div className="px-5 py-4 text-center font-bold">
              Details
            </div>
          </div>

          {/* BODY ROWS - WHITE + COLUMN LINES */}
          {snapshotRows.map(([category, detail]) => (
            <div
              key={category}
              className="
                grid
                grid-cols-1
                border-t
                border-slate-300
                bg-white
                sm:grid-cols-[42%_58%]
              "
            >
              <div
                className="
                  border-b
                  border-slate-300
                  px-5
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  text-[#071B3B]
                  sm:border-b-0
                  sm:border-r
                "
              >
                {category}
              </div>

              <div className="px-5 py-3 text-center text-sm text-[#071B3B]">
                {detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EconomicOverview() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle>
          Washim Economic Growth & Development Overview
        </SectionTitle>

        <p className="mx-auto mt-5 max-w-[1120px] text-center text-lg font-bold leading-7 text-[#071B3B]">
          Washim continues witnessing rapid agro-industrial modernization,
          transportation infrastructure growth, warehousing expansion, and
          smart infrastructure development.
        </p>

        <div className="mx-auto mt-9 grid max-w-[1150px] items-stretch gap-7 lg:grid-cols-4">
          <DarkCard title="Agro-Industrial Growth">
            <p className="mb-4 text-[#D4A017]">
              Washim has emerged as one of Maharashtra’s growing
              agro-industrial and logistics ecosystems with continuous
              investments across:
            </p>

            <ul className="space-y-2.5">
              {[
                "Agro Processing",
                "Irrigation Infrastructure",
                "Industrial Infrastructure",
                "Smart Infrastructure",
                "Warehousing & Logistics",
                "Commercial Development",
                "Transportation Infrastructure",
                "Utility Modernization",
                "Rural Infrastructure",
                "Food Processing Ecosystem",
              ].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>

          <DarkCard title="Economic Contribution">
            <p className="mb-4 text-[#D4A017]">
              Washim contributes significantly to:
            </p>

            <ul className="space-y-2.5">
              <li>• Maharashtra soybean production</li>
              <li>• Cotton processing economy</li>
              <li>• Agro-processing industries</li>
              <li>• Vidarbha logistics ecosystem</li>
              <li>• Rural industrial infrastructure</li>
            </ul>
          </DarkCard>

          <DarkCard title="Agriculture & Trade Ecosystem">
            <p className="mb-4 text-[#D4A017]">
              The district is widely recognized for:
            </p>

            <ul className="space-y-2.5">
              <li>• Soybean cultivation ecosystem</li>
              <li>• Cotton production</li>
              <li>• Pulses & grain markets</li>
              <li>• Agro warehousing</li>
              <li>• Rural trade infrastructure</li>
              <li>• Agricultural transportation ecosystem</li>
            </ul>
          </DarkCard>

          <DarkCard title="Emerging Growth Sectors">
            <p className="mb-4 text-[#D4A017]">
              The district is also witnessing increasing growth in:
            </p>

            <ul className="space-y-2.5">
              <li>• Food processing industries</li>
              <li>• Agro warehousing</li>
              <li>• Logistics support ecosystem</li>
              <li>• Transportation infrastructure</li>
              <li>• Rural industrialization</li>
            </ul>
          </DarkCard>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1340px] px-5">
        <SectionTitle>
          Washim Economic & Development Growth Timeline
        </SectionTitle>

        <h3
          className="mt-5 text-center text-2xl font-bold text-[#071B3B]"
          style={{ fontFamily: serif }}
        >
          Economic Growth, Infrastructure Expansion & Public Investment
        </h3>

        <div className="mt-8 overflow-x-auto pb-2">
          <div className="min-w-[1030px] overflow-hidden rounded-[20px] bg-[#071B3B]">
            {/* HEADER */}
            <div className="grid grid-cols-[180px_minmax(0,1fr)_320px] border-b border-white/30 font-semibold text-white">
              <div className="border-r border-white/30 p-5">
                Financial Year
              </div>

              <div className="border-r border-white/30 p-5">
                Major Growth & Infrastructure Highlights
              </div>

              <div className="p-5">
                Estimated Public Infrastructure & Development Spending
              </div>
            </div>

            {/* ROWS */}
            {timeline.map((row) => (
              <div
                key={row[0]}
                className="
                  grid
                  grid-cols-[180px_minmax(0,1fr)_320px]
                  border-b
                  border-white/30
                  text-white
                  last:border-b-0
                "
              >
                <div className="border-r border-white/30 p-5">
                  {row[0]}
                </div>

                <div className="border-r border-white/30 p-5 leading-7">
                  {row[1]}
                </div>

                <div className="p-5 font-bold leading-7 text-[#D4A017]">
                  {row[2]}
                </div>
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
        <SectionTitle>
          Major Mega Projects Driving Washim’s Growth
        </SectionTitle>

        <div className="mt-9 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {megaProjects.map((project) => (
            <DarkCard key={project.title} title={project.title}>
              <p>{project.text}</p>
            </DarkCard>
          ))}
        </div>

        <div className="mt-7">
          <DarkCard title="Irrigation & Water Infrastructure Projects">
            <p className="mb-4 text-[#D4A017]">
              Washim’s agricultural ecosystem is supported through irrigation
              infrastructure.
            </p>

            <p className="mb-4">
              Major reservoirs and irrigation projects continue supporting:
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              <div>• Reservoirs & dams</div>
              <div>• Water supply systems</div>
              <div>• Agricultural water management projects</div>
              <div>• Irrigation ecosystem growth</div>
              <div>• Rural infrastructure development</div>
            </div>
          </DarkCard>
        </div>
      </div>
    </section>
  );
}

function GovernmentDevelopment() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1150px] px-5">
        <SectionTitle>
          Government Development Spending & Tender Ecosystem
        </SectionTitle>

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

function WhyWashim() {
  return (
    <section className="bg-[#071B3B] py-12">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionTitle>
          Why Washim Is One of Vidarbha’s Emerging Tender Markets
        </SectionTitle>

        <div className="mx-auto mt-9 grid max-w-[1150px] items-stretch gap-7 lg:grid-cols-3">
          {whyCards.map((card) => (
            <div
              key={card.title}
              className="
                flex
                min-h-[420px]
                flex-col
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
                bg-white
                p-7
                text-[#071B3B]
                shadow-[0_10px_25px_rgba(0,0,0,0.18)]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_20px_35px_rgba(0,0,0,0.28)]
              "
            >
              <h3
                className="text-2xl font-bold leading-tight text-[#D4A017]"
                style={{ fontFamily: serif }}
              >
                {card.title}
              </h3>

              <p className="mt-5 font-bold">
                {card.intro}
              </p>

              <ul className="mt-4 space-y-2.5 text-[15px] leading-7">
                {card.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              <p className="mt-auto border-t border-slate-200 pt-5 text-[15px] leading-7">
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
        <SectionTitle>
          Industrial Areas & MIDCs We Serve Near Washim
        </SectionTitle>

        <p className="mx-auto mt-5 max-w-[1065px] text-center text-base font-bold leading-7 text-[#071B3B]">
          Tender Elite provides consultancy services across major industrial
          ecosystems and logistics corridors near Washim.
        </p>

        <h3
          className="mt-9 text-center text-3xl font-semibold text-[#D4A017]"
          style={{ fontFamily: serif }}
        >
          Major Industrial Areas & Industrial Ecosystems
        </h3>

        <div className="mx-auto mt-8 flex max-w-[1200px] flex-wrap justify-center gap-5">
          {industrialAreas.map((area) => (
            <div
              key={area}
              className="
                flex
                min-h-[110px]
                w-full
                max-w-[280px]
                items-center
                justify-center
                rounded-[20px]
                border-[3px]
                border-[#D4A017]
                bg-[#071B3B]
                px-5
                py-5
                text-center
                text-[17px]
                font-semibold
                leading-6
                text-white
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_18px_35px_rgba(7,27,59,0.25)]
              "
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustrialSectorsSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1150px] px-5">
        <div className="grid items-stretch gap-7 lg:grid-cols-2">
          <DarkCard title="Key Industrial Sectors">
            <p className="mb-4 text-[#D4A017]">
              These ecosystems support:
            </p>

            <ul className="space-y-3">
              {industrialSectors.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DarkCard>

          <DarkCard title="Tender Opportunities Across Industrial Zones">
            <p className="mb-4 text-[#D4A017]">
              Major tender opportunities include:
            </p>

            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
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
        <SectionTitle>
          Future Outlook of Washim Infrastructure & Tender Market
        </SectionTitle>

        <div className="mx-auto mt-9 max-w-[1280px] rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] p-6 sm:p-8 lg:p-10">
          <h3
            className="text-2xl font-bold text-[#D4A017] sm:text-3xl"
            style={{ fontFamily: serif }}
          >
            Washim is expected to witness massive future growth through:
          </h3>

          <div className="mt-6 grid gap-x-14 gap-y-3 md:grid-cols-2">
            {futureGrowth.map((item) => (
              <div
                key={item}
                className="text-base leading-7 text-white sm:text-lg"
              >
                • {item}
              </div>
            ))}
          </div>

          <h3
            className="mt-9 text-2xl font-bold text-[#D4A017] sm:text-3xl"
            style={{ fontFamily: serif }}
          >
            This will continue generating high-value government tender
            opportunities across multiple sectors for:
          </h3>

          <div className="mt-6 grid gap-x-14 gap-y-3 md:grid-cols-2">
            {futureBeneficiaries.map((item) => (
              <div
                key={item}
                className="text-base leading-7 text-white sm:text-lg"
              >
                • {item}
              </div>
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
          <h2
            className="text-3xl font-bold leading-tight text-[#D4A017] sm:text-4xl"
            style={{ fontFamily: serif }}
          >
            Looking for Tender Consultant Services in Washim?
          </h2>

          <Link
            href="/contact"
            className="
              mt-8
              inline-flex
              rounded-[20px]
              border
              border-[#D4A017]
              bg-[#B71432]
              px-12 py-4
              font-bold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-2
              hover:bg-[#8F0F29]
              hover:shadow-[0_15px_28px_rgba(183,20,50,0.35)]
            "
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
export default function WashimPage() {
  return (
    <main
      className="min-h-screen w-full overflow-x-hidden bg-white"
      style={{ fontFamily: sans }}
    >
      <Header />

      <Hero />

      <IntroCards />

      <SnapshotSection />

      <EconomicOverview />

      <Timeline />

      <MegaProjects />

      <GovernmentDevelopment />

      <ServicesSection />

      <WhyWashim />

      <AreasSection />

      <IndustrialAreasSection />

      <IndustrialSectorsSection />

      <IndustriesSection />

      <LocationsSection />

      <FutureOutlook />

      <CTA />

      <Footer />
    </main>
  );
}