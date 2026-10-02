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
   4 EQUAL COLUMNS
========================================================= */

const maharashtraCities = [
  [
    "Mumbai",
    "Vasai Virar",
    "Mira Bhayander",
    "Thane",
    "Pune",
    "Gondia",
    "Malegaon",
    "Ichalkaranji",
    "Osmanabad",
    "Dhule",
  ],
  [
    "Wardha",
    "Latur",
    "Amravati",
    "Sangli",
    "Kolhapur",
    "Panvel",
    "Kalyan Dombivali",
    "Nashik",
    "Washim",
    "Hingoli",
  ],
  [
    "Baramati",
    "Palghar",
    "Satara",
    "Beed",
    "Chandrapur",
    "Akola",
    "Ahmednagar",
    "Chhatrapati Sambhajinagar",
    "Ulhasnagar",
    "Bhiwandi",
  ],
  [
    "Navi Mumbai",
    "Nagpur",
    "Buldhana",
    "Karad",
    "Jaysingpur",
    "Ratnagiri",
    "Parbhani",
    "Yavatmal",
    "Nanded",
    "Jalgaon",
    "Solapur",
  ],
];

const maharashtraCityLinks: Record<string, string> = {
  "Mumbai": "/locations/maharashtra/mumbai",
  "Vasai Virar": "/locations/maharashtra/vasai-virar",
  "Mira Bhayander": "/locations/maharashtra/mira-bhayander",
  "Thane": "/locations/maharashtra/thane",
  "Pune": "/locations/maharashtra/pune",
  "Gondia": "/locations/maharashtra/gondia",
  "Malegaon": "/locations/maharashtra/malegaon",
  "Ichalkaranji": "/locations/maharashtra/ichalkaranji",
  "Osmanabad": "/locations/maharashtra/osmanabad",
  "Dhule": "/locations/maharashtra/dhule",
  "Wardha": "/locations/maharashtra/wardha",
  "Latur": "/locations/maharashtra/latur",
  "Amravati": "/locations/maharashtra/amravati",
  "Sangli": "/locations/maharashtra/sangli",
  "Kolhapur": "/locations/maharashtra/kolhapur",
  "Panvel": "/locations/maharashtra/panvel",
  "Kalyan Dombivali": "/locations/maharashtra/kalyan-dombivli",
  "Nashik": "/locations/maharashtra/nashik",
  "Washim": "/locations/maharashtra/washim",
  "Hingoli": "/locations/maharashtra/hingoli",
  "Baramati": "/locations/maharashtra/baramati",
  "Palghar": "/locations/maharashtra/palghar",
  "Satara": "/locations/maharashtra/satara",
  "Beed": "/locations/maharashtra/beed",
  "Chandrapur": "/locations/maharashtra/chandrapur",
  "Akola": "/locations/maharashtra/akola",
  "Ahmednagar": "/locations/maharashtra/ahmednagar",
  "Chhatrapati Sambhajinagar": "/locations/maharashtra/chhatrapati-sambhajinagar",
  "Ulhasnagar": "/locations/maharashtra/ulhasnagar",
  "Bhiwandi": "/locations/maharashtra/bhiwandi",
  "Navi Mumbai": "/locations/maharashtra/navi-mumbai",
  "Nagpur": "/locations/maharashtra/nagpur",
  "Buldhana": "/locations/maharashtra/buldhana",
  "Karad": "/locations/maharashtra/karad",
  "Jaysingpur": "/locations/maharashtra/jaysingpur",
  "Ratnagiri": "/locations/maharashtra/ratnagiri",
  "Parbhani": "/locations/maharashtra/parbhani",
  "Yavatmal": "/locations/maharashtra/yavatmal",
  "Nanded": "/locations/maharashtra/nanded",
  "Jalgaon": "/locations/maharashtra/jalgaon",
  "Solapur": "/locations/maharashtra/solapur",
};

/* =========================================================
   LOCATIONS
========================================================= */

const locations = [
  {
    name: "Andhra Pradesh",
    href: "/states/andhra-pradesh",
    image: "/images/Andhra Pradeshhero.png",
  },
  {
    name: "Arunachal Pradesh",
    href: "/states/arunachal-pradesh",
    image: "/images/Arunachal Pradeshhero.png",
  },
  {
    name: "Assam",
    href: "/states/assam",
    image: "/images/Assamhero.png",
  },
  {
    name: "Bihar",
    href: "/states/bihar",
    image: "/images/Biharhero.png",
  },
  {
    name: "Chattisgarh",
    href: "/states/chhattisgarh",
    image: "/images/Chhattisgarhhero.png",
  },
  {
    name: "Goa",
    href: "/states/goa",
    image: "/images/Goahero.png",
  },
  {
    name: "Gujarat",
    href: "/states/gujarat",
    image: "/images/Gujarathero.png",
  },
  {
    name: "Haryana",
    href: "/states/haryana",
    image: "/images/Haryanahero.png",
  },
  {
    name: "Himachal Pradesh",
    href: "/states/himachal-pradesh",
    image: "/images/Himachal Pradeshhero.png",
  },
  {
    name: "Jharkhand",
    href: "/states/jharkhand",
    image: "/images/Jharkhandhero.png",
  },
  {
    name: "Karnataka",
    href: "/states/karnataka",
    image: "/images/Karnatakahero.png",
  },
  {
    name: "Kerala",
    href: "/states/kerala",
    image: "/images/Keralahero.png",
  },
  {
    name: "Madhya Pradesh",
    href: "/states/madhya-pradesh",
    image: "/images/Madhya Pradeshhero.png",
  },
  {
    name: "Maharashtra",
    href: "/states/maharashtra",
    image: "/images/Maharashtrahero.png",
  },
  {
    name: "Manipur",
    href: "/states/manipur",
    image: "/images/Manipurhero.png",
  },
  {
    name: "Meghalaya",
    href: "/states/meghalaya",
    image: "/images/Meghalayahero.png",
  },
  {
    name: "Mizoram",
    href: "/states/mizoram",
    image: "/images/Mizoramhero.png",
  },
  {
    name: "Nagaland",
    href: "/states/nagaland",
    image: "/images/Nagalandhero.png",
  },
  {
    name: "Odisha",
    href: "/states/odisha",
    image: "/images/Odishahero.png",
  },
  {
    name: "Punjab",
    href: "/states/punjab",
    image: "/images/Punjabhero.png",
  },
  {
    name: "Rajasthan",
    href: "/states/rajasthan",
    image: "/images/Rajasthanhero.png",
  },
  {
    name: "Sikkim",
    href: "/states/sikkim",
    image: "/images/Sikkimhero.png",
  },
  {
    name: "Tamil Nadu",
    href: "/states/tamil-nadu",
    image: "/images/Tamil Naduhero.png",
  },
  {
    name: "Telangana",
    href: "/states/telangana",
    image: "/images/Telanganahero.png",
  },
  {
    name: "Tripura",
    href: "/states/tripura",
    image: "/images/Tripurahero.png",
  },
  {
    name: "Uttar Pradesh",
    href: "/states/uttar-pradesh",
    image: "/images/Uttar Pradeshhero.png",
  },
  {
    name: "Uttarakhand",
    href: "/states/uttarakhand",
    image: "/images/Uttarakhandhero.png",
  },
  {
    name: "West Bengal",
    href: "/states/west-bengal",
    image: "/images/West Bengalhero.png",
  },
  {
    name: "Andaman and Nicobar Islands",
    href: "/states/andaman-and-nicobar-islands",
    image: "/images/Andaman and Nicobar Islandshero.png",
  },
  {
    name: "Dadra and Nagar Haveli and Daman & Diu",
    href: "/states/dadra-and-nagar-haveli-and-daman-and-diu",
    image:
      "/images/Dadra and Nagar Haveli and Daman and Diuhero.png",
  },
  {
    name: "Delhi",
    href: "/states/delhi",
    image: "/images/Delhihero.png",
  },
  {
    name: "Jammu and Kashmir",
    href: "/states/jammu-and-kashmir",
    image: "/images/Jammu and Kashmirhero.png",
  },
  {
    name: "Ladakh",
    href: "/states/ladakh",
    image: "/images/Ladakhhero.png",
  },
  {
    name: "Lakshadweep",
    href: "/states/lakshadweep",
    image: "/images/Lakshadweephero.png",
  },
  {
    name: "Puducherry",
    href: "/states/puducherry",
    image: "/images/Puducherryhero.png",
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
    <header className="relative z-[100] border-b-[5px] border-[#D4A017] bg-white">
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
          className="flex shrink-0 items-center gap-1.5 sm:gap-2"
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
   NORMAL LOCATION CARD
   270 × 195 PX
========================================================= */

function NormalLocationCard({
  name,
  href,
  image,
}: {
  name: string;
  href: string;
  image: string;
}) {
  return (
    <Link
      href={href}
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
        hover:-translate-y-2
        hover:shadow-[0_15px_30px_rgba(0,0,0,0.22)]
      "
    >
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
          transition-transform
          duration-500
          group-hover:scale-[1.05]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[#071B3B]/20
          transition-all
          duration-300
        "
      />

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
          sm:text-[15px]
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
   MAHARASHTRA CARD + HOVER PANEL
========================================================= */

function MaharashtraCard() {
  return (
    <div
      className="
        group
        relative
        h-[195px]
        w-[270px]
      "
    >
      {/* MAIN CARD */}

      <Link
        href="/states/maharashtra"
        className="
          relative
          block
          h-[195px]
          w-[270px]
          overflow-hidden
          rounded-[20px]
          border-[3px]
          border-[#D4A017]
          bg-[#071B3B]
          shadow-[0_8px_20px_rgba(0,0,0,0.16)]
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-[0_15px_30px_rgba(0,0,0,0.22)]
        "
      >
        <img
          src="/images/Maharashtrahero.png"
          alt="Maharashtra"
          width={270}
          height={195}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.05]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[#071B3B]/20
          "
        />

        {/* BUTTON */}

        <div
          className="
            absolute
            bottom-3
            left-1/2
            z-10
            flex
            min-h-[40px]
            -translate-x-1/2
            items-center
            justify-center
            rounded-full
            border-2
            border-[#D4A017]
            bg-[#071B3B]
            px-6
            py-2
            text-center
            text-[15px]
            font-bold
            text-white
            shadow-[0_5px_15px_rgba(0,0,0,0.3)]
            transition-all
            duration-300
            group-hover:bg-[#D4A017]
            group-hover:text-[#071B3B]
          "
          style={{ fontFamily: sansFont }}
        >
          Maharashtra
        </div>
      </Link>

      {/* ===================================================
          MAHARASHTRA CITY POPUP
          4 BALANCED COLUMNS
      =================================================== */}

      <div
        className="
          pointer-events-none
          invisible
          absolute
          left-1/2
          top-[100%]
          z-[300]
          mt-[-5px]
          w-[920px]
          max-w-[calc(100vw-32px)]
          -translate-x-1/2
          translate-y-[-8px]
          rounded-[20px]
          bg-[#0C477D]
          px-[30px]
          py-[28px]
          opacity-0
          shadow-[0_20px_45px_rgba(0,0,0,0.28)]
          transition-all
          duration-200
          group-hover:pointer-events-auto
          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <div
          className="
            grid
            grid-cols-4
            gap-x-8
          "
        >
          {maharashtraCities.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="
                flex
                flex-col
                gap-[5px]
              "
            >
              {column.map((city) => (
                <Link
                  key={city}
                  href={maharashtraCityLinks[city] ?? "/states/maharashtra"}
                  className="
                    block
                    text-[14px]
                    font-medium
                    leading-[1.5]
                    tracking-wide
                    text-white
                    transition-all
                    duration-150
                    hover:translate-x-1
                    hover:text-[#D4A017]
                  "
                  style={{ fontFamily: sansFont }}
                >
                  {city}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
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

export default function LocationsPage() {
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
          MAIN SECTION
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-5
            py-12
            sm:px-8
            sm:py-14
            md:px-12
            lg:px-[80px]
            lg:py-[48px]
          "
        >
          {/* TITLE */}

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
            Locations We Serve In India
          </h1>

          {/* LOCATION GRID */}

          <div
            className="
              mx-auto
              mt-12
              grid
              w-full
              max-w-[1150px]
              grid-cols-1
              justify-items-center
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {locations.map((location) =>
              location.name === "Maharashtra" ? (
                <MaharashtraCard key={location.name} />
              ) : (
                <NormalLocationCard
                  key={location.name}
                  name={location.name}
                  href={location.href}
                  image={location.image}
                />
              ),
            )}
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