import {
  Architects_Daughter,
  Inter,
  Plus_Jakarta_Sans,
} from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const architects_daughter = Architects_Daughter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

export const satoshi = localFont({
  src: "../fonts/SatoshiVF.ttf",
  variable: "--font-satoshi-sans",
});
