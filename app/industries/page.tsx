import Link from "next/link";

type Industry = {
  title: string;
  description: string;
  image: string;
};

const industryImages = [
  "/images/Healthcare & Medical Industry.png",
  "/images/Construction & Infrastructure Industry.png",
  "/images/Information Technology (IT) Industry.png",
  "/images/Electrical & Electronics Industry.png",
  "/images/Mechanical & Engineering Industry.png",
  "/images/Railway Industry.png",
  "/images/Defence & Security Industry.png",
  "/images/Pharmaceutical Industry.png",
  "/images/Agriculture & Agro Industry.png",
  "/images/FMCG & Consumer Goods Industry (1).png",
  "/images/Food & Catering Industry.png",
  "/images/Facility Management Industry.png",
  "/images/Manpower & Staffing Industry.png",
  "/images/Textile & Garment Industry.png",
  "/images/Automobile & Transportation Industry.png",
  "/images/Oil & Gas Industry.png",
  "/images/Renewable Energy Industry.png",
  "/images/Telecom Industry.png",
  "/images/Education & Institutional Industry.png",
  "/images/Printing & Stationery Industry.png",
  "/images/Water Supply & Sanitation Industry.png",
  "/images/Security & Surveillance Industry.png",
  "/images/Mining & Metals Industry.png",
  "/images/Chemicals & Industrial Products Industry.png",
  "/images/Hospitality & Tourism Industry.png",
  "/images/Logistics & Supply Chain Industry.png",
  "/images/Packaging Industry.png",
  "/images/Government & Public Sector Projects.png",
];

const industries: Industry[] = [
  {
    title: "Healthcare & Medical Industry",
    description:
      "Tender Elite provides specialized tendering and procurement support for hospitals, healthcare institutions, diagnostic centers, pharmaceutical companies, medical equipment suppliers, laboratory solution providers, and healthcare service organizations across India. We assist clients in managing complex procurement requirements related to medical devices, surgical instruments, diagnostic equipment, hospital furniture, consumables, healthcare IT systems, and facility management services. Our team ensures accurate documentation, regulatory compliance, technical bid preparation, and smooth participation in healthcare procurement tenders issued by government hospitals, medical colleges, ESIC hospitals, defence healthcare organizations, and private healthcare institutions.",
    image: industryImages[0],
  },
  {
    title: "Construction & Infrastructure Industry",
    description:
      "We provide comprehensive tender management services for construction companies, infrastructure developers, civil contractors, EPC contractors, project management firms, and engineering consultants involved in public and private infrastructure projects. Our expertise includes support for roads, bridges, buildings, smart city projects, irrigation systems, urban development, railway infrastructure, airport development, and industrial construction tenders. We help businesses manage technical documentation, BOQ preparation, compliance verification, project eligibility requirements, and online tender submissions efficiently and professionally.",
    image: industryImages[1],
  },
  {
    title: "Information Technology (IT) Industry",
    description:
      "Tender Elite supports software companies, IT infrastructure providers, cybersecurity firms, networking companies, cloud solution providers, system integrators, and digital service providers participating in government and corporate procurement opportunities. We assist in preparing technical proposals, compliance documents, product specifications, service-level agreements, and commercial bids for software development, hardware supply, networking solutions, cybersecurity implementation, data management, cloud computing, ERP systems, and digital transformation projects.",
    image: industryImages[2],
  },
  {
    title: "Electrical & Electronics Industry",
    description:
      "Our services support electrical contractors, electronics manufacturers, power equipment suppliers, industrial automation companies, and energy solution providers participating in procurement opportunities across various sectors. We assist with tenders related to transformers, switchgear systems, electrical panels, cables, lighting systems, renewable energy equipment, industrial automation systems, surveillance equipment, and electronic devices. Our team ensures accurate technical documentation, compliance management, and professional bid preparation.",
    image: industryImages[3],
  },
  {
    title: "Mechanical & Engineering Industry",
    description:
      "Tender Elite provides procurement and tendering support for mechanical engineering companies, fabrication firms, industrial equipment manufacturers, machinery suppliers, maintenance contractors, and technical service providers. We help businesses participate in tenders related to heavy machinery, fabrication works, HVAC systems, industrial maintenance, manufacturing equipment, plant installations, and engineering consultancy services. Our expertise ensures professionally managed technical and financial bid submissions.",
    image: industryImages[4],
  },
  {
    title: "Railway Industry",
    description:
      "We assist manufacturers, contractors, suppliers, and service providers participating in railway procurement and infrastructure development projects. Our team supports tender participation for railway equipment, signaling systems, track maintenance, electrical systems, station development, rolling stock supply, safety systems, and engineering services. We help clients manage railway portal registrations, vendor approvals, compliance documentation, and tender submissions according to railway procurement standards.",
    image: industryImages[5],
  },
  {
    title: "Defence & Security Industry",
    description:
      "Tender Elite supports businesses involved in defence procurement, security infrastructure, surveillance systems, tactical equipment, communication systems, and government security projects. We assist clients in preparing documentation, technical specifications, OEM authorizations, security compliance records, and procurement submissions required for defence and security tenders issued by defence departments, paramilitary organizations, and government security agencies.",
    image: industryImages[6],
  },
  {
    title: "Pharmaceutical Industry",
    description:
      "Our team provides tendering support for pharmaceutical manufacturers, medicine distributors, healthcare product suppliers, vaccine providers, and laboratory consumable suppliers participating in healthcare procurement opportunities. We assist in preparing compliance documentation, product certifications, quality standards, regulatory approvals, and technical bid documents required for government pharmaceutical procurement and institutional healthcare supply contracts.",
    image: industryImages[7],
  },
  {
    title: "Agriculture & Agro Industry",
    description:
      "We support agricultural companies, agro-product suppliers, irrigation solution providers, seed manufacturers, fertilizer companies, farming equipment suppliers, and food processing businesses in government and institutional procurement projects. Our services include tender documentation, technical compliance support, product specification management, and procurement participation for agriculture development and rural infrastructure projects.",
    image: industryImages[8],
  },
  {
    title: "FMCG & Consumer Goods Industry",
    description:
      "Tender Elite assists FMCG manufacturers, distributors, wholesalers, and consumer goods suppliers in participating in procurement tenders related to packaged products, household items, personal care products, cleaning materials, grocery supplies, and institutional procurement requirements. We help businesses manage product documentation, catalogue preparation, pricing compliance, and online tender submissions professionally.",
    image: industryImages[9],
  },
  {
    title: "Telecom Industry",
    description:
      "Tender Elite assists telecom operators, networking solution providers, communication equipment manufacturers, internet service providers, and telecom infrastructure companies participating in procurement opportunities related to connectivity, communication systems, broadband infrastructure, networking equipment, and digital communication projects.",
    image: industryImages[10],
  },
  {
    title: "Food & Catering Industry",
    description:
      "Tender Elite provides tender support for catering companies, food suppliers, hospitality service providers, bakery suppliers, packaged food distributors, and institutional kitchen management companies. We assist businesses participating in tenders for hospitals, railways, educational institutions, government departments, defence organizations, and corporate facilities requiring catering and food supply services.",
    image: industryImages[11],
  },
  {
    title: "Facility Management Industry",
    description:
      "We assist facility management companies, housekeeping service providers, maintenance contractors, pest control agencies, sanitation solution providers, and support service companies participating in facility management tenders. Our services cover documentation support, compliance management, manpower-related submissions, technical proposals, and service contract tender participation for government and private sector clients.",
    image: industryImages[12],
  },
  {
    title: "Manpower & Staffing Industry",
    description:
      "Tender Elite supports manpower agencies, outsourcing firms, HR service providers, and staffing companies participating in workforce supply and service-based procurement opportunities. We assist in preparing employee compliance documentation, statutory registrations, financial eligibility records, manpower deployment plans, and tender submissions for government and corporate staffing contracts.",
    image: industryImages[13],
  },
  {
    title: "Textile & Garment Industry",
    description:
      "We provide procurement support for textile manufacturers, garment suppliers, uniform manufacturers, fabric distributors, and industrial clothing providers participating in institutional and government procurement opportunities. Our services include tender documentation, product specification compliance, sampling support, catalogue preparation, and bid management for textile-related procurement projects.",
    image: industryImages[14],
  },
  {
    title: "Automobile & Transportation Industry",
    description:
      "Tender Elite assists vehicle manufacturers, transportation contractors, automotive equipment suppliers, logistics providers, and mobility solution companies participating in procurement tenders related to transportation services, vehicle supply, fleet management, and automotive infrastructure projects. We help businesses manage technical documentation, compliance requirements, and procurement submissions professionally.",
    image: industryImages[15],
  },
  {
    title: "Oil & Gas Industry",
    description:
      "Our team provides tender management support for companies involved in petroleum products, industrial fuels, gas supply systems, refinery services, pipeline infrastructure, and energy-related operations. We assist in preparing technical documentation, safety compliance records, certifications, and procurement submissions for oil and gas industry projects.",
    image: industryImages[16],
  },
  {
    title: "Renewable Energy Industry",
    description:
      "We support solar energy companies, wind energy solution providers, renewable infrastructure developers, EPC contractors, and sustainable energy businesses participating in green energy and environmental projects. Our expertise includes support for solar panel supply, renewable power systems, energy efficiency projects, and government sustainability initiatives.",
    image: industryImages[17],
  },
  {
    title: "Education & Institutional Industry",
    description:
      "We provide procurement and tendering support for educational institutions, training centers, universities, e-learning companies, laboratory suppliers, furniture manufacturers, and educational equipment providers. Our team helps businesses participate in tenders related to institutional infrastructure, digital classrooms, educational software, laboratory setup, and academic support services.",
    image: industryImages[18],
  },
  {
    title: "Printing & Stationery Industry",
    description:
      "Our services support printing companies, publication houses, stationery suppliers, branding solution providers, packaging printers, and office supply businesses participating in procurement opportunities for government departments, educational institutions, corporate offices, and public sector organizations.",
    image: industryImages[19],
  },
  {
    title: "Water Supply & Sanitation Industry",
    description:
      "We support companies involved in water treatment systems, sanitation projects, plumbing infrastructure, sewage management, waste management, and public utility services. Our team assists in procurement participation for municipal corporations, public health engineering departments, rural development projects, and environmental infrastructure initiatives.",
    image: industryImages[20],
  },
  {
    title: "Security & Surveillance Industry",
    description:
      "Tender Elite assists security agencies, CCTV suppliers, fire safety companies, surveillance system providers, access control solution providers, and electronic security businesses participating in government and private sector security tenders. We help manage technical documentation, compliance requirements, certifications, and professional bid submissions.",
    image: industryImages[21],
  },
  {
    title: "Mining & Metals Industry",
    description:
      "Tender Elite provides support for mining companies, metal manufacturers, industrial material suppliers, heavy engineering firms, and extraction service providers participating in industrial procurement opportunities. We assist in technical bid preparation, compliance management, vendor registration, and procurement documentation for mining and metals sector projects.",
    image: industryImages[22],
  },
  {
    title: "Chemicals & Industrial Products Industry",
    description:
      "We assist chemical manufacturers, industrial product suppliers, laboratory equipment providers, industrial process companies, and specialty chemical businesses participating in procurement tenders. Our services include compliance support, technical documentation, product certifications, and procurement management for industrial and institutional supply projects.",
    image: industryImages[23],
  },
  {
    title: "Hospitality & Tourism Industry",
    description:
      "Tender Elite supports hotels, resorts, event management companies, tourism operators, catering providers, and hospitality infrastructure companies participating in procurement opportunities related to tourism development, hospitality services, facility supply, and event management projects.",
    image: industryImages[24],
  },
  {
    title: "Logistics & Supply Chain Industry",
    description:
      "We provide tender management support for logistics companies, transport operators, warehousing providers, courier services, freight management firms, and supply chain solution companies participating in transportation and distribution-related procurement projects across India.",
    image: industryImages[25],
  },
  {
    title: "Packaging Industry",
    description:
      "Our services assist packaging manufacturers, labeling companies, industrial packaging suppliers, corrugated box manufacturers, flexible packaging companies, and branding solution providers participating in procurement opportunities across manufacturing, FMCG, healthcare, and industrial sectors.",
    image: industryImages[26],
  },
  {
    title: "Government & Public Sector Projects",
    description:
      "Tender Elite provides complete procurement consultancy and tender management support for businesses participating in central government, state government, PSU, municipal corporation, railway, defence, healthcare, education, and institutional procurement projects across India. Our team ensures professional handling of tender documentation, portal management, compliance verification, technical bid preparation, financial bid submission, and end-to-end procurement coordination for diverse public sector opportunities.",
    image: industryImages[27],
  },
];

function ArrowButton() {
  return (
    <span className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFA629] text-[17px] font-bold text-[#071B3B] shadow-[0_0_24px_rgba(255,166,41,0.9)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_32px_rgba(255,166,41,1)]">
      →
    </span>
  );
}

function IndustryCard({
  industry,
}: {
  industry: Industry;
}) {
  return (
    <Link
      href="/industries"
      className="
        group relative flex min-h-[256px] w-full flex-col
        justify-center overflow-hidden rounded-[20px]
        bg-[#071B3B]
        px-6 py-7 pr-16
        shadow-[0_8px_24px_rgba(0,0,0,0.10)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_16px_36px_rgba(7,27,59,0.26)]
      "
    >
      <h2 className="font-serif text-xl font-semibold leading-7 tracking-wide text-[#D4A017] transition-colors duration-300 group-hover:text-[#F1C84B] sm:text-[21px]">
        {industry.title}
      </h2>

      <p className="mt-5 text-sm leading-5 tracking-wide text-white">
        {industry.description}
      </p>

      <ArrowButton />
    </Link>
  );
}

function IndustryImage({
  industry,
}: {
  industry: Industry;
}) {
  return (
    <div className="group relative w-full overflow-hidden rounded-[20px] shadow-[0_0_30px_rgba(0,0,0,0.28)] lg:h-[256px] lg:w-[380px] lg:shrink-0">
      <img
        src={industry.image}
        alt={industry.title}
        className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] lg:h-full"
      />
    </div>
  );
}

function IndustryRow({
  industry,
  reverse,
}: {
  industry: Industry;
  reverse: boolean;
}) {
  return (
    <div
      className={`
        flex w-full flex-col gap-6
        lg:flex-row lg:items-stretch lg:gap-[60px]
        ${reverse ? "lg:flex-row-reverse" : ""}
      `}
    >
      <IndustryImage industry={industry} />

      <div className="min-w-0 flex-1">
        <IndustryCard industry={industry} />
      </div>
    </div>
  );
}

export default function IndustriesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#071B3B]">

      {/* =========================================================
          HEADER
      ========================================================== */}
      <header className="relative z-50 border-b-4 border-[#D4A017] bg-white shadow-sm">
        <div className="mx-auto flex min-h-[78px] max-w-[1440px] items-center px-4 sm:min-h-[86px] sm:px-5 md:min-h-[90px] md:px-7 xl:px-10">

          <Link
            href="/"
            className="flex min-w-0 shrink-0 items-center gap-1.5 transition-transform duration-300 hover:scale-[1.01] sm:gap-2"
          >
            <img
              src="/images/logo-mark.png"
              alt="Tender Elite mark"
              className="h-[46px] w-auto object-contain sm:h-[56px] md:h-[62px] lg:h-[68px]"
            />

            <img
              src="/images/logo-wordmark.png"
              alt="Tender Elite"
              className="h-auto w-[105px] object-contain sm:w-[135px] md:w-[155px] lg:w-[195px]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="ml-auto hidden items-center gap-2 xl:flex">
            <Link
              href="/"
              className="rounded-[20px] border border-slate-200 bg-[#D4A017] px-6 py-3 text-sm font-bold text-black shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="rounded-[20px] border border-slate-200 bg-[#D4A017] px-6 py-3 text-sm font-bold text-black shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]"
            >
              Services
            </Link>

            <Link
              href="/industries"
              className="rounded-[20px] border border-slate-200 bg-[#D4A017] px-6 py-3 text-sm font-bold text-black shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]"
            >
              Industries
            </Link>

            <Link
              href="/insights"
              className="rounded-[20px] border border-slate-200 bg-[#D4A017] px-6 py-3 text-sm font-bold text-black shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]"
            >
              Insights
            </Link>

            <Link
              href="/about-us"
              className="rounded-[20px] border border-slate-200 bg-[#D4A017] px-6 py-3 text-sm font-bold text-black shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_10px_22px_rgba(0,0,0,0.16)]"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="ml-2 rounded-[20px] border border-[#FFA629] bg-[#B71432] px-7 py-3 text-sm font-bold text-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(183,20,50,0.22)]"
            >
              Contact Us
            </Link>
          </nav>

          {/* MOBILE + TABLET */}
          <details className="relative ml-auto xl:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-[#D4A017] bg-[#D4A017] text-[#071B3B] shadow-md sm:h-11 sm:w-11"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>

            <div className="absolute right-0 top-[48px] w-[225px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_15px_35px_rgba(0,0,0,0.18)] sm:top-[52px] sm:w-[235px]">

              <Link
                href="/"
                className="block rounded-xl px-4 py-3 text-base font-bold text-[#071B3B] transition-colors hover:bg-[#D4A017] hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/services"
                className="block rounded-xl px-4 py-3 text-base font-bold text-[#071B3B] transition-colors hover:bg-[#D4A017] hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/industries"
                className="block rounded-xl px-4 py-3 text-base font-bold text-[#071B3B] transition-colors hover:bg-[#D4A017] hover:text-white"
              >
                Industries
              </Link>

              <Link
                href="/insights"
                className="block rounded-xl px-4 py-3 text-base font-bold text-[#071B3B] transition-colors hover:bg-[#D4A017] hover:text-white"
              >
                Insights
              </Link>

              <Link
                href="/about-us"
                className="block rounded-xl px-4 py-3 text-base font-bold text-[#071B3B] transition-colors hover:bg-[#D4A017] hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="mt-2 block rounded-xl bg-[#B71432] px-4 py-3 text-center text-base font-bold text-white transition-all duration-200 hover:bg-[#971029]"
              >
                Contact Us
              </Link>
            </div>
          </details>
        </div>
      </header>

      {/* =========================================================
          PAGE TITLE
      ========================================================== */}
      <section className="bg-white px-5 pb-12 pt-14 sm:px-8 sm:pb-14 sm:pt-16 md:px-10 md:pt-20 xl:px-12">

        <div className="mx-auto max-w-[1440px] text-center">

          <h1 className="font-serif text-4xl font-bold tracking-[2px] text-[#071B3B] sm:text-5xl md:text-6xl">
            Industries We Serve
          </h1>

          <p className="mx-auto mt-5 max-w-[805px] text-sm leading-6 tracking-wider text-slate-500 sm:text-base sm:leading-7 md:text-lg">
            Empowering businesses across diverse sectors with expert tender
            consultancy, bid management, and strategic procurement support.
          </p>

        </div>

      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================== */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 md:px-10 xl:px-12 xl:pb-28">

        <div className="mx-auto max-w-[1360px]">

          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className={index === 0 ? "" : "mt-10 sm:mt-12 lg:mt-14"}
            >
              <IndustryRow
                industry={industry}
                reverse={index % 2 === 1}
              />
            </div>
          ))}

        </div>

      </section>

      {/* =========================================================
          LOCATIONS CTA
      ========================================================== */}
      <section className="bg-white px-5 pb-20 sm:px-8 md:px-10 xl:px-12">

        <div className="mx-auto flex max-w-[1360px] justify-center">

          <Link
            href="/locations"
            className="group relative flex w-full max-w-[544px] items-center justify-center rounded-[45px] bg-[#D4A017] px-8 py-7 shadow-[0_10px_30px_rgba(212,160,23,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(212,160,23,0.28)]"
          >
            <span className="font-serif text-2xl font-bold tracking-widest text-[#071B3B] transition-transform duration-300 group-hover:scale-[1.02] sm:text-3xl">
              Locations We Serve
            </span>
          </Link>

        </div>

      </section>

{/* =========================================================
    FOOTER
========================================================= */}
<footer className="bg-[#071B3B] px-5 py-12 text-white sm:px-8 sm:py-14 md:px-10 xl:px-24">

  <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 xl:grid-cols-4">

    {/* BRAND */}
    <div>
      <img
        src="/images/footer.png"
        alt="Tender Elite"
        className="mb-5 w-[210px] object-contain sm:mb-6 sm:w-[250px]"
      />

      <p className="max-w-xs text-sm leading-6 tracking-wider text-white/80">
        Empowering businesses through premium tender consultancy. We don&apos;t
        just process tenders – we build opportunities for business growth.
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

    {/* CONTACT INFO */}
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

  {/* COPYRIGHT */}
  <div className="mx-auto mt-10 flex max-w-[1240px] flex-col justify-between gap-4 border-t border-slate-200/50 pt-6 text-xs tracking-wider text-slate-200/60 sm:flex-row sm:items-center">

    <span>
      © 2025 Tender Elite Consultancy. All rights reserved.
    </span>

    <div className="flex flex-wrap gap-5 sm:gap-6">
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

    </main>
  );
}