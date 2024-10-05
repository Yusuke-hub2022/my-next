/** @type {import('next').NextConfig} */
const nextConfig = {
  //experimental: {
  //  serverActions: true,  // ver. 14 からはデフォルトなので浮揚
  //},
  images: {
    remotePatterns: [
      {
        hostname: 'books.google.com'
      },
    ]
  },
};

export default nextConfig;
