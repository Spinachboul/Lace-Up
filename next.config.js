/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com', 'fastly.picsum.photos', 'randomuser.me', 'upload.wikimedia.org', 'en.wikipedia.org'],
  },
}

module.exports = nextConfig
