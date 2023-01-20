export default function IntroBanner() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-white p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-lef">
              <p className="text-heading1 font-bold font-montserrat text-black">
                Mau buka toko kopi baru?
              </p>

              <div className="mt-8 md:mt-8">
                <article className="space-y-4 text-black my-4">
                  <p className="text-justify text-body font-montserrat font-regular">
                    Apabila toko kopi mengincar trend dan merasa memiliki kemampuan bersaing dengan toko kopi lainnya
                  </p>
                </article>
              </div>

              <div className="mt-8 md:mt-8">
                <article className="space-y-4 text-black my-4">
                  <p className="text-justify text-body font-montserrat font-regular">
                    Apabila toko kopi mengincar trend dan merasa memiliki kemampuan bersaing dengan toko kopi lainnya
                  </p>
                </article>
              </div>

              <div className="mt-8 md:mt-8">
                <article className="space-y-4 text-black my-4">
                  <p className="text-justify text-body font-montserrat font-regular">
                    Apabila toko kopi mengincar trend dan merasa memiliki kemampuan bersaing dengan toko kopi lainnya
                  </p>
                </article>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1">
            <img
              alt="Intro"
              src="./shared/intro.png"
              className=" object-fill sm:object-cover md:object-contain sm:h-96 md:h-full h-full mx-auto my-auto py-8"
            />
          </div>
        </div>
      </div>
    </section>

  )
}