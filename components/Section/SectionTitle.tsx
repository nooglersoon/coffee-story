export default function SectionTitle(props: { title: string }) {
  return (
    <p className="text-heading3 font-montserrat font-bold md:text-heading2 my-5">
      {props.title}
    </p>
  )
}