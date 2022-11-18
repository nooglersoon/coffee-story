import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section className="bg-white text-black">
      <div
        className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Coffee Story.

            <span className="sm:block">.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
            tenetur fuga ducimus numquam ea!
          </p>
        </div>
      </div>
    </section>

  )
}
