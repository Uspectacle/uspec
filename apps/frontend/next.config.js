/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const withNx = require('@nx/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
    output: 'export',
    images: {
      unoptimized: true, // Required for static export
    },
  },
};

module.exports = withNx(nextConfig);
