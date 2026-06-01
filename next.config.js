const withNx = require("@nx/next/plugins/with-nx");

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = withNx(nextConfig);
