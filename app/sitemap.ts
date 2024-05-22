import { MetadataRoute } from "next";


export default async function sitemap():Promise<MetadataRoute.Sitemap> {

    return [
        {
            url: "https://siteweb974.vercel.app/",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: "https://siteweb974.vercel.app/offres",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: "https://siteweb974.vercel.app/realisations",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: "https://siteweb974.vercel.app/apropos",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: "https://siteweb974.vercel.app/contact",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ]
}

