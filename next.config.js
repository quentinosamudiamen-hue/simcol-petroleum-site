/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // www -> non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.simcolgroup.com" }],
        destination: "https://simcolgroup.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;