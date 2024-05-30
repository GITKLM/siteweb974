import AnimatedRealisation from "./AnimatedRealisation";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nos Réalisations | Création de site internet d'excellence",
  description: "Découvrez toutes nos réalisations de site web : des sites vitrine, des boutiques en ligne (e-commerce) et des projets sur-mesure."
}




const Page = () => {
  return (
<section>
<AnimatedRealisation />
</section>
  );
};

export default Page;
