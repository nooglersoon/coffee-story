import ContentTitle from "./ContentTitle"

export default function SectionBody() {
  return (
    <div>
      <div className="max-w-3xl">
        <ContentTitle
          subTitle={"Lokasi Studi dan Unit Analisis"}
        />
      </div>
      <article className="space-y-4 text-black my-4">
        <p className="text-justify text-body font-montserrat font-regular">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
          hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
          minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
          hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
          minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
        </p>
      </article>
      <div>
        <img
          alt="Party"
          src={
            'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
          }
          className="inset-0 w-full object-cover"
        />
        <p className="text-justify text-largeCaption font-montserrat font-regular mt-4 mb-2 px-2">
          Figure 1. Beri Keterangan Disini
        </p>
      </div>
    </div>
  )
}