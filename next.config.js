/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/ads.txt',
        destination: 'https://srv.adstxtmanager.com/19390/threadbomb.com',
        permanent: true, // 301 redirect
      },
    ];
  },
};

module.exports = nextConfig;