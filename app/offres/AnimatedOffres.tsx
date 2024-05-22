"use client"
import React, { useRef } from 'react';
import OffrePageCard from "./OffrePageCard";
import Plus from "../components/Plus";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



export default function AnimatedOffres() {
  const offres = [
    {
      title: 'Site Vitrine',
      description: 'Site web destiné à présenter votre entreprise, vos services ou vos produits sans fonctionnalités de vente en ligne. Il sert de carte de visite numérique pour améliorer votre présence en ligne.',
      inclus: [
        'Nombre de pages : Jusqu\'à 5 pages (Accueil, À propos, Services, Contact, Blog).',
        'Formulaire de contact : Mise en place d’un formulaire pour faciliter les échanges avec vos clients.',
        'Intégration de réseaux sociaux : Liens vers vos comptes sociaux pour augmenter votre visibilité.',
      ],
      avantages: [
        'Améliore votre présence en ligne.',
        'Présente vos services de manière claire et professionnelle.',
        'Facile à mettre à jour et à maintenir.'
      ],
      price: 1200,
      aidPrice: 0,
      imgSrc: '/offres/site-vitrine-page.jpg',
      bgColor: 'bg-blue-500/30',
    },
    {
      title: 'Site E-commerce',
      description: 'Un site e-commerce est conçu pour la vente en ligne de produits ou services. Il comprend toutes les fonctionnalités nécessaires pour gérer une boutique en ligne.',
      inclus: [
        'Catalogue de produits : Gestion d’un nombre illimité de produits avec catégories et filtres.',
        'Paiement sécurisé : Intégration de solutions de paiement (PayPal, Stripe, etc.).',
        'Gestion des commandes : Système complet pour la gestion des commandes et des stocks.',
        'Formulaire de contact et support : Intégration de formulaires pour le contact client et support après-vente.',
        // 'Rapports et analyses : Outils de reporting pour suivre les performances de votre boutique.'
      ],
      avantages: [
        'Augmente vos ventes en ligne.',
        'Simplifie la gestion de vos produits et commandes.',
        'Améliore l’expérience d’achat de vos clients.'
      ],
      price: 3200,
      aidPrice: 0,
      imgSrc: '/offres/offre-e-commerce.jpg',
      bgColor: 'bg-green-500/30',
    },
    {
      title: 'Sur-Mesure',
      description: 'Cette offre sur-mesure est destinée à répondre à des besoins spécifiques en matière de développement web, optimisation SEO, ou tout autre service personnalisé. Elle est idéale pour ceux qui ont déjà un site web mais qui nécessitent des améliorations ou des services complémentaires.',
      inclus: [
        'Réparation et maintenance : Correction de bugs, mises à jour de sécurité, amélioration des performances.',
        'Refonte de site : Modernisation du design existant, amélioration de l’expérience utilisateur.',
        'Développement de fonctionnalités spécifiques : Ajout de nouvelles fonctionnalités sur mesure en fonction de vos besoins.',
        'Analyse de performance : Audit complet de la performance du site avec recommandations pour les améliorations.',
        // 'Support et formation : Formation à l’utilisation de votre site et support technique continu.'
      ],
      avantages: [
        'Solutions personnalisées adaptées à vos besoins spécifiques.',
        'Améliore la performance et la visibilité de votre site existant.',
        'Maintient votre site à jour avec les dernières technologies et pratiques SEO.'
      ],
      price: 800,
      aidPrice: 0,
      imgSrc: '/offres/sur-mesure-page.jpg',
      bgColor: 'bg-yellow-500/30',
    },
  ];

  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {

  const tl = gsap.timeline({defaults:{ease:"power2.inOut"}})

  tl.fromTo(".offre__heading",
        {scale:0.5},
        {scale:1, opacity:1, duration: 1.4 });

        tl.fromTo(".offre__card",
        {y:100},
        {y:0, opacity:1, duration: 1.3 }, "-=0.8");
  

}, { scope: container });

  return (
     <>
   <div className='flex flex-col items-center' ref={container}>
         <h1 className="offre__heading opacity-0 text-balance text-center text-5xl font-medium md:text-7xl pt-10" style={{ lineHeight: '1.25' }}>
        Toutes nos <span className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">offres</span> spécialement pour vous
      </h1>

      {offres.map((offre, index) => (
        <OffrePageCard
          key={index}
          title={offre.title}
          description={offre.description}
          inclus={offre.inclus}
          avantages={offre.avantages}
          price={offre.price}
          aidPrice={offre.aidPrice}
          imgSrc={offre.imgSrc}
          bgColor={offre.bgColor}
        />
      ))}
      <Plus />
      </div>
     </>

  );
}
