"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize(); // Mise à jour de la taille de la fenêtre lors du chargement de la page

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Déclenche uniquement après le rendu initial

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
        height={windowSize.width < 768 ? windowSize.width * 0.5 : 555} 
      />
    </div>
  );
};

export default Carousel;
