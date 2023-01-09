export default function ContentTitle(props: { subTitle: string }) {
  return (
    <p className="text-heading4 font-monstserrat font-bold sm:text-heading3 my-5">
      {props.subTitle}
    </p>
  )
}