import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic"

const MyMap = dynamic(() => import("../components/Map/Map"), { ssr: false })

const Home: NextPage = () => {

  return (
    <div>
      <header className="bg-theme-white">
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <h1 className="text-7xl font-bold text-theme-black ">
              Coffee Story
            </h1>
            <p className="mt-1.5 text-md pl-4">
              Lorem ipsum dolor sit amet, consectetur adipis
            </p>
          </div>
        </div>
      </header>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h3 className="text-xl font-bold sm:text-2xl my-5">
              Background
            </h3>
          </div>
          <article className="space-y-4 text-gray-500">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              explicabo quidem voluptatum voluptas illo accusantium ipsam quis,
              vel mollitia? Vel provident culpa dignissimos possimus, perferendis
              consectetur odit accusantium dolorem amet voluptates aliquid,
              ducimus tempore incidunt quas. Veritatis molestias tempora
              distinctio voluptates sint! Itaque quasi corrupti, sequi quo odit
              illum impedit!
            </p>
          </article>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h3 className="text-xl font-bold sm:text-2xl my-5">
              Research Methodology
            </h3>
          </div>
          <div className="flow-root">
            <div className="-my-8 divide-y divide-gray-100">
              <details className="group py-8 [&_summary::-webkit-details-marker]:hidden" open>
                <summary className="flex items-center justify-between cursor-pointer">
                  <h2 className="text-lg font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                  veritatis molestias culpa in, recusandae laboriosam neque aliquid libero
                  nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio
                  corporis earum similique!
                </p>
              </details>

              <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h2 className="text-lg font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                  veritatis molestias culpa in, recusandae laboriosam neque aliquid libero
                  nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio
                  corporis earum similique!
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
      <section>
        <section>
          <div className="max-w-screen-xl px-4 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <header>
              <h3 className="text-xl font-bold sm:text-2xl my-5">
                Findings
              </h3>
              <p className="max-w-md mt-4 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                natus?
              </p>
            </header>

            <ul className="grid gap-8 mt-8 mx-8 sm:grid-cols-1 lg:grid-cols-2">
              <li>
                <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                  <img
                    alt="Office"
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    className="h-56 w-full object-cover"
                  />

                  <div className="bg-white p-4 sm:p-6">
                    <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                      Static Maps
                    </time>

                    <a href="#">
                      <h3 className="mt-0.5 text-lg text-gray-900">
                        Insert Static Maps Here
                      </h3>
                    </a>

                    <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                      dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                      sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                      voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                      Molestias explicabo corporis voluptatem?
                    </p>
                  </div>
                </article>
              </li>
              <li>
                <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                  <img
                    alt="Office"
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    className="h-56 w-full object-cover"
                  />

                  <div className="bg-white p-4 sm:p-6">
                    <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                      Statistics
                    </time>

                    <a href="#">
                      <h3 className="mt-0.5 text-lg text-gray-900">
                        Insert Graph Here
                      </h3>
                    </a>

                    <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                      dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                      sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                      voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                      Molestias explicabo corporis voluptatem?
                    </p>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 pb-16 pt-2 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h3 className="text-xl font-bold sm:text-2xl my-5">
              Main Maps
            </h3>
          </div>
          <div className="mt-8">
            <div className="h-96 w-full">
              <MyMap />
            </div>
          </div>
        </div>
      </section >
      <section>
        <div className="mx-auto max-w-screen-xl px-4 pb-16 pt-2 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h3 className="text-xl font-bold sm:text-2xl my-5">
              Other Components
            </h3>
            <h6 className="text-sm font-bold py-4">
              2022-10-10
            </h6>
          </div>
          <div className="mt-8">
            <div >
              <img
                alt="Party"
                src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="inset-0 object-cover h-48 w-full my-3"
              />
            </div>
            <div className="lg:py-8">
              <article className="space-y-4 text-gray-600">
                <div role="alert" className="rounded border-l-4 border-black bg-gray-50 p-4">
                  <strong className="block font-medium text-theme-tosca"> Key Takeaways </strong>
                  <p className="mt-2 text-sm text-theme-black">
                    Article
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section >

      <footer aria-label="Site Footer" className="bg-white">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="pt-8 mt-8 border-t border-gray-100">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <p className="text-xs text-left text-gray-500">
                &copy; 2022. Company Name. All rights reserved.
              </p>

              <nav aria-label="Footer Navigation - Support">
                <ul className="flex flex-wrap justify-start gap-4 text-xs lg:justify-end">
                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                      Terms & Conditions
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                      Cookies
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div >
  )
}

export default Home
