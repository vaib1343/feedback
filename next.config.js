/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/feedbacks',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
