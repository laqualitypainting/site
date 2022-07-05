import Link from "next/link";
import Nav from "../components/navbar";
import roll from "./img/roll.jpg";
import Image from "next/image";
import brush from "./img/brush.jpg";
import painters from "./img/painters.jpg";

export default function Home() {
  return (
    <>
      <Nav />
        <div className="bg-la-bg-two bg-cover bg-fixed">
          <div className=" text-white">
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
              <div className="max-w-screen-lg mx-auto px-3 pt-20 pb-28">
                <header className="text-center">
                  <h1 className="text-5xl text-white font-bold whitespace-pre-line leading-hero">
                    The new kid on the block
                    <br />
                    <span className="text-gray-900">L.A. Quality Painting</span>
                  </h1>
                  <div className="text-2xl text-blue-100 mt-4 mb-10">
                    If it&apos;s not L.A. Quality, it&apos;s not quality!
                  </div>
                </header>
              </div>
            </div>

            <div className="mx-auto mt-60 py-24">
              <div className="bg-slate-900 mt-64 min-w-fit">
                <div className="grid gap-4 place-content-center">
                  <div className="mt-20 flex flex-wrap items-center">
                    <div className="w-full sm:w-1/2 text-center px-6">
                      <div className="relative flex flex-col max-w-lg break-words bg-gradient-to-l from-sky-500 to-indigo-500 w-full mb-8 mt-8 shadow-2xl rounded-lg">
                        <h3 className="text-3xl pt-6 text-white font-extrabold">
                          Friendly Workers
                        </h3>
                        <div className="mt-6 text-xl px-3 pb-6 font-medium text-white leading-9">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse bibendum, nunc non posuere
                          consectetur, justo erat semper enim, non hendrerit dui
                          odio id enim.
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 p-6 pl-auto ">
                      <Image
                        src={painters} 
                        className="rounded-lg" 
                        alt="painters"
                      />
                    </div>
                  </div>

                  <div className="mt-20 flex flex-wrap items-center flex-row-reverse">
                    <div className="w-full sm:w-1/2 text-center px-6">
                      <div className="relative flex flex-col max-w-lg break-words bg-gradient-to-r from-sky-500 to-indigo-500 w-full mb-8 shadow-2xl rounded-lg">
                        <h3 className="text-3xl pt-6 text-white font-extrabold">
                          Quality Work
                        </h3>
                        <div className="mt-6 text-xl px-3 pb-6 font-medium text-white leading-9">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse bibendum, nunc non posuere
                          consectetur, justo erat semper enim, non hendrerit dui
                          odio id enim.
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 p-6">
                      <Image
                        src={brush} 
                        className="rounded-lg" 
                        alt="paint brush" 
                      />
                    </div>
                  </div>

                  <div className="mt-20 flex flex-wrap items-center">
                    <div className="w-full sm:w-1/2 text-center px-6">
                      <div className="relative flex flex-col max-w-lg break-words bg-gradient-to-l from-sky-500 to-indigo-500  w-full mb-8 shadow-2xl rounded-lg">
                        <h3 className="text-3xl text-white pt-6 font-extrabold">
                          Free estimates!
                        </h3>
                        <div className="mt-6 text-xl px-3 pb-6 font-medium text-white leading-9">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse bibendum, nunc non posuere
                          consectetur, justo erat semper enim, non hendrerit dui
                          odio id enim.
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 p-6 mb-8">
                      <Image 
                        src={roll} 
                        className="rounded-lg" 
                        alt="paint roll"
                      />
                    </div>
                  </div>
                </div>

                <div className="max-w-screen-lg mx-auto px-3 py-12">
                  <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
                    <div className="text-2xl font-semibold">
                       <Link href="/contact">
                        <div className="btn btn-base text-xl underline font-extrabold btn-primary hover:cursor-pointer hover:text-blue-400">
                          Contact us for
                        </div>
                      </Link>
                      <p >
                        Your Free Estimate!
                      </p>
                    </div>
                    <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2">
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-400 mt-72">
              <div className="max-w-screen-lg mx-auto px-3 py-16">
                <div className="text-center">
                  <span className="text-gray-900 inline-flex items-center font-semibold text-xl">
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
                    L.A Quality Painting
                  </span>
                  <div className="mt-8 text-sm">
                    <div className="footer-copyright">
                      © Copyright 2021 L.A Quality Painting . Developed with
                      <span role="img" aria-label="Love" className="text-xl">
                        ♥
                      </span>
                      by{" "}
                      <Link href="https://marcoagarcia.com">
                        Marco A. Garcia
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
