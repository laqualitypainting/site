import Link from "next/link";
import { useState } from "react";
import { siteTitle } from "./layout";

export const LINKS = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const menu = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
      fill="currentColor"
    />
    <path
      d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
      fill="currentColor"
    />
    <path
      d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
      fill="currentColor"
    />
  </svg>
);

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <header className="flex flex-wrap text-blue-100 h-24 md:h-12 font-extrabold bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="flex flex-wrap text-left pl-3">
          <span className="align-sub">
            Serving Huntsville, AL and surrounding area. Call Now!
            <div className="flex flex-wrap text-left">
              <span className="align-top">
                <Link href="tel:1+-256-945-1312">
                  <span className=" hover:text-blue-300 cursor-pointer">
                    1+(256) 945-1312
                  </span>
                </Link>
                {" "} | {" "}
                <span className="hover:text-blue-300">
                  <Link href="mailto:contact@laqualitypainting.com">
                    contact@laqualitypainting.com
                  </Link>
                </span>
              </span>
            </div>
          </span>
        </div>
      </header>
      <nav className="sticky z-40 top-0 flex bg-slate-900 opacity-90 flex-wrap items-center justify-between py-2 navbar-expand-lg text-black shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-white no-underline md:text-2xl text-xl font-bold hover:text-blue-400 px-2">
                {siteTitle}
              </a>
            </Link>
            <button
              aria-label="hamburger menu"
              className="text-white cursor-pointer text-xl leading-none px-0 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {menu}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center sticky" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex text-white flex-col lg:flex-row list-none lg:ml-auto ml-auto font-bold text-lg px-auto  lg:px-11">
              {LINKS.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <div className="no-underline relative px-4 py-2 font-bold text-white hover:text-blue-400 0">
                    <Link href={href}>{label}</Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
