module.exports = {
    env: {
        HOST: '5gkh.kcg.gov.tw',
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
