import SectionTitle from "./SectionTitle"
import SectionBody from "./SectionBody"

interface MyProps {
  children?: React.ReactNode
}

export default function Section(props: MyProps) {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-10 pb-12 sm:px-10 lg:px-8">
        <div className="max-w-3xl">
          <SectionTitle
            title={"Section Title"}
          />
        </div>
        {props.children}
      </div>
    </section>
  )
}