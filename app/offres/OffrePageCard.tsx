import Image from 'next/image';
import React from 'react';
import ButtonRegion from '../components/ButtonRegion';

type OffrePageCardProps = {
  title: string;
  description: string;
  inclus: string[];
  avantages: string[];
  price: number;
  // aidPrice: number;
  imgSrc: string;
  bgColor: string;
};

const OffrePageCard = ({ title, description, inclus, avantages, price, imgSrc, bgColor }: OffrePageCardProps) => {
  return (
<div className="offre__card opacity-0">
  <div className={`flex flex-col gap-4 justify-center items-center max-w-5xl glass-container bg-gradient-to-b from-gray-900 to-gray-950 p-6 mt-36 w-fit relative`}>
    <div className={`absolute inset-0 -z-10 ${bgColor} blur-2xl filter`} />
    
    <h2 className="text-center text-3xl font-bold md:text-4xl pb-6">{title}</h2>
    
    <p className="text-center">{description}</p>
    
    <div className="relative w-full flex justify-center">
      <Image className="rounded-3xl" src={imgSrc} alt={title} height={300} width={1000} />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-40 bg-black rounded-3xl">
        <p className="text-center text-2xl font-bold md:text-5xl p-2">
          <span className="text-xl">À partir de</span> {price} euros
        </p>
        <p className="text-center text-lg font-bold md:text-3xl p-2 ">Avec</p>
        <p className="text-center text-2xl font-bold md:text-5xl pb-6 text-green-500 p-2">
          50 à 80 %<span className="text-xl"> d&apos;aide régionale</span>
        </p>
        <ButtonRegion />
      </div>
    </div>
    
    <div className="lg:flex gap-10 mt-8">
      <div className="w-full lg:w-1/2">
        <h3 className="text-center text-xl font-bold md:text-2xl pb-4">Inclus :</h3>
        {inclus.map((item, index) => {
          const [titreInclus, descriptionInclus] = item.split(" : ");
          return (
            <div key={index} className="mb-4">
              <p className="font-semibold mb-1">{titreInclus}</p>
              <p>{descriptionInclus}</p>
            </div>
          );
        })}
      </div>
      
      <div className="w-full lg:w-1/2">
        <h3 className="text-center text-xl font-bold md:text-2xl pb-4">Avantages :</h3>
        {avantages.map((item, index) => (
          <p key={index} className="mb-2 font-bold text-lg">{item}</p>
        ))}
      </div>
    </div>
  </div>
</div>


  );
};

export default OffrePageCard;
