import { ContributorCardModel } from "../../lib/Contributor/ContributorCardInterface"

export default function ContributorCard(model: ContributorCardModel) {
  return (
    <blockquote className="flex h-full flex-col justify-between bg-white p-6">
      <div>
        <img
          alt={model.name}
          src={model.imageURL}
          className="inset-0 w-full object-cover"
        />
        <div className="mt-4">
          <p className="text-xl font-semibold font-montserrat text-left text-black sm:text-2xl">
            {model.name}
          </p>
          <p className="mt-0 font-montserrat text-left text-black">
            {model.occupation}
          </p>
        </div>
      </div>
    </blockquote>
  )
}