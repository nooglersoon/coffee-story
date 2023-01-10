import MainButton from "../../core/components/Buttons/MainButton"

export default function Banner() {
  return (
    <section className="overflow-hidden bg-mainYellow sm:grid sm:grid-cols-2 px-4 py-4 shadow-[inset_0_11px_8px_-10px_rgba(0,0,0,0.6)]">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 mx-auto my-auto">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <div className="grid-cols-1 gap-0">
            <h1 className="text-bannerTitle font-bold text-black font-montserrat md:text-3xl text-shadow-xl">
              Coffee
            </h1>
            <h1 className="text-bannerTitle font-body text-black font-montserrat md:text-3xl text-shadow-xl">
              Story
            </h1>
          </div>
          <p className=" text-black font-montserrat font-regular text-body md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
            fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
            duis.
          </p>
          <div className="grid-cols-2 my-8 gap-8">
            <MainButton
              title="Mulai baca"
            />
            <MainButton
              title="Sapa Kontributor"
            />
          </div>
        </div>
      </div>
      <img
        alt="Hero"
        src="./shared/hero.png"
        className="h-full object-contain mx-auto my-auto py-8"
      />
    </section>
  )
}