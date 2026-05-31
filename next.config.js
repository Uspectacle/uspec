const withNx = require('@nx/next/plugins/with-nx');

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  nx: {
    svgr: false,
    output: 'export',
  },
};

module.exports = withNx(nextConfig);
