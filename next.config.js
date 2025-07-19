/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/resume',
        destination: '/resume.html',
      },
    ]
  },
}

module.exports = nextConfig
