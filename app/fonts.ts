import { Inter, Architects_Daughter } from "next/font/google";
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
