import React from 'react'
import Bounded from './Bounded'
import Image from 'next/image'
import { CgWebsite } from "react-icons/cg";
import ButtonRegion from './ButtonRegion'
import AnimatedKapNumerik from './AnimatedKapNumerik'

export default function LeKapNumerik() {
  return (
<section>
    <Bounded
    className="relative"

    >
    <div className="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-blue-500/50 blur-[160px] filter" />
    <AnimatedKapNumerik>
    <h2 className="text-balance text-center text-5xl font-medium md:text-7xl"> Faites-vous financer par la Région !</h2>

    </AnimatedKapNumerik>

    <div className="grid mt-16 items-center rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12">

     <div className='flex flex-col'>
      <div className="w-fit rounded-lg bg-blue-500/35 p-4 text-xl lg:text-3xl">
      <CgWebsite />
      </div>
      <div className="mt-6 text-2xl font-normal">
      <p>Modalités de subvention</p>
      </div>
      <div className="mt-4 max-w-x prose prose-invert">
        <h3 className='font-bold text-md'>Pour les entreprises de moins de 10 salariés :</h3>
      <p className='mb-2'>80 % des dépenses éligibles et 3 200 euros de subvention maximum</p>
        <h3 className='font-bold text-md'>Pour les entreprises de 10 à 19 salariés :</h3>
      <p>50 % des dépenses éligibles et 2 000 euros de subvention maximum.</p>
      </div>

      {/* <div className="mt-6 text-2xl font-normal">
      <p>Les documents à fournir</p>
      </div>

      <div className="mt-4 max-w-x prose prose-invert">
      <p>- Carte nationale d’identité ou passeport </p>
      <p>- RIB</p>
      <p>- Un seul devis de prestataires</p>
      <p>- La fiche d’engagement du prestataire retenu</p>
      <p>Pour les entreprises: </p>
      <p>Kbis, Bilans et Comptes de résultats, DCN n-1</p>
      <p>Pour les associations: </p>
      <p>SIREN, statuts à jour, déclaration en Préfecture, Décision du CA, liste membre du CA, Bilans et Comptes</p>
      </div> */}
<div className='text-center py-6'>
      <ButtonRegion />

</div>
      </div> 

      <Image
  src="/le-kap-numerik.jpg"
  alt="Image de présentation du kap Numerik"
  className="opacity-90 shadow-2xl lg:col-span-2 lg:pt-0 lg:-order-1 lg:translate-x-[-15%] rounded-lg"
  width={690}
  height={500}
  sizes="(max-width: 768px) 100vw, 50vw"
/>


        </div>

    </Bounded>
</section>
  )
}
