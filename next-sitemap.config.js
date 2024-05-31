/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://siteweb974.re/',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            }
        ]
    }
}