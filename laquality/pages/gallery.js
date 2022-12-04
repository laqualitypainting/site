import Layout from "../components/layout";
import React from "react";
import { motion } from "framer-motion";
import SimpleGallery from "../components/single-card-gall";

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
          <SimpleGallery
            galleryID="my-test-gallery"
            images={[
              {
                largeURL: "/converted/bathroom.webp",
                thumbnailURL: "/converted/bathroomSmall.webp",
                width: 576,
                height: 1024,
              },
              {
                largeURL: "/converted/bathroom2.webp",
                thumbnailURL: "/converted/bathroom2Small.webp",
                width: 720,
                height: 960,
              },
              {
                largeURL: "/converted/cabinets1.webp",
                thumbnailURL: "/converted/cabinets1Small.webp",
                width: 576,
                height: 1024,
              },
              {
                largeURL: "/converted/cabinets2.webp",
                thumbnailURL: "/converted/cabinets2Small.webp",
                width: 786,
                height: 1024,
              },
              {
                largeURL: "/converted/chand.webp",
                thumbnailURL: "/converted/chandSmall.webp",
                width: 720,
                height: 960,
              },
              {
                largeURL: "/converted/floor1.webp",
                thumbnailURL: "/converted/floor1Small.webp",
                width: 576,
                height: 1024,
              },
              {
                largeURL: "/converted/floor2.webp",
                thumbnailURL: "/converted/floor2Small.webp",
                width: 576,
                height: 1024,
              },
              {
                largeURL: "/converted/sink.webp",
                thumbnailURL: "/converted/sinkSmall.webp",
                width: 576,
                height: 1024,
              },
              

              {
                largeURL: "/images/paint1.webp",
                thumbnailURL: "/images/paint1Small.webp",
                width: 576,
                height: 1024,
              },
              {
                largeURL: "/images/paint2.webp",
                thumbnailURL: "/images/paint2Small.webp",
                width: 576,
                height: 1024,
              },
              {
                largeURL: "/images/paint3.webp",
                thumbnailURL: "/images/paint3Small.webp",
                width: 576,
                height: 1024,
              },
              {
                largeURL: "/images/paint5.webp",
                thumbnailURL: "/images/paint5Small.webp",
                width: 576,
                height: 1024,
              },
              {
                largeURL: "/images/paint6.webp",
                thumbnailURL: "/images/paint6Small.webp",
                width: 576,
                height: 1024,
              },
              {
                largeURL: "/images/paint9.webp",
                thumbnailURL: "/images/paint9Small.webp",
                width: 576,
                height: 1024,
              },
              {
                largeURL: "/images/paint10.webp",
                thumbnailURL: "/images/paint10Small.webp",
                width: 576,
                height: 1024,
              },





            ]}
          />
        </div>
      </motion.div>
    </Layout>
  );
}

export default Gallery;
