import Link from "next/link";
import Nav from "../components/navbar";
import roll from "./img/roll.jpg";
import Image from "next/image";
import brush from "./img/brush.jpg";
import Logo from "../public/logoSmall.webp";

import painters from "./img/painters.jpg";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <div className=" bg-la-bgSmall md:bg-la-bg bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="text-white">
          <motion.div initial="hidden" animate="visible" variants={variants}>
            <div className="rounded bg-gradient-to-r from-sky-500 to-indigo-500">
              <div className="max-w-screen-lg mx-auto px-3 py-6">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="">
                    <Link className="" href="/">
                      <span className="text-blue-100 inline-flex items-center font-semibold text-3xl">
                        <svg
                          className="text-primary-500 stroke-current mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M0 0h24v24H0z" stroke="none"></path>
                          <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                          <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                          <rect
                            x="15"
                            y="4"
                            width="6"
                            height="16"
                            rx="1"
                          ></rect>
                          <path d="M4 20h14"></path>
                        </svg>
                        L.A. Quality painting
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.6,
                    },
                  },
                }}
              >
                <div className="max-w-screen-lg mx-auto px-3 pt-20 pb-28">
                  <header className="text-center">
                      <Image alt="LA quality painting logo" className="rounded-full shadow-md" src={Logo} />
                    <h1 className="text-2xl mt-2  text-gray-900 font-bold whitespace-pre-line leading-hero">
                      If it&apos;s not L.A. Quality, it&apos;s not quality!
                    </h1>
                    <div className="text-2xl text-blue-100 mt-4 mb-10">
                    </div>
                  </header>
                </div>
              </motion.div>
            </div>

            <div className="mx-auto mt-60 py-24 ">
              <div className="bg-slate-900 mt-64 min-w-fit">
                <div className="grid gap-4 place-content-center">
                  <div className="mt-20 flex flex-wrap items-center">
                    <div className="w-full sm:w-1/2 text-center px-6">
                      <div className="relative flex h-64 flex-col max-w-lg break-words bg-gradient-to-l from-sky-500 to-indigo-500 w-full mb-8 mt-8 shadow-2xl rounded-lg">
                        <h2 className="text-3xl pt-6 text-white font-extrabold">
                          Painting services and much more!
                        </h2>
                        <div className="mt-6 text-xl px-3 pb-6 font-medium text-white leading-9">
                        Interior/exterior painting services, bathroom remodels, flooring, tile, & more!
                       </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 p-6 ml-5 md:ml-0 pl-auto ">
                      <Image
                        src={painters}
                        className="rounded-lg "
                        alt="painters"
                        width={302}
                        height={475}
                      />
                    </div>
                  </div>

                  <div className="mt-20 flex flex-wrap items-center flex-row-reverse">
                    <div className="w-full sm:w-1/2 text-center px-6">
                      <div className="relative h-64 flex flex-col max-w-lg break-words bg-gradient-to-r from-sky-500 to-indigo-500 w-full mb-8 shadow-2xl rounded-lg">
                        <h3 className="text-3xl pt-6 text-white font-extrabold">
                          Quality Work
                        </h3>
                        <div className="mt-6 text-xl px-3 pb-6 font-medium text-white leading-9">
                           At L.A.
                          Quality we put quality first. We offer reasonable prices with
                          superior quality!
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 p-6">
                      <Image
                        src={brush}
                        className="rounded-lg"
                        alt="paint brush"
                        width={576}
                        height={384}
                      />
                    </div>
                  </div>

                  <div className="mt-20 flex flex-wrap items-center">
                    <div className="w-full sm:w-1/2 text-center px-6">
                      <div className="relative h-64 flex flex-col max-w-lg break-words bg-gradient-to-l from-sky-500 to-indigo-500  w-full mb-8 shadow-2xl rounded-lg">
                        <h4 className="text-3xl text-white pt-6 font-extrabold">
                          Free estimates!
                        </h4>
                        <div className="mt-6 text-xl px-3 pb-6 font-medium text-white leading-9">
                          Nothing beats free! Contact us by phone,
                          email, or{" "}
                          <span className=" font-extrabold text-cyan-300 hover:text-cyan-400">
                            {" "}
                            <Link href="/contact"> click this link</Link>
                          </span>{" "}
                          and fill out a contact form.
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 p-6 mb-8">
                      <Image
                        src={roll}
                        className="rounded-lg"
                        alt="paint roll"
                        width={576}
                        height={384}
                      />
                    </div>
                  </div>
                </div>

                <div className="max-w-screen-lg  mx-auto px-3 py-12">
                  <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
                    <div className="text-xl text-center font-extrabold">
                      <Link href="/contact">
                        <div className="btn btn-base text-cyan-300 hover:text-cyan-400 text-xl underline font-extrabold btn-primary hover:cursor-pointer">
                          Contact us
                        </div>
                      </Link>
                      <p>For Your Free Estimate!</p>
                    </div>
                    <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-600 mt-72">
              <div className="max-w-screen-lg mx-auto px-3 py-16">
                <div className="text-center">
                  <span className="text-white inline-flex items-center font-semibold text-xl">
                    <svg
                      className="text-primary-500 stroke-current mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0h24v24H0z" stroke="none"></path>
                      <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                      <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                      <rect x="15" y="4" width="6" height="16" rx="1"></rect>
                      <path d="M4 20h14"></path>
                    </svg>
                    L.A. Quality Painting
                  </span>
                  <div className="mt-8 text-sm">
                    <div className="footer-copyright text-white">
                      © Copyright 2022 L.A. Quality Painting
                      <p className="text-xs">
                        Developed with{" "}
                        <span role="img" aria-label="Love" className="text-md">
                          ♥{" "}
                        </span>
                        by{" "}
                        <Link href="https://marcoagarcia.com">
                          <span className="cursor-pointer text-cyan-200 hover:text-cyan-300">
                            Marco A. Garcia
                          </span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
