import { motion } from "framer-motion";
import { GiLargePaintBrush } from "react-icons/gi";

export default function Hero() {
  return (
    <section
  id="home"
  className="
    relative
    bg-[#2A2A2A]
    text-[#C7AE6A]
    pt-[112px]
    md:pt-[128px]
    pb-24
    md:pb-32
  "
>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative">

        {/* Text */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">
            Transforming Spaces<br />With Precision Painting
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#D5C28F] max-w-xl">
            Professional residential and commercial painting services delivering
            clean finishes, lasting results, and exceptional attention to detail.
          </p>

          {/* CTA */}
          <div className="mt-8 text-[#111111]">
            <a
              href="#contact"
              className="
                inline-block
                rounded-xl
                bg-[#C7AE6A]
                px-6 py-3
                font-semibold
                text-[#111111]
                transition
                hover:opacity-90
              "
            >
              <span className="text-[#111111]">Schedule Free Estimate</span>
            </a>
          </div>
        </div>

        {/* Decorative Icon */}
        <div className="hidden md:block relative">
          <motion.div
            aria-hidden="true"
            className="absolute right-0 md:right-28 top-1/2 -translate-y-1/2 text-[#C7AE6A]/50 scale-x-[-1]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ rotate: -10 }}
          >
            <GiLargePaintBrush className="w-40 h-40 md:w-60 md:h-60" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
