export default function MainButton(props: { title: string }) {
  return (
    <button type="button" className="text-white bg-mainNavy font-semibold font-montserrat text-sm px-10 py-3 text-center mr-2 mb-5 shadow-md shadow-slate-600">{props.title}</button>
  )
}