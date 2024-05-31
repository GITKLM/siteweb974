import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Footer from './components/Footer';
import Header from './components/Header';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  adjustFontFallback: false,
});

 export const metadata: Metadata = {
   title: {
    default: "Site Web 974 | Création de site internet d'excellence",
    template: "%s | Création de site internet d'excellence"
   },
   description: "Experts en sites vitrine, e-commerce, référencement en ligne et réparations web. Votre site professionnel d'exception sur mesure, conçu avec le plus grand soin",
   keywords: ['Création de sites internet à La Réunion 974', 'Développeur web à La Réunion 974', 'Site vitrine à La Réunion 974', 'Site e-commerce à La Réunion 974', 'Design web à La Réunion 974', 'Agence web à La Réunion 974', 'Création de boutiques en ligne à La Réunion 974', 'Créateur site web à la réunion 974', 'Stratégies de référencement local à La Réunion', 'création web péi', 'Optimisation référencement SEO à La Réunion 974', 'Refonte de sites web à La Réunion 974'],
   twitter: {
    card: "summary_large_image"
   },
   openGraph: {
    title: "Site Web 974 | Création de site internet d'excellence",
    description: "Experts en sites vitrine, e-commerce, référencement en ligne et réparations web. Votre site professionnel d'exception sur mesure, conçu avec le plus grand soin",
    url: 'https://siteweb974.re',
    siteName: 'siteweb974',
    images: [
      {
        url: 'https://siteweb974.re/opengraph-image.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://siteweb974.re/opengraph-image.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'siteweb974',
      },
    ],
    locale: 'fr',
    type: 'website',
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={cn("min-h-screen bg-[#070815] text-white font-sans antialiased", fontSans.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
