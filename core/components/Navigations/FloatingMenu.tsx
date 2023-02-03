import { useEffect, useState } from 'react'
import FloatingMenuModel from '../../../lib/FloatingMenu/FloatingMenuModel'
import { Link } from 'react-scroll'

const FloatingMenu = (props: { models: FloatingMenuModel[] }) => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 1700) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  return (
    <div
      className={`z-50 fixed left-8 top-20 w-64 hidden ${show ? ' sm:hidden xl:flex' : 'sm:hidden xl:hidden'}`}
    >
      <div
        className="grid align-center gap-8 bg-white pl-6 pr-16 pt-5 pb-10 transition-all shadow-lg"
      >
        <p className='font-semibold font-montserrat text-medium text-black'>Pada laman ini</p>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        {
          props.models.map((model) => {
            return (
              <button className="text-left" key={model.title.toLowerCase()}>
                <Link to={model.title.toLowerCase()} spy={true} smooth={true}>
                  <p className='font-regular font-montserrat text-small text-black'>{model.title}</p>
                </Link>
              </button>
            )
          })
        }
      </div>
    </div>
  )
}

export default FloatingMenu
