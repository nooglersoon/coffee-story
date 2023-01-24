import SectionSeparators from "../../core/components/SectionSeparators";
import ContributorCard from "./ContributorCard";

export default function ContributorSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-6 pb-12 sm:px-10 lg:px-10">
        <SectionSeparators />
        <div className="items-end justify-between sm:flex">
          <div className="max-w-xl">
            <p className="text-heading3 font-montserrat font-bold md:text-heading2 my-5">
              Tentang Kontributor
            </p>
            <p className="text-heading4 font-montserrat font-bold md:text-heading3 my-5">
              Temui orang-orang di balik riset ini
            </p>

          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <ContributorCard
            name={"Sutan Mufti"}
            imageURL={"https://avatars.dicebear.com/v2/male/adb21bd3744845a731047ed351d6c8e8.svg"}
            occupation={"Spatial Data Engineer"}
          />
          <ContributorCard
            name={"Hadiyan Wijaya"}
            imageURL={"https://avatars.dicebear.com/v2/male/adb21bd3744845a731047ed351d6c8e8.svg"}
            occupation={"Spatial Analyst"}
          />
          <ContributorCard
            name={"Rini Angeliantari"}
            imageURL={"https://avatars.dicebear.com/v2/female/adb21bd3744845a731047ed351d6c8e8.svg"}
            occupation={"UI/UX Designer"}
          />
          <ContributorCard
            name={"Fauzi Achmad"}
            imageURL={"https://avatars.dicebear.com/v2/male/adb21bd3744845a731047ed351d6c8e8.svg"}
            occupation={"Front End Engineer"} />
        </div>
      </div>
    </section>
  )
}