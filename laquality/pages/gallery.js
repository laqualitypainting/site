import Layout from "../components/layout";
import React from "react";
import Slideshow from "../components/slideshow";
import { motion } from "framer-motion";

function Gallery() {
  return (
    <Layout>
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
              delay: 0.3,
            },
          },
        }}
      >
        <div className="pt-20">
          <Slideshow />
        </div>
      </motion.div>
    </Layout>
  );
}

export default Gallery;