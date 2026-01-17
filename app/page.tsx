"use client";
import React from "react";
import Image from "next/image";

import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

const Home: React.FC = () => {

  return (
    <>
      <main className="relative">

        {/* Fixed background image for entire site */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/images/bg.webp"
            alt="city image"
            fill
            priority
            className="object-cover w-full h-full opacity-30"
          />
        </div>

        {/* Hero Section */}
        <Hero />

        {/* Responsive gap to reveal background image */}
        <div className="w-full h-[20vh]"></div>

        {/* Services Section */}
        <Services />

        {/* Responsive gap to reveal background image */}
        <div className="w-full h-[12vh]"></div>

        {/* Gallery Section */}
        <Gallery />

        {/* Responsive gap to reveal background image */}
        <div className="w-full h-[12vh]"></div>

        {/* About Section */}
        <About />


        {/* Responsive gap to reveal background image */}
        <div className="w-full h-[12vh]"></div>

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />

      </main>
    </>
  );
};

export default Home;
