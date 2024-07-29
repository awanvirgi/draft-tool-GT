/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:'66a24114967c89168f1f5e75.mockapi.io'
            },
            {
                hostname:'static.wikia.nocookie.net'
            },
            {
                hostname:'ezio.sakurani.my.id'
            }
        ]
    },
    reactStrictMode: false
};

export default nextConfig;
