import { Metadata, MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/pages',
      },
      sitemap: 'https://siteweb974.re/sitemap.xml',
}
}
