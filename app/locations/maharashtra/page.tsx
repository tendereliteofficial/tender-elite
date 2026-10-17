import { withYoast } from "@/lib/yoast-seo";
import { slugToTitle as _s } from "@/lib/seo";

const baseMetadata = {
  title: `Tender Services in ${_s("maharashtra")}`,
  description: `Explore tender support across cities in ${_s("maharashtra")}. Tender Elite helps with tender search, GeM registration, bidding and documentation.`,
  alternates: { canonical: "/locations/maharashtra" },
};

import Link from "next/link";

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/about-us" },
];

/* =========================================================
   MAHARASHTRA CITIES
========================================================= */

const cities = [
  {
    name: "Mumbai",
    image: "/images/Mumbaihero.png",
    link: "/locations/maharashtra/mumbai"
  },
  {
    name: "Vasai Virar",
    image: "/images/Vasai Virarhero.png",
    link: "/locations/maharashtra/vasai-virar",
  },
  {
    name: "Mira Bhayander",
    image: "/images/Mira Bhayanderhero.png",
    link: "/locations/maharashtra/mira-bhayander",
  },
  {
    name: "Thane",
    image: "/images/Thanehero.png",
    link: "/locations/maharashtra/thane",
  },
  {
    name: "Pune",
    image: "/images/Punehero.png",
    link: "/locations/maharashtra/pune",
  },
  {
    name: "Gondia",
    image: "/images/Gondiahero.png",
    link: "/locations/maharashtra/gondia",
  },
  {
    name: "Malegaon",
    image: "/images/Malegaonhero.png",
    link: "/locations/maharashtra/malegaon",
  },
  {
    name: "Ichalkaranji",
    image: "/images/Ichalkaranjihero.png",
    link: "/locations/maharashtra/ichalkaranji",
  },
  {
    name: "Osmanabad",
    image: "/images/Osmanabad (Dharashiv)hero.png",
    link: "/locations/maharashtra/osmanabad",
  },
  {
    name: "Dhule",
    image: "/images/Dhulehero.png",
    link: "/locations/maharashtra/dhule",
  },
  {
    name: "Wardha",
    image: "/images/Wardhahero.png",
    link: "/locations/maharashtra/wardha",
  },
  {
    name: "Amravati",
    image: "/images/Amravatihero.png",
    link: "/locations/maharashtra/amravati",
  },
  {
    name: "Sangli",
    image: "/images/Sanglihero.png",
    link: "/locations/maharashtra/sangli",
  },
  {
    name: "Kolhapur",
    image: "/images/Kolhapurhero.png",
    link: "/locations/maharashtra/kolhapur",
  },
  {
    name: "Panvel",
    image: "/images/Panvelhero.png",
    link: "/locations/maharashtra/panvel",
  },
  {
    name: "Kalyan-Dombivli",
    image: "/images/Kalyan-Dombivlihero.png",
    link: "/locations/maharashtra/kalyan-dombivli",
  },
  {
    name: "Nashik",
    image: "/images/Nashikhero.png",
    link: "/locations/maharashtra/nashik",
  },
  {
    name: "Washim",
    image: "/images/Washimhero.png",
    link: "/locations/maharashtra/washim",
  },
  {
    name: "Hingoli",
    image: "/images/Hingolihero.png",
    link: "/locations/maharashtra/hingoli",
  },
  {
    name: "Baramati",
    image: "/images/Baramatihero.png",
    link: "/locations/maharashtra/baramati",
  },
  {
    name: "Palghar",
    image: "/images/Palgharhero.png",
    link: "/locations/maharashtra/palghar",
  },
  {
    name: "Satara",
    image: "/images/Satarahero.png",
    link: "/locations/maharashtra/satara",
  },
  {
    name: "Beed",
    image: "/images/Beedhero.png",
    link: "/locations/maharashtra/beed",
  },
  {
    name: "Chandrapur",
    image: "/images/Chandrapurhero.png",
    link: "/locations/maharashtra/chandrapur",
  },
  {
    name: "Akola",
    image: "/images/Akolahero.png",
    link: "/locations/maharashtra/akola",
  },
  {
    name: "Ahmednagar",
    image: "/images/Ahmednagarhero.png",
    link: "/locations/maharashtra/ahmednagar",
  },
  {
    name: "Chhatrapati Sambhajinagar",
    image:
      "/images/Chhatrapati Sambhajinagarhero.png",
    link: "/locations/maharashtra/chhatrapati-sambhajinagar",
  },
  {
    name: "Ulhasnagar",
    image: "/images/Ulhasnagarhero.png",
    link: "/locations/maharashtra/ulhasnagar",
  },
  {
    name: "Bhiwandi",
    image: "/images/Bhiwandihero.png",
    link: "/locations/maharashtra/bhiwandi",
  },
  {
    name: "Navi Mumbai",
    image: "/images/Navi Mumbaihero.png",
    link: "/locations/maharashtra/navi-mumbai",
  },
  {
    name: "Nagpur",
    image: "/images/Nagpurhero.png",
    link: "/locations/maharashtra/nagpur",
  },
  {
    name: "Buldhana",
    image: "/images/Buldhanaghero.png",
    link: "/locations/maharashtra/buldhana",
  },
  {
    name: "Karad",
    image: "/images/Karadhero.png",
    link: "/locations/maharashtra/karad",
  },
  {
    name: "Jaysingpur",
    image: "/images/Jaysingpurhero.png",
    link: "/locations/maharashtra/jaysingpur",
  },
  {
    name: "Ratnagiri",
    image: "/images/Ratnagirihero.png",
    link: "/locations/maharashtra/ratnagiri",
  },
  {
    name: "Parbhani",
    image: "/images/Parbhanihero.png",
    link: "/locations/maharashtra/parbhani",
  },
  {
    name: "Yavatmal",
    image: "/images/Yavatmalhero.png",
    link: "/locations/maharashtra/yavatmal",
  },
  {
    name: "Nanded",
    image: "/images/Nandedhero.png",
    link: "/locations/maharashtra/nanded",
  },
  {
    name: "Jalgaon",
    image: "/images/Jalgaonhero.png",
    link: "/locations/maharashtra/jalgaon",
  },
  {
    name: "Solapur",
    image: "/images/Solapurhero.png",
    link: "/locations/maharashtra/solapur",
  },
];

/* =========================================================
   FOOTER SERVICES
========================================================= */

const footerServices = [
  "Tender Submission Services",
  "GeM Catalogue Management",
  "Tender Portal Registration",
  "Bid Management",
  "Vendor Assessment",
  "Joint Venture Support",
];

/* =========================================================
   FONTS
========================================================= */

const serifFont = "Georgia, 'Times New Roman', serif";
const sansFont = "Arial, Helvetica, sans-serif";

/* =========================================================
   HEADER
========================================================= */

function Header() {
  return (
    <header
      className="
        relative
        z-[100]
        border-b-[5px]
        border-[#D4A017]
        bg-white
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[72px]
          w-full
          max-w-[1440px]
          items-center
          px-3
          sm:min-h-[82px]
          sm:px-5
          md:px-7
          lg:min-h-[90px]
          lg:px-10
        "
      >
        {/* LOGO */}

        <Link
          href="/"
          className="
            flex
            shrink-0
            items-center
            gap-1.5
            sm:gap-2
          "
        >
          <img
            src="/images/logo-mark.png"
            alt="Tender Elite"
            className="
              h-[44px]
              w-auto
              object-contain
              sm:h-[54px]
              md:h-[62px]
              lg:h-[68px]
            "
          />

          <img
            src="/images/logo-wordmark.png"
            alt="Tender Elite"
            className="
              w-[95px]
              object-contain
              sm:w-[130px]
              md:w-[155px]
              lg:w-[195px]
            "
          />
        </Link>

        {/* DESKTOP NAV */}

        <nav className="ml-auto hidden items-center gap-2 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                rounded-[20px]
                border
                border-slate-200
                bg-[#D4A017]
                px-6
                py-3
                text-sm
                font-bold
                text-black
                shadow-[0_10px_20px_rgba(0,0,0,0.15)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:text-white
              "
              style={{ fontFamily: sansFont }}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="
              ml-2
              rounded-[20px]
              border
              border-[#D4A017]
              bg-[#B71432]
              px-7
              py-3
              text-sm
              font-bold
              text-white
              shadow-[0_10px_20px_rgba(0,0,0,0.15)]
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#971029]
            "
            style={{ fontFamily: sansFont }}
          >
            Contact Us
          </Link>
        </nav>

        {/* MOBILE MENU */}

        <details className="relative ml-auto xl:hidden">
          <summary
            className="
              flex
              h-10
              w-10
              cursor-pointer
              list-none
              items-center
              justify-center
              rounded-xl
              border
              border-[#D4A017]
              bg-[#D4A017]
              text-[#071B3B]
              shadow-md
              sm:h-11
              sm:w-11
            "
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

          <div
            className="
              absolute
              right-0
              top-[50px]
              w-[230px]
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-3
              shadow-[0_15px_35px_rgba(0,0,0,0.18)]
            "
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  block
                  rounded-xl
                  px-4
                  py-3
                  text-base
                  font-semibold
                  text-[#071B3B]
                  transition-colors
                  hover:bg-[#D4A017]
                  hover:text-white
                "
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="
                mt-2
                block
                rounded-xl
                bg-[#B71432]
                px-4
                py-3
                text-center
                text-base
                font-semibold
                text-white
                transition-colors
                hover:bg-[#971029]
              "
            >
              Contact Us
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}

/* =========================================================
   CITY CARD
   EXACT SIZE: 270 × 195 PX
========================================================= */

function CityCard({
  name,
  image,
  link,
}: {
  name: string;
  image: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="
        group
        relative
        block
        h-[195px]
        w-[270px]
        shrink-0
        overflow-hidden
        rounded-[20px]
        border-[3px]
        border-[#D4A017]
        bg-[#071B3B]
        shadow-[0_8px_20px_rgba(0,0,0,0.16)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_14px_28px_rgba(0,0,0,0.22)]
      "
    >
      {/* IMAGE */}

      <img
        src={image}
        alt={name}
        width={270}
        height={195}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* LIGHT OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-black/10
        "
      />

      {/* CITY PILL */}

      <div
        className="
          absolute
          bottom-3
          left-1/2
          z-10
          flex
          min-h-[40px]
          w-[calc(100%-24px)]
          max-w-[248px]
          -translate-x-1/2
          items-center
          justify-center
          rounded-full
          border-2
          border-[#D4A017]
          bg-[#071B3B]
          px-4
          py-2
          text-center
          text-[14px]
          font-bold
          leading-[1.15]
          text-white
          shadow-[0_5px_15px_rgba(0,0,0,0.3)]
          transition-all
          duration-300
          group-hover:bg-[#D4A017]
          group-hover:text-[#071B3B]
        "
        style={{ fontFamily: sansFont }}
      >
        <span className="max-w-full break-words">
          {name}
        </span>
      </div>
    </Link>
  );
}

/* =========================================================
   FOOTER
========================================================= */

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

/* =========================================================
   PAGE
========================================================= */

export default function MaharashtraLocationsPage() {
  return (
    <main
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-white
        text-[#071B3B]
      "
      style={{ fontFamily: sansFont }}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header />

      {/* =====================================================
          MAIN LOCATION SECTION
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            pb-20
            pt-10
            sm:px-8
            sm:pb-24
            sm:pt-12
            md:px-12
            lg:px-[80px]
            lg:pt-[48px]
          "
        >
          {/* PAGE TITLE */}

          <h1
            className="
              text-center
              text-4xl
              font-bold
              leading-tight
              text-[#D4A017]
              sm:text-5xl
              md:text-[52px]
            "
            style={{ fontFamily: serifFont }}
          >
            Locations We Serve in Maharashtra
          </h1>

          {/* CITY GRID */}

          <div
            className="
              mx-auto
              mt-12
              grid
              w-full
              max-w-[1160px]
              grid-cols-1
              justify-items-center
              gap-x-[20px]
              gap-y-[22px]
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {cities.map((city) => (
              <CityCard
                key={city.name}
                name={city.name}
                image={city.image}
                link={city.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />
    </main>
  );
}
export async function generateMetadata() {
  return withYoast("/locations/maharashtra", baseMetadata);
}
