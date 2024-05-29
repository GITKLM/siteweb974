"use client"
import { useState } from 'react';
import Router from 'next/router';

export default function ButtonRegion() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleClick = () => {
    window.open('https://demarches.cr-reunion.fr/economie/kap-numerik-2023/', '_blank');
  };

  return (
    <button
    aria-label="Aller vers le site de la Région Réunion"
      className={`relative ${
        isHovered ? 'bg-gradient-to-b from-yellow-300 to-yellow-500' : 'border border-blue-100/20 bg-blue-200/10'
      } text-yellow-300 px-4 py-2 rounded-full transition-all duration-400 hover:text-white/90 hover:font-semibold border border-blue-100/20 w-[13rem]`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleClick}
    >
      {isHovered ? "Subvention 80% max" : "Voir l'aide de la région"}
    </button>
  );
}
