"use client"
import { useRef } from 'react';
import RealisationsCard from './components/RealisationsCard';
import styles from './page.module.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



export default function AnimatedRealisation() {

    const projects = [
        {
          title: "Gericht",
          description: "Site vitrine au design agréable et fonctionnel, présentant tant les innovations culinaires du chef et la carte du restaurant.",
          src: "gericht.png",
          link: "https://restaurant-gericht-iota.vercel.app/",
          color: "blue"
        },
        {
          title: "Car Hub",
          description: "Un magnifique site e-commerce pour emprunter des véhicules avec une interface simple et intuitive",
          src: "car-hub.png",
          link: "",
          color: "green"
        },
        {
          title: "Hoo Bank",
          description: "Site vitrine d'une application de banque en ligne au design moderne et élégant",
          src: "bank-app.png",
          link: "https://the-hoo-bank.vercel.app/",
          color: "yellow"
        },
        {
          title: "GPT-3",
          description: "Une interface moderne et design pour la présentation de l'Inteligence artificielle GPT3",
          src: "gpt-3.png",
          link: "https://gtp3.site/",
          color: "blue"
        },
      ];
    
    
      const container = useRef(null);
      gsap.registerPlugin(useGSAP);
    
      useGSAP(() => {
    
      const tl = gsap.timeline({defaults:{ease:"power2.inOut"}})
    
      tl.fromTo(".realisation__heading",
            {scale:0.5},
            {scale:1, opacity:1, duration: 1.4 });
    
            tl.fromTo(".realisation__card",
            {y:100},
            {y:0, opacity:1, duration: 1.3 }, "-=0.8");
      
    
    }, { scope: container });

  return (
    <div className='' ref={container}>
    <div className='flex flex-col items-center justify-center'>
      <h1 className="realisation__heading opacity-0 text-balance text-center text-5xl font-medium md:text-7xl pt-[136px]" style={{ lineHeight: '1.25' }}>Pour voir toutes nos <span className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">réalisations</span></h1>
      <div className="md:text-8xl pt-10 ">
      </div>
    </div>
    <div className={`${styles.card} realisation__card opacity-0`}>
    {projects.map((project, i) => (
<RealisationsCard key={`p_${i}`} {...project} i={i} />
))}
    </div>
  </div>
  )
}
