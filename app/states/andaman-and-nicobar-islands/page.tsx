      </section>

      {/* =====================================================
          LOCATIONS
      ====================================================== */

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-14 md:px-12 lg:px-[80px]">
          <SectionTitle>Locations We Serve</SectionTitle>

          <div className="mx-auto mt-9 grid max-w-[1150px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((location) => (
              <ImageCard
                key={location.name}
                name={location.name}
                image={location.image}
                link={location.link}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/locations"
              className="inline-flex rounded-[20px] bg-[#D4A017] px-10 py-3 text-sm font-medium text-[#071B3B] shadow-md transition-all hover:-translate-y-1"
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAJOR CITIES
      ====================================================== */

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-14 md:px-12 lg:px-[80px]">
          <SectionTitle>Major Cities We Serve in Andhra Pradesh</SectionTitle>

          <p className="mx-auto mt-5 max-w-[1123px] text-center text-sm font-bold leading-6 text-[#071B3B] sm:text-base">
            Tender Elite provides professional GeM and tender consultancy services across major cities and industrial regions of Andhra Pradesh.
          </p>

          <div className="mx-auto mt-9 grid max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {majorCities.map((city) => (
              <div
                key={city}
                className="flex h-20 items-center justify-center rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-4 text-center font-serif text-2xl font-semibold text-white transition-all duration-300 hover:-translate-y-1"
              >
                {city}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/locations/andhra-pradesh"
              className="inline-flex rounded-[20px] bg-[#D4A017] px-10 py-3 text-sm font-medium text-[#071B3B] shadow-md transition-all hover:-translate-y-1"
            >
              View More Cities
            </Link>
          </div>

          {/* =================================================
              WHY ANDHRA PRADESH
          ================================================== */}

          <div className="mx-auto mt-14 max-w-[1280px] rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-8 py-8 sm:px-10 sm:py-9 lg:px-[72px]">
            <h3 className="font-serif text-2xl font-bold leading-tight text-[#D4A017] sm:text-3xl">
              Why Andhra Pradesh is Important for Government Tenders
            </h3>

            <p className="mt-5 text-base leading-7 text-white sm:text-lg">
              Andhra Pradesh is among the emerging states in India for:
            </p>

            <div className="mt-5 grid gap-x-16 gap-y-1 text-sm leading-7 text-white sm:text-base lg:grid-cols-2">
              <div className="space-y-0.5">
                {tenderImportanceLeft.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>

              <div className="space-y-0.5">
                {tenderImportanceRight.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>
            </div>

            <p className="mt-6 max-w-[1120px] text-sm leading-7 text-white sm:text-base">
              Multiple departments including PWD, Municipal Corporations, Energy, Railways, Ports and Infrastructure sectors regularly release tenders across Andhra Pradesh.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-14 md:px-12 lg:px-[80px]">
          <div className="rounded-[20px] border-[3px] border-[#D4A017] bg-[#071B3B] px-6 py-10 text-center sm:px-10 sm:py-12">
            <h2 className="font-serif text-2xl font-bold leading-tight text-[#D4A017] sm:text-3xl md:text-4xl">
              Ready to Grow Your Business with Government Tenders?
            </h2>

            <p className="mx-auto mt-5 max-w-[900px] text-sm leading-7 text-white sm:text-base">
              Partner with Tender Elite for professional GeM and tender consultancy services across Andhra Pradesh.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-[20px] bg-[#D4A017] px-10 py-3 text-sm font-semibold text-[#071B3B] shadow-md transition-all hover:-translate-y-1"
            >
              Let&apos;s Connect Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}