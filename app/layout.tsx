import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import Footer from "./components/Footer";
import Header from "./components/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://siteweb974.re"),
  keywords: ["Création de sites internet à La Réunion 974", "Développeur web à La Réunion 974", "Site vitrine à La Réunion 974", "Site e-commerce à La Réunion 974", "Design web à La Réunion 974", "Agence web à La Réunion 974", "Création de boutiques en ligne à La Réunion 974", "Créateur site web à la réunion 974", "Stratégies de référencement local à La Réunion", "création web péi", "Optimisation référencement SEO à La Réunion 974", "Refonte de sites web à La Réunion 974"],
  title: {
    default: "Site Web 974 - Création de site internet à la Réunion",
    template: '%s | Site Web 974 - Création de site internet à la Réunion'
  },
  description: "Site Web 974 propose la création de site internet professionnel à l'île de la Réunion",
  openGraph:{
    description: "Site Web 974 propose la création de site internet professionnel à l'île de la Réunion",
    title: "Site Web 974 | Création de site internet à la Réunion",
    type: 'website',
    locale: "fr",
    url: "https://siteweb974.re/",
    siteName:"SiteWeb974",
    images: [{
      url: "https://siteweb974.vercel.app/opengraph-image.jpg",
      width: 1200,
      height: 630,
      alt: "Site Web 974",
    }],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-[#070815] text-white font-sans antialiased",
          fontSans.variable
        )}>
          <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
