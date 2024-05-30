import React from "react";
import Bounded from "./Bounded";
import OffresCard from "./OffresCard";

export default function Offres() {
  return (
    <section>
      <Bounded>
        <h2 className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
          Nos offres
        </h2>
        <div className="grid grid-cols-1 grid-rows-[auto_auto_auto] md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 p-2">

          <OffresCard
            color="blue"
            title="Site Vitrine" 
            subtitle="Idéal pour présenter votre activité"
            description="Conception personnalisée, stratégie référencement, optimisé pour tout support, jusqu'à 5 pages (Accueil, À propos, Services, Contact, Blog), formulaire de contact, maintenance, etc." 
            imageSrc="/offres/site-vitrine.webp"
            linkHref="/offres"
            imgAlt="image d'un site web sur un écran d'ordinateur"
          />
          <OffresCard
            color="yellow"
            title="Site E-Commerce"
            subtitle="Parfait pour vendre des produits ou services"
            description="Conception personnalisée, stratégie référencement, optimisé pour tout support, catalogue de produits, gestion commande et stock, compte client, paiement sécurisé, etc."
            imageSrc="/offres/site-e-commerce.webp"
            linkHref="/offres"
            imgAlt="image d'un site e-commerce sur un écran d'ordinateur"
          />
          <OffresCard
            color="green"
            title="Site sur-Mesure"
            subtitle="Conçu pour vous accompagner"
            description="Selon vos envies, réparation et maintenance, refaire une stratégie de référencement, analyse de performance, création de blog personnel, etc."
            imageSrc="/offres/sur-mesure.webp"
            linkHref="/offres"
            imgAlt="image d'un site web sur un écran d'ordinateur portable"

          />
        </div>
      </Bounded>
    </section>
  );
}
