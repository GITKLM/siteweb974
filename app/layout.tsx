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

// export const metadata: Metadata = {
//   title: 'Site Web 974 - Création de site internet à la Réunion',
//   description: 'Site Web 974 propose la création de site internet professionnel à l\'île de la Réunion',
//   keywords: ['Création de sites internet à La Réunion 974', 'Développeur web à La Réunion 974', 'Site vitrine à La Réunion 974', 'Site e-commerce à La Réunion 974', 'Design web à La Réunion 974', 'Agence web à La Réunion 974', 'Création de boutiques en ligne à La Réunion 974', 'Créateur site web à la réunion 974', 'Stratégies de référencement local à La Réunion', 'création web péi', 'Optimisation référencement SEO à La Réunion 974', 'Refonte de sites web à La Réunion 974'],
//   openGraph: {
//     title: 'Site Web 974 | Création de site internet à la Réunion',
//     description: 'Site Web 974 propose la création de site internet professionnel à l\'île de la Réunion',
//     url: 'https://siteweb974.re/',
//     type: 'website',
//     locale: 'fr',
//     siteName: 'SiteWeb974',
//     images: ['/opengraph-image.jpg'],
//   },
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="keywords" content="Création de sites internet à La Réunion 974, Développeur web à La Réunion 974, Site vitrine à La Réunion 974, Site e-commerce à La Réunion 974, Design web à La Réunion 974, Agence web à La Réunion 974, Création de boutiques en ligne à La Réunion 974, Créateur site web à la réunion 974, Stratégies de référencement local à La Réunion, création web péi, Optimisation référencement SEO à La Réunion 974, Refonte de sites web à La Réunion 974" />
        <meta property="og:title" content="Site Web 974 | Création de site internet d'excellence" />
        <meta property="og:description" content="Experts en création de site internet, référencement en ligne et réparations. Votre site professionnel d'exception sur mesure, conçu avec le plus grand soin." />
        <meta property="og:url" content="https://siteweb974.re/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr" />
        <meta property="og:site_name" content="SiteWeb974" />
        <meta property="og:image" content="/opengraph-image.jpg" />
        <title>Site Web 974 - Création de site internet d&apos;excellence</title>
      </head>
      <body className={cn("min-h-screen bg-[#070815] text-white font-sans antialiased", fontSans.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
