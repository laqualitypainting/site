// Import Google fonts
import { Libre_Franklin, Slabo_13px, Maitree } from "next/font/google";

// Body font (serif, clean for paragraphs)
const bodyFont = Slabo_13px({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400"], // normal
});

// Heading font (sans-serif, strong contrast)
const headingFont = Libre_Franklin({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // light, medium, bold
});

// Accent font (decorative, for special highlights)
const accentFont = Maitree({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "700"], // normal + bold
});

export { bodyFont, headingFont, accentFont };
