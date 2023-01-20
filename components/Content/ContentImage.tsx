import ContentTitle from "./ContentTitle"
import { ImageContentModel } from "../../lib/Contents/Interface/ImageInterface"

export default function ContentImage(model: ImageContentModel) {
  const showTitle: boolean = model.imageTitle !== undefined
  return (
    <div>
      {
        showTitle ? <div className="max-w-3xl">
          <ContentTitle
            subTitle={model.imageTitle!}
          />
        </div> : <></>
      }
      <img
        alt="Party"
        src={model.imageURL}
        className="inset-0 w-full object-cover"
      />
      <p className="text-justify text-largeCaption font-montserrat font-regular mt-4 mb-2">
        {`Figure ${model.footer}`}
      </p>
    </div>
  )
}