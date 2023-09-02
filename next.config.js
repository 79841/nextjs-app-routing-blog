/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["envri.eu", "cdn3.vectorstock.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
