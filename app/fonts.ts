import localFont from "next/font/local";
import {
  Inter,
  Architects_Daughter,
  Plus_Jakarta_Sans,
} from "next/font/google";

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

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const architects_daughter = Architects_Daughter({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });
