import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"], // add this
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.tina.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.giphy.com",
        port: "",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
