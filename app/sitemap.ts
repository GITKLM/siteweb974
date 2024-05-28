import { MetadataRoute } from "next";


export default async function sitemap():Promise<MetadataRoute.Sitemap> {

    return [
        {
            url: "https://siteweb974.re/",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: "https://siteweb974.re/offres",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: "https://siteweb974.re/realisations",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: "https://siteweb974.re/apropos",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: "https://siteweb974.re/contact",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
    ]
}

