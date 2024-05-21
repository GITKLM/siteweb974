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
        <div className="grid grid-cols-1 grid-rows-[auto_auto_auto] md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">

          <OffresCard
            color="blue"
            title="Site Vitrine" 
            subtitle="Idéal pour présenter votre activité"
            description="Conception personnalisée, stratégie référencement, optimisé pour tout support, jusqu'à 5 pages (Accueil, À propos, Services, Contact, Blog)" 
            imageSrc="/offres/site-vitrine.png"
            linkHref="/offres"
          />
          <OffresCard
            color="yellow"
            title="Site E-Commerce"
            subtitle="Parfait pour vendre des produits ou services"
            description="Conception personnalisée, stratégie référencement, optimisé pour tout support, catalogue de produits, gestion commande et stock, compte client, paiement sécurisé"
            imageSrc="/offres/site-e-commerce.png"
            linkHref="/offres"
          />
          <OffresCard
            color="green"
            title="Site sur Mesure"
            subtitle="Conçu pour vous accompagner"
            description="Selon vos envies, réparation et maintenance, refaire une stratégie de référencement, analyse de performance, création de blog personnel, etc."
            imageSrc="/offres/sur-mesure.png"
            linkHref="/offres"
          />
        </div>
      </Bounded>
    </section>
  );
}
