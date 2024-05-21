import Image from "next/image";
import Bounded from "./Bounded";
import clsx from "clsx";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";



function SectionWithImageAndText({ title, gradientText, imageSrc, altText, text, linkHref, reverseLayout }: { 
  title: string; 
  gradientText: string; 
  imageSrc: string; 
  altText: string; 
  text: string[]; 
  linkHref: string; 
  reverseLayout?: boolean 
}) {

  return (
    <div className="mt-20 grid gap-16">
      <div className={`relative flex flex-col md:flex-row gap-10 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3 ${reverseLayout ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex flex-col justify-center gap-4">
          <h3 className="text-4xl font-bold">
            {title} <span className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">{gradientText}</span>
          </h3>
          <div className="max-w-md">
            {text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <Link href={linkHref} className="after:absolute after:inset-0 hover:underline flex gap-4 items-center">
            En savoir plus
            <RiArrowRightSLine size={22} />
          </Link>
        </div>
        <Image
          className={clsx("rounded-xl lg:col-span-2")}
          src={imageSrc}
          alt={altText}
          height={500}
          width={500}
        />
      </div>
    </div>
  );
}

export default function Engagement() {
  return (
    <Bounded>
      <h2 className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
        Notre engagement
      </h2>

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300 md">
        <p>en 3 mots: efficace, rapide, durable</p>
      </div>

      <SectionWithImageAndText
        title="Design plus"
        gradientText="Fonctionnel"
        imageSrc="/engagement/design-fonctionnel1.jpg"
        altText="De beaux designs affichés sur un ordinateur"
        text={[
          "Version Mobile efficace",
          "Meilleure expérience utilisateur",
          "S'adapte à tous vos besoins",
        ]}
        linkHref="/"
        reverseLayout={false}
      />

      <SectionWithImageAndText
        title="Meilleur"
        gradientText="Référencement"
        imageSrc="/engagement/referencement.jpg"
        altText="quelqu'un tape sur un clavier d'ordinateur"
        text={[
          "Planifier une stratégie SEO efficace",
          "Augmenter la visibilité en ligne",
          "sans frais supplémentaire"
        ]}
        linkHref="/offres"
        reverseLayout={true}
      />

      <SectionWithImageAndText
        title="Outils web"
        gradientText="performants"
        imageSrc="/engagement/outils-performants.jpg"
        altText="quelqu'un développe sur un clavier d'ordinateur"
        text={[
          "Des sites plus rapides",
          "Des objets plus durables",
          "Des interfaces dynamiques"
        ]}
        linkHref="/"
        reverseLayout={false}
      />
    </Bounded>
  );
}
