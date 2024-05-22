"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';


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
          height={555} 
          width={1100} 
        />
      </div>

  );
};

export default Carousel;
