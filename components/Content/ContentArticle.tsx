import ContentTitle from "./ContentTitle"

export default function ContentArticle() {
  return (
    <div>
      <div className="max-w-3xl">
        <ContentTitle
          subTitle={"Metode Pengambilan Data"}
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
    </div>
  )
}