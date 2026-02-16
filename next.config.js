/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Block legacy Joomla/K2 URLs → homepage
      {
        source: '/',
        has: [{ type: 'query', key: 'option', value: 'com_k2' }],
        destination: '/',
        permanent: true,
      },
      // Strip junk query params ?op, ?vi, ?ta
      {
        source: '/',
        has: [{ type: 'query', key: 'op' }],
        destination: '/',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'vi' }],
        destination: '/',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'ta' }],
        destination: '/',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;