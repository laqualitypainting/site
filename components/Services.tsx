import {
  FaHome,
  FaBuilding,
} from "react-icons/fa";

import { GiPaintBucket } from "react-icons/gi";

export default function Services() {
  const services = [
    {
      title: "Residential Painting",
      description:
        "Interior and exterior painting services that protect your home and elevate its appearance. Clean lines, durable finishes, and attention to detail.",
      icon: <FaHome aria-hidden="true" className="w-10 h-10 text-[#C7AE6A]" />,
    },
    {
      title: "Commercial Painting",
      description:
        "Professional painting solutions for offices, retail spaces, and commercial properties with minimal disruption to your business.",
      icon: <FaBuilding aria-hidden="true" className="w-10 h-10 text-[#C7AE6A]" />,
    },
    {
      title: "Interior & Exterior Finishes",
      description:
        "From walls and ceilings to trim and siding, we deliver high-quality finishes built to last in Alabama’s climate.",
      icon: <GiPaintBucket aria-hidden="true" className="w-10 h-10 text-[#C7AE6A]" />,
    },
  ];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative z-10 w-full bg-[#111111] py-24 px-6 mt-12 md:mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-heading font-bold text-[#C7AE6A]"
          >
            Our Services
          </h2>
          <p className="mt-4 text-lg text-[#D5C28F] max-w-2xl mx-auto">
            High-quality painting services for residential and commercial properties.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="
                group
                flex flex-col
                items-center
                text-center
                p-8
                rounded-2xl
                bg-[#2A2A2A]
                shadow-md
                transition
              "
            >
              {/* Icon */}
              <div
                className="
                  mb-6
                  flex
                  items-center
                  justify-center
                  w-20
                  h-20
                  rounded-full
                  bg-[#111111]
                  border
                  border-[#C7AE6A]/30
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#C7AE6A] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#D5C28F] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
