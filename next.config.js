module.exports = {
    env: {
        HOST: (process.env.API_URL === undefined) ? 'https://5gkh.kcg.gov.tw' : process.env.API_URL,
    },
    i18n: {
        locales: ['zh-Hant-TW'],
        defaultLocale: 'zh-Hant-TW'
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
            }
        ]
    },
    publicRuntimeConfig: {
        MAINTENANCE_MODE: process.env.MAINTENANCE_MODE === 'true',
    },
}
