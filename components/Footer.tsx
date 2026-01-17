import React from "react";
import { motion, useAnimation, MotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const year = new Date().getFullYear();
  const name = "LA Quality Painting";

  // Don't trigger once — animate every time footer scrolls into view
  const [ref, inView] = useInView({ threshold: 0.1 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // reset when out of view
    }
  }, [inView, controls]);

  const containerVariants: MotionProps["variants"] = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: MotionProps["variants"] = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const links = ["#home", "#services", "#about", "#gallery", "#contact"];

  return (
    <footer ref={ref} className="bg-[#111111] text-[#C7AE6A] pb-6 pt-8 z-10 w-full">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col justify-center items-center space-y-4 px-6"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Navigation Links */}
        <div className="flex space-x-6">
          {links.map((href) => (
            <motion.a
              key={href}
              href={href}
              className="hover:text-[#D5C28F] transition"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <motion.p
          className="text-center text-sm sm:text-base"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          &copy; {year} {name}. All Rights Reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
