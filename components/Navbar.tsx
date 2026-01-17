"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Variants, motion, AnimatePresence } from "framer-motion";
import { FaPaintRoller } from "react-icons/fa6";
import NavHeader from "./NavHeader";
import { useScroll } from "framer-motion";


const LINKS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const siteTitle = "L.A. Quality Painting";
  const { scrollY } = useScroll();
  const HEADER_HEIGHT = 48; // px
  const lastScrollY = useRef(0);

  // Animation variants for paint roller vertical motion
  const paintRollerVariants: Variants = {
    hidden: { opacity: 0, y: -20, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
      },
    }),
  };

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at very top
      if (currentScrollY <= 0) {
        setShowHeader(true);
      }
      // Scrolling up → show header
      else if (currentScrollY < lastScrollY.current) {
        setShowHeader(true);
      }
      // Scrolling down → hide header
      else {
        setShowHeader(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <NavHeader isVisible={showHeader} />
      <motion.nav
        className="fixed w-full z-50 bg-[#0d0d0d]/90 backdrop-blur-md transition-all duration-300"
        style={{ top: showHeader ? 48 : 0 }}
        animate={{
          top: showHeader ? HEADER_HEIGHT : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex no-underline items-center space-x-2 text-xl  font-bold focus:outline-none focus-visible:ring focus-visible:ring-primary rounded"
            >
              <Image
                aria-label="Paint bucket icon"
                alt="Paint bucket icon"
                src="/paint_icon.png"
                width={58}
                height={58}
                priority />
              <span className="font-accent text-[#C7AE6A] no-underline">{siteTitle}</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6 font-heading text-[#C7AE6A]">
              {LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#D5C28F] focus:outline-none focus-visible:ring focus-visible:ring-[#C7AE6A] rounded no-underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                className="relative z-50 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus-visible:ring focus-visible:ring-[#C7AE6A]"
              >
                <motion.div animate={isOpen ? "open" : "closed"} className="relative w-6 h-6">
                  {/* Hamburger Lines */}
                  <motion.span
                    className="absolute block h-0.5 w-6 bg-[#2A2A2A] transform origin-center"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 6 },
                    }} />
                  <motion.span
                    className="absolute block h-0.5 w-6 bg-[#2A2A2A] transform origin-center"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }} />
                  <motion.span
                    className="absolute block h-0.5 w-6 bg-[#2A2A2A] transform origin-center"
                    variants={{
                      closed: { rotate: 0, y: 12 },
                      open: { rotate: -45, y: 6 },
                    }} />
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-16 right-4 w-64 bg-[#111111] rounded-lg shadow-lg p-4 z-40"
            >
              <div className="flex flex-col space-y-4 font-body text-[#C7AE6A]">
                {LINKS.map((link, index) => (
                  <motion.div
                    key={link.name}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={paintRollerVariants}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-[#C7AE6A]/10 focus:outline-none focus-visible:ring focus-visible:ring-[#C7AE6A]"
                    >
                      {/* Paint Roller moves up and down */}
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "mirror" as const,
                          duration: 1 + index * 0.1,
                          ease: "easeInOut" as const,
                        }}
                        className="relative"
                      >
                        <FaPaintRoller className="h-8 w-8 text-[#C7AE6A]" />
                      </motion.div>

                      <span className="font-body">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
