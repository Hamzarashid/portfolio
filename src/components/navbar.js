import React, { useEffect, useRef, useState } from "react";
import { Menu2 } from "tabler-icons-react";
const Navbar = () => {
  const [state, setstate] = useState(false);
  const [colorTheme, setTheme] = useState(true);
  const isMounted = useRef(false);
  const darkMode = () => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.toogle === "false") {
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
    } else {
      htmlClasses.add("dark");
      localStorage.theme = "dark";
    }
  };
  useEffect(() => {
    if (isMounted.current) {
      darkMode();
    } else {
      isMounted.current = true;
    }
  }, [colorTheme]);
  useEffect(() => {
    const mode = window.localStorage.getItem("toogle");
    setTheme(JSON.parse(mode));
    darkMode();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("toogle", JSON.stringify(colorTheme));
  }, [colorTheme]);
  return (
    <div className="">
      <nav className="shadow-lg fixed top-0 w-full z-50 bg-gray-200 dark:bg-gray-900 ">
        <div className="sm:px-6 lg:px-8">
          <div className=" flex items-center justify-between h-16">
            <div className=" flex items-center md:hidden md:mt-4 text-black dark:text-white">
              <button
                type="button"
                className=" ml-7 "
                onClick={() => setstate(!state)}
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <Menu2 size={30} strokeWidth={2} />
              </button>
            </div>
            <div className=" hidden md:block">
              <div className="flex items-center">
                <div className="flex  ">
                  <a
                    href="#intro"
                    className="text-black dark:text-gray-300 transition duration-100 ease-linear hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Intro
                  </a>

                  <a
                    href="#about"
                    className="text-black dark:text-gray-300 transition duration-100 ease-linear hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>

                  <a
                    href="#services"
                    className="text-black dark:text-gray-300 transition duration-100 ease-linear hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </a>

                  <a
                    href="#footer"
                    className="text-black dark:text-gray-300 transition duration-100 ease-linear hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="relative ">
              <div>
                <img alt="Logo" src="./img/logo.svg" width={85} />
              </div>
            </div>

            <div className=" ">
              <div className=" flex items-center ">
                <div className="hidden md:contents">
                  <a
                    href="https://www.facebook.com/hamza.rashid3/"
                    target="_blank"
                    className=" flex items-center md:ml-6  hover:scale-110 motion-reduce:transform-none transition duration-300 ease-linear text-black dark:text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white "
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-facebook"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hamzarashid1"
                    target="_blank"
                    className=" flex items-center md:ml-6  hover:scale-110 motion-reduce:transform-none transition duration-300 ease-linear text-black dark:text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-linkedin"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <line x1="8" y1="11" x2="8" y2="16" />
                      <line x1="8" y1="8" x2="8" y2="8.01" />
                      <line x1="12" y1="16" x2="12" y2="11" />
                      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Hamzarashid"
                    target="_blank"
                    className=" flex items-center md:ml-6 transition duration-300 ease-linear  hover:scale-110 motion-reduce:transform-none  text-black dark:text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </a>
                </div>
                <span
                  onClick={() => setTheme(!colorTheme)}
                  id="switchTheme"
                  className="mr-7 flex items-center md:ml-6  duration-500 ease-linear  hover:scale-110 motion-reduce:transform-none text-black dark:text-white hover:text-black "
                >
                  {colorTheme ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-sun"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="12" r="4" />
                      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        {state && (
          <div
            className="md:hidden transition duration-500 ease-linear"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 text-center ">
              <a
                href="#intro"
                className="dark:text-gray-300 text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Intro
              </a>

              <a
                href="#about"
                className="dark:text-gray-300 text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>

              <a
                href="#services"
                className="dark:text-gray-300 text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>

              <a
                href="#footer"
                className="dark:text-gray-300 text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
            <div className=" flex items-center justify-center ">
              <a
                href="https://www.facebook.com/hamza.rashid3/"
                target="_blank"
                className=" flex items-center md:ml-6  hover:scale-110 motion-reduce:transform-none dark:bg-gray-900 p-1 rounded-full text-black dark:text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white "
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-facebook"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/hamzarashid1"
                target="_blank"
                className=" flex items-center md:ml-6  hover:scale-110 motion-reduce:transform-none dark:bg-gray-900 p-1 rounded-full text-black dark:text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-linkedin"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <line x1="8" y1="11" x2="8" y2="16" />
                  <line x1="8" y1="8" x2="8" y2="8.01" />
                  <line x1="12" y1="16" x2="12" y2="11" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </a>
              <a
                href="https://github.com/Hamzarashid"
                target="_blank"
                className=" flex items-center md:ml-6  hover:scale-110 motion-reduce:transform-none dark:bg-gray-900 p-1 rounded-full text-black dark:text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-github"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
