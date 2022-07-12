import Link from "next/link";
import Layout from "../components/layout";
import Yugecard from "../components/yugecard";
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
        <div>
          <Slideshow />
        </div>
      </motion.div>
    </Layout>
  );
}

export default Gallery;

/*<div className="min-h-screen ">
<div className="flex flex-wrap justify-center -mx-4">
  <div className="w-full px-4">
    <div className="text-center mx-auto">
      <Yugecard/>
    </div>
  </div>
</div>

</div>
*/
