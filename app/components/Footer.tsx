import React from 'react';
import Link from 'next/link';
import ButtonLink from './ButtonLink';
import Logo from './Logo';

export default function Footer() {
    const navigationItems = [
        { label: 'Nos Offres', link: '/offres' },
      ];
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row">
      <Link href="/">
        <Logo />
        <span className="sr-only">Glisten.ai Home Page</span>
      </Link>
      <div className='text-center'>
        <div className='flex gap-8 pb-2'>
          <Link href="/mentionsLegales">
              <span className="">Mentions Légales</span>
          </Link>
          <Link href="/politique">
              <span className="">Politique de Confidentialité</span>
          </Link>
        </div>
            
              <span><span className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent font-bold">2024</span> Tous Droits Réservés</span>
        
      </div>
      <nav aria-label="Footer">
        <ul className="flex gap-6">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <Link href={item.link} className="inline-flex min-h-11 items-center">
                {item.label}
              </Link>
            </li>
          ))}
          <ButtonLink>
            Devis gratuit
          </ButtonLink>
        </ul>
      </nav>
    </footer>
  );
}
