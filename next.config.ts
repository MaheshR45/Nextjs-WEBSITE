import type { NextConfig } from "next";
const isExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  trailingSlash: false,
  /* config options here */
  // output: isExport ? "export" : undefined,
  // assetPrefix: isExport ? "/smydata.com/website" : "",
  // basePath: isExport ? "/smydata.com/website" : "",
  output: "export",
  assetPrefix: "",
  basePath: "",
  //  images: {
  //   loader: 'custom',
  //   loaderFile: './custom-loader.ts',
  // },
  // publicRuntimeConfig: {
  //   basePath: isExport ? "/smydata.com/website" : "",
  // },
  // allowedDevOrigins: ['http://localhost:3000', 'http://192.168.0.5', 'http://192.168.0.5:3000'],
};

export default nextConfig;
