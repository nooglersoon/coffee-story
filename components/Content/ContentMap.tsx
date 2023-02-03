import dynamic from "next/dynamic"
import ContentTitle from "./ContentTitle"
import { MapContentModel } from "../../lib/Contents/Interface/MapInterface"
const MyMap = dynamic(() => import("../Map/Map"), { ssr: false })

export default function ContentMap(model: MapContentModel) {
  const showTitle: boolean = model.mapTitle !== undefined
  const showFooter: boolean = model.footer !== ''
  return (
    <div>
      {
        showTitle ? <div className="max-w-3xl">
          <ContentTitle
            subTitle={model.mapTitle!}
          />
        </div> : <></>
      }
      <div className="h-full lg:h-full w-full lg:w-3/4 aspect-square md:aspect-square lg:aspect-square mx-auto">
        <MyMap
          data={model.mapProperties.data}
          style={model.mapProperties.style}
          onEachFeature={model.mapProperties.onEachFeature} />
      </div>
      {
        showFooter ? <p className="text-justify text-largeCaption font-montserrat font-regular mt-4 mb-2">
          {`Figure ${model.footer}`}
        </p> : <></>
      }
    </div>
  )
}