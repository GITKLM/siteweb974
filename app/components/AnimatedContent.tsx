"use client"
import Carousel from "./Carousel";
import ButtonLink from "./ButtonLink";
import ButtonRegion from "./ButtonRegion";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

export default function AnimatedContent() {

  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {

  const tl = gsap.timeline({defaults:{ease:"power2.inOut"}})

  tl.fromTo(".hero__heading",
        {scale:0.5},
        {scale:1, opacity:1, duration: 1.4 });

        tl.fromTo(".hero__body",
        {y:20},
        {y:0, opacity:1, duration: 1.2 }, "-=0.6");

        tl.fromTo(".hero__button",
        {scale:1.5},
        {scale:1, opacity:1, duration: 1.3 }, "-=0.8");

        tl.fromTo(".hero__image",
        {y:100},
        {y:0, opacity:1, duration: 1.3 }, "-=0.3");

        tl.fromTo(".hero__glow",
        {scale:0.5},
        {scale:1, opacity:1, duration: 1.8 }, "-=1");
  

}, { scope: container });

  return (
    <div className="relative" ref={container}>
    <div className="flex flex-col justify-center items-center gap-4 pt-6">
    <h1 className="hero__heading opacity-0 text-balance text-center text-5xl font-medium md:text-6xl max-w-5xl pt-14" style={{ lineHeight: '1.25' }}>
      Tout simplement, les <span className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">meilleurs</span> sites web de l&apos;île de la Réunion.
    </h1>
    <p className="hero__body opacity-0 italic text-xs sm:text-lg">Site vitrine, e-commerce ou sur-mesure <span className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent font-bold">gratuit</span> avec l&apos;aide régionale</p>
    <div className=" hero__button opacity-0 flex sm:flex-row  flex-col gap-4 items-center justify-center py-6">
    <ButtonRegion
    
    />
    <ButtonLink
    >Nous contacter</ButtonLink>
    </div>
            </div>
            <div>
            <div className='hero__image opacity-0 glass-container  sm:mt-12'>
      <div className='hero__glow opacity-0 absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter'/>

        <Carousel />
        <Link
      href={"/realisations"}
      aria-label="Voir toutes nos réalisations"
      >
      </Link>
    </div>
        <p className="pt-11 text-center text-gray-400 text-xl italic">&quot;L&apos;Excellence Digitale à portée de clic&quot;</p>
            </div>
    </div>
  )
}
