import { Metadata, MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/pages',
      },
      sitemap: 'https://localhost:3000/sitemap.xml',
}
}
