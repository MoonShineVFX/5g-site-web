module.exports = {
    env: {
        HOST: '5gkh.kcg.gov.tw',
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000',
                    }
                ],
            },
        ]
    },
    async redirects() {
        return [
            {
                source: '/index',
                destination: '/',
                permanent: false,
            },
        ]
    },
}
