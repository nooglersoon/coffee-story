export default function SectionTitle(props: { title: string }) {
  return (
    <>
      <div className="flex">
        <p className="text-heading3 font-montserrat font-bold md:text-heading2 my-5 divide-y">
          {props.title}
        </p>
      </div >
    </>
  )
}