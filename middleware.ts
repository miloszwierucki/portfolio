import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  // matcher: ["/", "/(en|pl)/:path*"],
  matcher: ["/((?!admin|_next|_vercel|.*\\..*).*)"],
};
