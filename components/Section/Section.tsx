import SectionTitle from "./SectionTitle"

interface MyProps {
  children?: React.ReactNode
}

export default function Section(props: MyProps) {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-6 pb-12 sm:px-10 lg:px-10">
        <div className="max-w-3xl">
          <SectionTitle
            title={"Metodologi"}
          />
        </div>
        {props.children}
      </div>
    </section>
  )
}