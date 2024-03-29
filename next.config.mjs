/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GEMINI_API: process.env.GEMINI_API,
    }
};

export default nextConfig;
