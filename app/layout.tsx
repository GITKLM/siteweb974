import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import Footer from "./components/Footer";
import Header from "./components/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Site Web 974 - Création de site internet à la Réunion",
    template: '%s | Site Web 974 - Création de site internet à la Réunion'
  },
  description: "Site Web 974 propose la création de site internet professionnel à l'île de la Réunion",
  openGraph:{
    title: "Site Web 974 | Création de site internet à la Réunion",
    description: "Site Web 974 propose la création de site internet professionnel à l'île de la Réunion",
    type: "website",
    locale: "fr",
    //stored in env: 
    url: "https://siteweb974.vercel.app/",
    siteName:"SiteWeb974"
  }
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
