import SectionSeparators from "../../core/components/SectionSeparators"
import { BannerBulletsInterface, BannerBullets, BannerBulletsType } from "./BannerBullets"

export default function IntroBanner() {

  let blueBullet: BannerBulletsInterface = {
    content: "Apabila toko kopi mengincar trend dan merasa memiliki kemampuan bersaing dengan toko kopi lainnya",
    type: BannerBulletsType.Blue
  }

  let yellowBullet: BannerBulletsInterface = {
    content: "Apabila toko kopi mengincar trend dan merasa memiliki kemampuan bersaing dengan toko kopi lainnya",
    type: BannerBulletsType.Yellow
  }

  let toscaBullet: BannerBulletsInterface = {
    content: "Apabila toko kopi mengincar trend dan merasa memiliki kemampuan bersaing dengan toko kopi lainnya",
    type: BannerBulletsType.Tosca
  }

  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-8">
          <div className="bg-white p-8 md:p-12 lg:px-16 lg:py-24 my-auto">
            <div className="mx-auto max-w-xl text-lef">
              <p className="text-heading1 font-bold font-montserrat text-black text-shadow-xl">
                Mau buka toko kopi baru?
              </p>

              <BannerBullets
                content={"Apabila toko kopi mengincar trend dan merasa memiliki kemampuan bersaing dengan toko kopi lainnya"}
                type={BannerBulletsType.Blue}
              />

              <BannerBullets
                content={"Apabila toko kopi mengincar trend dan merasa memiliki kemampuan bersaing dengan toko kopi lainnya"}
                type={BannerBulletsType.Yellow}
              />

              <BannerBullets
                content={"Apabila toko kopi mengincar trend dan merasa memiliki kemampuan bersaing dengan toko kopi lainnya"}
                type={BannerBulletsType.Tosca}
              />

            </div>
          </div>

          <div className="grid grid-cols-1">
            <img
              alt="Intro"
              src="./shared/intro.png"
              className=" object-none md:object-cover w-96 sm:w-full h-96 md:h-5/6 mx-auto my-auto py-4"
            />
            {/* object-none sm:object-cover md:object-contain sm:h-96 md:h-full h-full mx-auto my-auto py-8 */}
          </div>
        </div>
        <SectionSeparators />
      </div>
    </section>
  )
}