import SectionTitle from "./SectionTitle"
import SectionInterface from "../../lib/Section/Interface/SectionInterface"

interface MyProps {
  children?: React.ReactNode
}

export default function Section(props: MyProps, title: string) {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-6 pb-12 sm:px-10 lg:px-10">
        {/* <div className="max-w-3xl">
          <SectionTitle
            title={title}
          />
        </div> */}
        {props.children}
      </div>
    </section>
  )
}