/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: 'tier6.simcolgroup.com' }],
        destination: '/tier6',
      },
    ];
  },
};

module.exports = nextConfig;
