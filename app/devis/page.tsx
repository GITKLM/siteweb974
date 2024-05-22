import { Metadata } from 'next';
import Bounded from '../components/Bounded';
import AnimationDevis from './AnimationDevis';


export const metadata: Metadata = {
  title:"Contact",
  description: "Contactez-nous dès maintenant pour obtenir votre devis au meilleur prix dans les plus brefs délais. Notre équipe est prête à répondre à vos questions et à vous fournir toutes les informations dont vous avez besoin pour vos projets web. N'hésitez pas à nous contacter pour discuter de vos besoins et de la façon dont nous pouvons vous aider à atteindre vos objectifs en ligne."
}


export default function Page() {
  const contactInfo = [
    {
      title: "Nous contacter",
      items: ["mail", "tel"]
    },
    {
      title: "Adresse",
      items: ["36 rue de l'abattoir", "97400 Saint-Denis"]
    },
    {
      title: "Réseaux",
      items: ["Instagram", "Facebook", "Twitter"]
    }
  ];

  return (
    <Bounded>
<AnimationDevis />
    </Bounded>
  );
}
