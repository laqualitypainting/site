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
          {props.images.map((image, index) => (
            <a
              href={image.largeURL}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              key={props.galleryID + "-" + index}
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded mx-4 bg-gradient-to-b from-sky-500 to-indigo-600 md:px-0 py-10">
                <div className="md:grid-cols-4 gap-y-8 grid-flow-row">
                  <img
                    className="m-auto rounded-lg shadow-md p-auto"
                    src={image.thumbnailURL}
                    alt="project gallery image"
                  />
                </div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}
