import SectionSeparators from "../SectionSeparators"

const FloatingMenu = () => {

  return (
    <div
      className={`z-50 fixed left-8 top-20 w-56 sm:hidden md:flex`}
    >
      <div
        className="grid align-center gap-8 bg-white pl-6 pr-16 pt-5 pb-10 transition-all shadow-lg"
      >
        <p className='font-semibold font-montserrat text-medium text-black'>Pada laman ini</p>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <p className='font-regular font-montserrat text-small text-black'>Pengantar</p>
        <p className='font-regular font-montserrat text-small text-black'>Tujuan dan Sasaran</p>
        <p className='font-regular font-montserrat text-small text-black'>Metodologi</p>
        <p className='font-regular font-montserrat text-small text-black'>Hasil</p>
        <p className='font-regular font-montserrat text-small text-black'>Temuan</p>
        <p className='font-regular font-montserrat text-small text-black'>Saran Pemilihan Lokasi</p>
      </div>
    </div>
  )
}

export default FloatingMenu
