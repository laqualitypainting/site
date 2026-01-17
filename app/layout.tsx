import type { Metadata } from "next";
import { Libre_Franklin, Slabo_13px, Maitree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "yet-another-react-lightbox/styles.css";

// Body font (Maitree for readability)
const bodyFont = Maitree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"], // normal + bold
});

// Heading font (Libre Franklin for strong headings)
const headingFont = Libre_Franklin({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"], // normal + bold
});

// Accent font (Slabo 13px for captions / small text)
const accentFont = Slabo_13px({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "L.A. Quality Painting",
  description: "Huntsville Alabama painter",
  icons: {
    icon: 'paint_icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`
          ${bodyFont.variable} 
          ${headingFont.variable} 
          ${accentFont.variable} 
          antialiased
          bg-[#111111]      /* Dark background */
          text-[#000000]    /* Strong text */
          selection:bg-[#C7AE6A] selection:text-[#111111] /* Accessible text selection */
        `}
      >
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-[#C7AE6A] focus:text-[#111111] p-2 rounded"
        >
          Skip to main content
        </a>

        <Navbar />

        {/* Main content landmark for accessibility */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
