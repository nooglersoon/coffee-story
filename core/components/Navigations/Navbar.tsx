import React from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-5 bg-white mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="/"
            >
              <img src="./shared/logo.svg" className="w-100" />
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img src="./shared/hamburger.svg" className="w-100" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center my-4" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs font-semibold leading-snug font-montserrat text-black hover:opacity-75"
                  href="#pablo"
                >
                  Tentang RDS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs font-semibold leading-snug font-montserrat text-black hover:opacity-75"
                  href="#pablo"
                >
                  Mulai kontribusi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}