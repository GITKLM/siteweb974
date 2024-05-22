import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import Footer from "./components/Footer";
import Header from "./components/Header";

// Définir une interface pour la propriété 'title' dans Metadata
interface Title {
  default: string;
  template: string;
}

// Définir une interface pour la propriété 'openGraph' dans Metadata
interface OpenGraph {
  title: string;
  type: string;
  description: string;
  locale: string;
  url: string;
  images: string;
  siteName: string;
}

// Définir l'interface Metadata avec 'title' et 'openGraph' correctement typés
interface CustomMetadata extends Metadata {
  title: Title;
  openGraph: OpenGraph;
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Utiliser CustomMetadata pour typage de metadata
export const metadata: CustomMetadata = {
  title: {
    default: "Site Web 974 - Création de site internet à la Réunion",
    template: '%s | Site Web 974 - Création de site internet à la Réunion'
  },
  description: "Site Web 974 propose la création de site internet professionnel à l'île de la Réunion",
  openGraph: {
    title: "Site Web 974 | Création de site internet à la Réunion",
    description: "Site Web 974 propose la création de site internet professionnel à l'île de la Réunion",
    locale: "fr",
    type: "website",
    url: "https://siteweb974.vercel.app/",
    images: "opengraph-image.jpg",
    siteName: "SiteWeb974"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Utilisation des propriétés typées dans les balises <meta> et <title> */}
        <meta name="description" content={String(metadata.description) || ''} />
        <meta property="og:title" content={String(metadata.openGraph?.title) || ''} />
        <meta property="og:description" content={String(metadata.openGraph?.description) || ''} />
        <meta property="og:type" content={metadata.openGraph?.type || ''} />
        <meta property="og:locale" content={String(metadata.openGraph?.locale) || ''} />
        <meta property="og:url" content={String(metadata.openGraph?.url) || ''} />
        <meta property="og:image" content={String(metadata.openGraph?.images) || ''} />
        <meta property="og:site_name" content={String(metadata.openGraph?.siteName) || ''} />
        <title>{typeof metadata.title === 'string' ? metadata.title : metadata.title?.default || ''}</title>
      </head>
      <body className={cn(
          "min-h-screen bg-[#070815] text-white font-sans antialiased",
          fontSans.variable
        )}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
