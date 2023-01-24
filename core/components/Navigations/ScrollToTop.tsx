import { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 })
  }
  return (
    <div
      className={`z-50 fixed right-8 bottom-8 flex-col gap-3 hidden ${show ? 'sm:flex' : 'sm:hidden'}`}
    >
      <button
        aria-label="Scroll To Top"
        type="button"
        onClick={handleScrollTop}
        className="flex align-center gap-4 rounded-2xl bg-mainYellow p-4 transition-all"
      >
        <p className='font-semibold font-montserrat text-small text-black my-auto'>Kembali keatas</p>
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="black">
          <path
            fillRule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export default ScrollToTop
