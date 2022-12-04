import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Link from "next/link";

export default function SimpleGallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="pswp-gallery" id={props.galleryID}>
      <div className="min-h-screen">
        <div className="flex justify-center lg:columns-4 md:flex-row flex-wrap">
          {props.images.map((image, index) => (
            <a
              href={image.largeURL}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              key={props.galleryID + "-" + index}
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded bg-gradient-to-b md:mx-4 mb-8 from-sky-500 to-indigo-600 px-8 py-10">
                <img
                  className="m-auto rounded-lg shadow-md p-auto"
                  src={image.thumbnailURL}
                  alt="project gallery image"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
