import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Nav from '../components/navbar'

export default function Home() {
  return (
      <><title>{siteTitle}</title>
      <main className='bg-slate-900'>
      <header className="text-blue-100 h-14 rounded font-extrabold bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className='text-left pl-3'>
          <span className='align-sub'>
            Serving Huntsville, AL and surrounding area. Call Now! 
            <div className='text-left'>
              <span className='align-top'>
                1+(256) 555-5555 | contact@laqualitypainting.com 
              </span>
            </div>
          </span>
        </div>
      </header>
      <Nav/>

        <div id="__next">
          
          <div className="bg-slate-900 antialiased text-white">
            <div className="rounded bg-gradient-to-r from-sky-500 to-indigo-500">
              <div className="max-w-screen-lg mx-auto px-3 py-6">
                <div className="jsx-4057204961 flex flex-wrap justify-between items-center">
                  <div className="jsx-4057204961">
                    <a className="jsx-4057204961" href="/">
                      <span className="text-blue-100 inline-flex items-center font-semibold text-3xl">
                        <svg className="text-primary-500 stroke-current mr-1" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M0 0h24v24H0z" stroke="none"></path>
                          <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                          <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                          <rect x="15" y="4" width="6" height="16" rx="1"></rect>
                          <path d="M4 20h14"></path>
                        </svg>
                      L.A. Quality painting
                      </span>
                    </a>
                  </div>
               </div>
              </div>
              <div className="max-w-screen-lg mx-auto px-3 pt-20 pb-32">
                <header className="text-center">
                  <h1 className="text-5xl text-white font-bold whitespace-pre-line leading-hero">
                    The new kid on the block
                    <br/>
                    <span className="text-gray-900">L.A. Quality Painting</span>
                  </h1>
                  <div className="text-2xl text-blue-100 mt-4 mb-16">If it's not L.A. Quality, it's not quality!</div>
                </header>
              </div>
            </div>

            <div className="max-w-screen-lg mx-auto px-3 py-16">
              <div className="mb-12 text-center">
                <h2 className="text-4xl text-white font-bold">Your title here</h2>
                <div className="mt-4 text-xl md:px-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.</div>
              </div>
              <div className="mt-20 flex flex-wrap items-center">
                <div className="w-full sm:w-1/2 text-center sm:px-6">
                  <h3 className="text-3xl text-gray-900 font-semibold">Friendly Workers</h3>
                  <div className="mt-6 text-xl leading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</div>
                </div>
                <div className="w-full sm:w-1/2 p-6">
                  <img src="/demo/nextjs-landing-page/assets/images/feature.svg" alt="First feature alt text" />
                </div>
              </div>
              <div className="mt-20 flex flex-wrap items-center flex-row-reverse">
                <div className="w-full sm:w-1/2 text-center sm:px-6">
                  <h3 className="text-3xl text-gray-900 font-semibold">Quality Work</h3>
                  <div className="mt-6 text-xl leading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</div>
                </div>
                <div className="w-full sm:w-1/2 p-6">
                  <img src="/demo/nextjs-landing-page/assets/images/feature2.svg" alt="Second feature alt text" />
                </div>
              </div>
              <div className="mt-20 flex flex-wrap items-center">
                <div className="w-full sm:w-1/2 text-center sm:px-6">
                  <h3 className="text-3xl text-gray-900 font-semibold">Free estimates!</h3>
                  <div className="mt-6 text-xl leading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</div>
                </div>
                <div className="w-full sm:w-1/2 p-6">
                  <img src="/demo/nextjs-landing-page/assets/images/feature3.svg" alt="Third feature alt text" />
                </div>
              </div>
            </div>
            <div className="max-w-screen-lg mx-auto px-3 py-16">
              <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
                <div className="text-2xl font-semibold">
                  <div className="text-gray-900">Contact us for </div>
                  <div className="text-primary-500">Your Free Estimate!</div>
                </div>
                <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2">
                  <Link href="/contact">
                    <div className="btn btn-base btn-primary hover:cursor-pointer hover:text-blue-400">Contact us!</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-gray-400">
              <div className="max-w-screen-lg mx-auto px-3 py-16">
                <div className="jsx-541721229 text-center">
                  <span className="text-gray-900 inline-flex items-center font-semibold text-xl">
                    <svg className="text-primary-500 stroke-current mr-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M0 0h24v24H0z" stroke="none"></path>
                      <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                      <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                      <rect x="15" y="4" width="6" height="16" rx="1"></rect>
                      <path d="M4 20h14"></path>
                    </svg>
                    L.A Quality Painting
                  </span>
                 <div className="jsx-541721229 mt-8 flex justify-center">
                    <div className="jsx-386846369 footer-icon-list flex flex-wrap">
                      <a href="/demo/nextjs-landing-page/">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                        </svg>
                      </a>
                      <a href="/demo/nextjs-landing-page/">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"></path>
                        </svg>
                      </a>
                      <a href="/demo/nextjs-landing-page/">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                        </svg>
                      </a>
                      <a href="/demo/nextjs-landing-page/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"></path>
                        </svg>
                      </a>
                      <a href="/demo/nextjs-landing-page/">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                        </svg>
                      </a>
                      <a href="/demo/nextjs-landing-page/">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.585 5.267c1.834 0 3.558.811 4.824 2.08v.004c0-.609.41-1.068.979-1.068h.145c.891 0 1.073.842 1.073 1.109l.005 9.475c-.063.621.64.941 1.029.543 1.521-1.564 3.342-8.038-.946-11.79-3.996-3.497-9.357-2.921-12.209-.955-3.031 2.091-4.971 6.718-3.086 11.064 2.054 4.74 7.931 6.152 11.424 4.744 1.769-.715 2.586 1.676.749 2.457-2.776 1.184-10.502 1.064-14.11-5.188C-.977 13.521-.847 6.093 5.62 2.245 10.567-.698 17.09.117 21.022 4.224c4.111 4.294 3.872 12.334-.139 15.461-1.816 1.42-4.516.037-4.498-2.031l-.019-.678c-1.265 1.256-2.948 1.988-4.782 1.988-3.625 0-6.813-3.189-6.813-6.812 0-3.659 3.189-6.885 6.814-6.885zm4.561 6.623c-.137-2.653-2.106-4.249-4.484-4.249h-.09c-2.745 0-4.268 2.159-4.268 4.61 0 2.747 1.842 4.481 4.256 4.481 2.693 0 4.464-1.973 4.592-4.306l-.006-.536z"></path>
                        </svg>
                      </a>
                      <a href="/demo/nextjs-landing-page/">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415a3.3 3.3 0 013.293 3.295A3.303 3.303 0 013.283 24C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="mt-8 text-sm">
                    <div className=" footer-copyright">
                      © Copyright
                      2021
                      L.A Quality Painting
                      . Powered with
                      <span role="img" aria-label="Love" className="text-xl">♥</span>
                      by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


    </main></>
  )
}
