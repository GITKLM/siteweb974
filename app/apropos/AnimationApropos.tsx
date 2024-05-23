'use client';
import Word from '../components/Word';
import Character from '../components/Character';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const paragraph = "Nous sommes une équipe de développeurs talentueux, passionnés par les nouvelles technologies et toujours à la pointe des dernières innovations en développement web.";
const text = "Nous nous engageons à mettre nos compétences et notre expertise au service des Réunionnais, afin de promouvoir notre territoire et ses acteurs sur le web.";

export default function AnimationApropos() {

    const words = paragraph.split(" ")

    const container = useRef(null);
    gsap.registerPlugin(useGSAP);
  
    useGSAP(() => {
  
    const tl = gsap.timeline({defaults:{ease:"power2.inOut"}})
  
    tl.fromTo(".apropos__heading",
          {scale:0.5},
          {scale:1, opacity:1, duration: 1.4 });
  
          tl.fromTo(".apropos__card",
          {y:100},
          {y:0, opacity:1, duration: 1.3 }, "-=0.8");
    
  
  }, { scope: container });
  return (
    <div ref={container}>
<h1 className="apropos__heading opacity-0 text-balance text-center text-5xl font-medium md:text-7xl pt-[36px]" style={{ lineHeight: '1.15' }}>En apprendre plus sur <span className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">nous</span></h1>
<div style={{height: "20vh"}}></div>
<div className='apropos__card opacity-0 flex flex-col-reverse justify-center items-center lg:flex-row p-10'>

        <Word paragraph={paragraph}/>

        <Image 
        src="/apropos/apropos.jpg"
        alt='Un développeur derière son ordinateur'
        width={500}
        height={1000}
        />

        </div>

<div className='flex flex-col justify-center items-center lg:flex-row p-10'>
        <Image 
        src="/apropos/apropos.jpg"
        alt='photographie de la Réunion'
        width={500}
        height={1000}
        />
<Character text={text} />

<div>
</div>
</div>
    </div>
  )
}
