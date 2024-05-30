import React from 'react';
import Bounded from '../components/Bounded';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Consultez nos mentions légales"
}

export default function Page() {
  return (
     <Bounded>
       <h1 className='text-balance text-center text-5xl font-medium md:text-6xl max-w-5xl pt-14 pb-10'>Mentions Légales</h1>
<h2 className="text-balance text-center text-2xl font-medium md:text-3xl py-4">Propriété intellectuelle</h2>
<p className='pb-6'>
  Le contenu du site siteweb974.re est protégé par les lois en vigueur sur la propriété intellectuelle et les droits d&apos;auteur. Toute reproduction, distribution, modification, adaptation, retransmission ou publication des contenus est strictement interdite sans l&apos;accord écrit préalable de Site Web 974.
</p>

<h2 className="text-balance text-center text-3xl font-medium md:text-3xl py-4">Conditions générales d&apos;utilisation (CGU)</h2>
<p className='pb-6'>
  <strong>Objet du site :</strong> Site Web 974 propose des services de création de sites web personnalisés.<br />
  <strong>Responsabilité :</strong> Site Web 974 s&apos;efforce de fournir des informations précises et à jour sur son site. Toutefois, l&apos;éditeur ne saurait être tenu responsable des erreurs ou omissions des informations diffusées. L&apos;utilisateur est seul responsable de l&apos;utilisation qu&apos;il fait des informations présentes sur le site.<br />
  <strong>Utilisation des données :</strong> Les informations collectées sur le site sont utilisées pour le bon fonctionnement des services proposés et peuvent être utilisées à des fins commerciales avec le consentement explicite des utilisateurs.
  <strong>Cookies :</strong> Le site n&apos;utilise pas de cookies pour améliorer l&apos;expérience utilisateur.
</p>

<h2 className="text-balance text-center text-3xl font-medium md:text-3xl py-4">Protection des données personnelles</h2>
<p className='pb-6'>
  <strong>Politique de confidentialité :</strong> Site Web 974 s&apos;engage à protéger la vie privée de ses utilisateurs. Les données personnelles collectées (nom, adresse email, etc.) sont traitées de manière confidentielle et ne sont pas vendues à des tiers.<br />
</p>

<h2 className="text-balance text-center text-2xl font-medium md:text-3xl py-4">Litiges et juridiction compétente</h2>
<p className='pb-6'>
  <strong>Droit applicable :</strong> Les présentes mentions légales sont régies par le droit français.<br />
  <strong>Juridiction :</strong> En cas de litige, les tribunaux compétents seront ceux de la juridiction de Saint-Denis de la Réunion.
</p>
<div className='flex flex-col sm:flex-row justify-evenly gap-10'>
<div>
<h2 className="text-balance text-center text-3xl font-medium md:text-3xl py-4">Éditeur du site</h2>
<p>
  <strong>Nom :</strong>Clément Prioton (auto entrepreneur)<br />
  <strong>Adresse :</strong> 36 rue de l&apos;abattoir 97400 Saint-Denis<br />
  <strong>Téléphone :</strong> +262 6 93 51 80 01<br />
  <strong>Email :</strong> siteweb974@gmail.com<br />
  <strong>Directeur de la publication :</strong> Clément Prioton
</p>
</div>

<div>
<h2 className="text-balance text-center text-3xl font-medium md:text-3xl py-4">Hébergeur</h2>
<p>
        <strong>Nom de l&apos;hébergeur :</strong> Hostinger<br />
        <strong>Adresse :</strong> Hostinger International Ltd., <br /> 61 Lordou Vironos Street, 6023 Larnaca, Chypre<br />
        <strong>Téléphone :</strong> +357 24 02 79 37
      </p>
</div>

</div>

     </Bounded>
  );
}
