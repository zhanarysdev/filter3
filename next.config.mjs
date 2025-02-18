/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(mp4)$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/chunks/[path][name].[hash][ext]'
            },
        })
        return config
    },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1lx8joixr0z6q.cloudfront.net',
        port: '',
        pathname: '/uploads/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
