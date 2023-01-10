import ContentTitle from "./ContentTitle"

export default function ContentImage() {
  return (
    <div>
      <div className="max-w-3xl">
        <ContentTitle
          subTitle={"Lokasi Studi dan Unit Analisis"}
        />
      </div>
      <img
        alt="Party"
        src={
          'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
        }
        className="inset-0 w-full object-cover"
      />
      <p className="text-justify text-largeCaption font-montserrat font-regular mt-4 mb-2">
        Figure 1. Beri Keterangan Disini
      </p>
    </div>
  )
}