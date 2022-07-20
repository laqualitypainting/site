import Link from "next/link";
import Iframe from "react-iframe";

export default function Yugecard() {
  return (
    <div className="min-h-screen  p-10">
      <div className="space-y-10 -mx-12 md:space-y-0 md:grid ">
        <div className="w-full my-12 bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen rounded-lg shadow-2xl">
          <h2 className="text-white pt-16 text-2xl md:text-4xl px-4 lg:text-6xl font-bold mb-2">
            About Us
          </h2>
          <ol className="space-y-8 lg:space-y-24 text-2xl md:space-y-20 lg:pt-22 px-8 lg:px-16 pt-12 md:pt-20 list-decimal list-inside text-center text-white ">
            <p className="">
              L.A. Quality painting is a family owned and operated business
              located in Huntsville, Alabama. With over 20 years of experience,
              Eddie, the patriarch of the family, is still passionate about his
              work.
            </p>
            <p className="pb-4">
              Services offered include interior/exterior painting, kitchen cabinet refurnish,
              drywall hanging/finish, foundation repairs, flooring, tile, popcorn ceiling removal,
              and many more! If you need a job done chances are we can do it!{" "}
              <span className="underline">
                <Link href="/contact">Contact us</Link>
              </span>{" "}
              now to inquire about a service.
            </p>
          </ol>
          <div className="pb-5 flex overflow-auto pt-8 justify-center">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d419676.73674005625!2d-86.76656444999999!3d34.737337999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8862687a53fd974b%3A0x1b6c6936c1c8de21!2sHuntsville%2C%20AL%2C%20AL!5e0!3m2!1sen!2sus!4v1658282178333!5m2!1sen!2sus"
              width="600"
              height="450"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
       </div>
      </div>
    </div>
  );
}