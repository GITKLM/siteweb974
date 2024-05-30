"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const useWindowSize = () => {
  const isClient = typeof window === 'object'; // Vérifie si le code s'exécute côté client

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (!isClient) {
      return; // Si le code s'exécute côté serveur, sortir de l'effet
    }

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize(); // Mise à jour de la taille de la fenêtre lors du chargement de la page

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]); // Déclenche uniquement après le rendu initial côté client

  return windowSize;
};

     

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const slides = [
    '/gericht.webp',
    '/car-hub.webp',
    '/bank-app.webp',
    '/hilink.webp',
    '/gpt-3.webp',
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const windowSize = useWindowSize();

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 20000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="carousel">
      <Image
        className='rounded-lg'
        src={slides[currentSlide]} 
        alt={`Projet n°${currentSlide + 1}`}
        width={windowSize.width < 768 ? windowSize.width : 1100} 
        height={windowSize.width < 768 ? windowSize.width * 0.5 : 556} 
      />
    </div>
  );
};

export default Carousel;
