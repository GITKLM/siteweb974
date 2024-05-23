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
          link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
          color: "blue"
        },
        {
          title: "Car Hub",
          description: "Un magnifique site e-commerce pour emprunter des véhicules avec une interface simple et intuitive",
          src: "car-hub.png",
          link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
          color: "green"
        },
        {
          title: "Hoo Bank",
          description: "Site vitrine d'une application de banque en ligne au design moderne",
          src: "bank-app.png",
          link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
          color: "yellow"
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
