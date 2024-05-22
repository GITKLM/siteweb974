"use client"
import './module.page.css';
import ContactForm from '../components/form';
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AnimationDevis() {
    const contactInfo = [
        {
          title: "Nous contacter",
          items: ["contact@siteweb974.com", "069518001"]
        },
        {
          title: "Adresse",
          items: ["36 rue de l'abattoir", "97400 Saint-Denis"]
        },
        {
          title: "Réseaux",
          items: ["Instagram", "Facebook", "Twitter"]
        }
      ];

      const container = useRef(null);
      gsap.registerPlugin(useGSAP);
    
      useGSAP(() => {
    
      const tl = gsap.timeline({defaults:{ease:"power2.inOut"}})
    
      tl.fromTo(".devis__heading",
            {scale:0.5},
            {scale:1, opacity:1, duration: 1.4 });
    
            tl.fromTo(".devis__form",
            {x:-100},
            {x:0, opacity:1, duration: 1.3 }, "-=0.8");
            tl.fromTo(".devis__contact",
            {x:100},
            {x:0, opacity:1, duration: 1.3 }, "-=0.9");
      
    
    }, { scope: container });

  return (
    <div className="container mx-auto px-4" ref={container}>
    <h1 className="devis__heading opacity-0 text-balance text-5xl font-medium md:text-7xl pt-10 pb-20 ">Quelle est votre demande ?</h1>
    
    <div className='lg:grid grid-cols-4 gap-10 block'>

<ContactForm />


      <div className="col-span-1 py-8 devis__contact opacity-0">
        {contactInfo.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-lg font-bold mb-2 text-gray-700">{section.title}</h2>
            {section.items.map((item, itemIndex) => (
              <p key={itemIndex} className="text-xl font-bold mb-2 text-gray-300">{item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
