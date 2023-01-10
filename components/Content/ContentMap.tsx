import dynamic from "next/dynamic"
import ContentTitle from "./ContentTitle"
const MyMap = dynamic(() => import("../../components/Map"), { ssr: false })

export default function ContentMap() {
  return (
    <div>
      <div className="max-w-3xl">
        <ContentTitle
          subTitle={"Lokasi Studi dan Unit Analisis"}
        />
      </div>
      <div className="h-96 w-full">
        <MyMap />
      </div>
      <p className="text-justify text-largeCaption font-montserrat font-regular mt-4 mb-2">
        Figure 1. Beri Keterangan Disini
      </p>
    </div>
  )
}