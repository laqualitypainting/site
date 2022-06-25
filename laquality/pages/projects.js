import Link from "next/link";
import Layout from "../components/layout";

function Projects() {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <h2 className="dark:text-white mt-12 font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                Projects
              </h2>
              <p className="dark:text-white pt-4 text-body-color text-lg">
                working on.
              </p>
              <p className="dark:text-white pt-4 text-body-color text-xs">
                *Individual project pages are currently in development
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
           <div className="rounded bg-gradient-to-b from-purple-600 to-indigo-700 py-3 px-3 w-full">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                  alt="image"
                  className="w-full"
                />
              </div>
              <div>
                <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-green-400 mb-5">
                  Hosted
                </span>
                <h3>
                  <a
                    href="https://wildcat.plus/"
                    className="text-white dark:hover:text-blue-400 hover:text-blue-400 font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                    Wildcat.plus
                  </a>
                </h3>
                <p className="text-white text-lg">
                  A web app that allows you to build workouts! This was my
                  senior capstone that I plan on converting into a Web3 site in
                  the future. It will be a gated site.
                </p>
              </div>
            </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
           <div className="rounded bg-gradient-to-b from-purple-600 to-indigo-700 py-3 px-3 w-full">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                  alt="image"
                  className="w-full"
                />
              </div>
              <div>
                <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-red-400 mb-5">
                  Offline
                </span>
                <h3>
                  <Link
                    href="/"
                    className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-white hover:cursor-not-allowed"
                  >
                    Runforhealth5K.org
                  </Link>
                </h3>
                <p className="text-white text-lg">
                  This website was created for a virtual 5K when the pandemic
                  had just begun. The client was a non-profit health clinic and
                  development was done free of charge.
                </p>
              </div>
            </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
           <div className="rounded bg-gradient-to-b from-purple-600 to-indigo-700 py-3 px-3 w-full">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                  alt="image"
                  className="w-full"
                />
              </div>
              <div>
                <span
                  className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-blue-400 mb-5">
                  Android mobile app
                </span>
                <h3>
                  <Link href="/" className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-white hover:cursor-not-allowed">
                    WildcatFridge+
                  </Link>
                </h3>
                <p className="text-lg text-white">
                  This app has other features like a brewery finder and favorites page.
                </p>
              </div>
            </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Projects;
