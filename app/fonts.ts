import {
  Architects_Daughter,
  Inter,
  Noto_Sans,
  Noto_Sans_Mono,
  Plus_Jakarta_Sans,
  // Shippori_Mincho_B1,
  Sawarabi_Mincho,
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

export const noto_sans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const noto_sans_mono = Noto_Sans_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-mono",
});

// export const shippori_mincho = Shippori_Mincho_B1({
//   weight: ["400", "500", "600"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-shippori-mincho",
// });

export const sawarabi_mincho = Sawarabi_Mincho({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sawarabi-mincho",
});

export const satoshi = localFont({
  src: "../fonts/SatoshiVF.ttf",
  variable: "--font-satoshi-sans",
});
