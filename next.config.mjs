/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "headlesscmsblogmcstinna.local",
        pathname: "/**"
      },
    ],
  },
};

export default nextConfig;
