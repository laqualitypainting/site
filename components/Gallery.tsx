import Image from "next/image";
import { slides } from "@/constants/slides";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "./NextJsImage";
import { Zoom } from "yet-another-react-lightbox/plugins";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section
      id="gallery"
      className="relative z-10 bg-[#2A2A2A] py-24 px-4 sm:px-8 text-[#C7AE6A]"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="gallery-heading"
          className="text-4xl sm:text-5xl font-heading font-bold text-center mb-12"
        >
          Our Work
        </h2>

        <ul
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          role="list"
        >
          {slides.map((slide, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                aria-label={`View larger image: ${slide.alt ?? `Project ${i + 1}`}`}
                className="
                  group relative w-full aspect-[4/3]
                  overflow-hidden rounded-2xl
                  bg-[#111111]
                  shadow-md
                  transition
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#2A2A2A]
                  focus-visible:ring-[#C7AE6A]
                  hover:shadow-lg
                  hover:-translate-y-0.5
                "
              >
                <Image
                  src={slide.src}
                  alt={slide.alt ?? `Painting project ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Subtle gold overlay on hover */}
                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    bg-[#C7AE6A]/10
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                  "
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        render={{ slide: NextJsImage }}
        plugins={[Zoom]}
        />
    </section>
  );
};

export default Gallery;
