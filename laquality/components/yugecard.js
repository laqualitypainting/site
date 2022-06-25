
export default function Yugecard() {
return(
<div className="min-h-screen p-10">
          <div className="space-y-10 md:space-y-0 md:grid ">
            <div className="w-full my-32 bg-gradient-to-b from-purple-600 to-indigo-700  h-screen rounded-lg shadow-2xl">
              <h2 className="text-white pt-16 text-2xl md:text-4xl px-4 lg:text-6xl font-bold mb-2">
                Website is currently under development
              </h2>
              <ol className="space-y-8 lg:space-y-24 text-2xl md:space-y-20 lg:pt-22 px-8 lg:px-16 pt-12 md:pt-20 list-decimal list-inside text-center text-white ">
                <li className="lg:text-5xl  md:text-4xl leading-loose font-extralight">
                  Date development began 6/11/2022
                  </li>
                <li className="leading-loose lg:text-5xl md:text-4xl font-extralight">
                  Expected finish date 6/18/2022
                </li>
                <li className="leading-loose lg:text-5xl md:text-4xl font-extralight">
                  Come back after 6/18/2022 for a more complete product
                </li>
              </ol>
            </div>
          </div> 
          </div>
);
}