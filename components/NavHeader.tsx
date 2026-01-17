"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavHeaderProps {
    isVisible: boolean;
}

const NavHeader = ({ isVisible }: NavHeaderProps) => {
    const HEADER_HEIGHT = 48;

    return (

        <motion.header
            role="region"
            aria-label="Contact information banner"
            initial={false}
            animate={{
                height: isVisible ? HEADER_HEIGHT : 0,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full overflow-hidden bg-[#ddc685] text-black font-body z-[60]"
        >
            <div className="max-w-7xl mx-auto h-12 px-6 flex items-center justify-between text-sm">
                <p className="hidden sm:block font-bold text-black">
                    Serving Huntsville, AL & surrounding areas
                </p>

                <div className="flex items-center gap-4">
                    <Link
                        href="tel:+12569451312"
                        className="focus:outline-none focus-visible:ring focus-visible:ring-black rounded"
                    >
                        <span className="text-black font-bold">(256) 945-1312</span>
                    </Link>

                    <span aria-hidden="true">|</span>

                    <Link
                        href="mailto:contact@laqualitypainting.com"
                        className="focus:outline-none focus-visible:ring focus-visible:ring-black rounded"
                    >
                        <span className="text-black font-bold">contact@laqualitypainting.com</span>
                    </Link>
                </div>
            </div>
        </motion.header >
    );
};

export default NavHeader;
