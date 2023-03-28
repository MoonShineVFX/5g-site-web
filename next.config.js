module.exports = {
    env: {
        HOST: '5gkh.kcg.gov.tw',
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
