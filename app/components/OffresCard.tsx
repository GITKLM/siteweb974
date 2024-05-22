import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface OffresCardProps {
  color?: string;
  title: string;
  description: string;
  imageSrc: string;
  linkHref?: string;
  subtitle?: string;
  imgAlt: string;
}

const OffresCard: React.FC<OffresCardProps> = ({ color, title, description, imageSrc, linkHref, subtitle, imgAlt }) => {
  return (
    <div className={`grid grid-rows-subgrid row-span-5 glass-container bg-gradient-to-b from-gray-900 to-gray-950 p-4`}>
      <div className={`absolute inset-0 -z-10 bg-${color}-500/30 blur-2xl filter `}/>
      <h3 className='text-balance text-center text-xl font-bold md:text-2xl'>{title}</h3>
      <p className='text-center pb-4 italic'>{subtitle}</p>
      <p className=''>{description}</p>

      <Image className="mx-auto block rounded-xl" src={imageSrc} alt={imgAlt} height={300} width={300} />
      {linkHref && (
        <Link 
        href={linkHref}
        aria-label={`Naviger sur la page Nos offres`}
        className="after:absolute after:inset-0 hover:underline ">
          Voir l&apos;offre
        </Link>
      )}
    </div>
  );
}

export default OffresCard;
