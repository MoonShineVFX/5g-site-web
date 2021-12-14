const REPLACE_PATHS = {
    news: ['page=1&cate=news', 'page=1&cate=newsIndustry'],
    policy: ['page=1&cate=center', 'page=1&cate=local'],
    place: ['type=5g', 'type=tech'],
    partner: ['page=1&tag=all']
}


module.exports = {
    siteUrl: process.env.HOST || 'https://5gkh.kcg.gov.tw',
    generateRobotsTxt: true,
    transform: async (config, path) => {
        const replacePaths = Object.keys(REPLACE_PATHS).map(key => '/' + key);
        if (replacePaths.includes(path)) {
            console.log(`Bypass path: ${path} (replaced)`);
            return null;
        }

        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    },
    additionalPaths: async (config) => {
        const result = []
        for (let key of Object.keys(REPLACE_PATHS)) {
            for (let param of REPLACE_PATHS[key]) {
                const escapedParam = param.replace('&', '&amp;');
                result.push(await config.transform(config, `/${key}?${escapedParam}`));
            }
        }
        return result;
    }
}
