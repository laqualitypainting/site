"use client";

import { GiPaintRoller } from "react-icons/gi";
import { motion, useScroll, useTransform } from "framer-motion";
import Iframe from "react-iframe";

const About = () => {
  const { scrollY } = useScroll();

  // Small, continuous up/down movement tied to scroll
  const y1 = useTransform(scrollY, (value) => Math.sin(value * 0.01) * 10);
  const y2 = useTransform(scrollY, (value) => Math.cos(value * 0.01) * 10);

  return (
    <section
      id="about"
      className="relative z-10 py-24 px-4 sm:px-8 bg-[#161515] text-[#C7AE6A]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="about-heading"
          className="text-4xl sm:text-5xl font-heading font-bold text-center mb-12"
        >
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-8 bg-[#2A2A2A] rounded-2xl shadow-md">
            {/* Static bubble */}
            <div
              className="
                w-20 h-20 mb-6
                rounded-full
                bg-[#111111]
                border border-[#C7AE6A]/30
                flex items-center justify-center
                shadow-md
              "
            >
              {/* Moving roller only */}
              <motion.div style={{ y: y1 }}>
                <GiPaintRoller
                  aria-hidden="true"
                  className="w-10 h-10 text-[#C7AE6A]"
                />
              </motion.div>
            </div>

            <p className="text-lg sm:text-xl leading-relaxed text-[#D5C28F]">
              We provide high-quality residential and commercial painting
              services. From interior touch-ups to full exterior repaints, every
              project is handled with precision and care.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-8 bg-[#2A2A2A] rounded-2xl shadow-md">
            <div
              className="
                w-20 h-20 mb-6
                rounded-full
                bg-[#111111]
                border border-[#C7AE6A]/30
                flex items-center justify-center
                shadow-md
              "
            >
              <motion.div style={{ y: y2 }}>
                <GiPaintRoller
                  aria-hidden="true"
                  className="w-10 h-10 text-[#C7AE6A]"
                />
              </motion.div>
            </div>

            <p className="text-lg sm:text-xl leading-relaxed text-[#D5C28F]">
              With years of experience and a commitment to quality, we focus on
              delivering durable finishes and results you can be proud of.
              Customer satisfaction is always our priority.
            </p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 items-stretch">
          {/* Map Card */}
          <div className="bg-[#2A2A2A] rounded-2xl shadow-md p-4 flex flex-col">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-inner flex-1">
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d419676.73674005625!2d-86.76656444999999!3d34.737337999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8862687a53fd974b%3A0x1b6c6936c1c8de21!2sHuntsville%2C%20AL%2C%20AL!5e0!3m2!1sen!2sus!4v1658282178333!5m2!1sen!2sus"
                width="100%"
                height="100%"
                className="w-full h-full"
                display="block"
                position="relative"
                allowFullScreen
                aria-hidden="false"
              />
            </div>
          </div>

          {/* Text Card */}
          <div className="bg-[#2A2A2A] rounded-2xl shadow-md p-8 flex flex-col h-full">
            <p className="text-lg sm:text-xl leading-relaxed text-[#D5C28F] flex-1">
              Serving Huntsville, Alabama and surrounding areas! We provide
              high-quality painting services for residential and commercial clients.
              Customer satisfaction is our top priority.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
