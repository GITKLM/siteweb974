import React from 'react';
import Bounded from "../components/Bounded";
import AnimatedOffres from './AnimatedOffres';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Nos Offres",
  description: "Découvrez toutes nos offres de création de site web: sites vitrine, de boutiques en ligne (e-commerce), projets sur-mesure. Nous proposons également des services de réparation de sites, d'optimisation SEO et bien plus encore."
}


export default function Pages() {


  return (
    <Bounded>
      <AnimatedOffres />
    </Bounded>
  );
}
