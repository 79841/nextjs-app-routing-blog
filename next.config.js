/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "envri.eu",
      "cdn3.vectorstock.com",
      "legacy.reactjs.org",
      "d604h6pkko9r0.cloudfront.net",
    ],
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    mdxRs: true,
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
