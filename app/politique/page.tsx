import React from 'react';
import Bounded from "../components/Bounded";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Nous nous engageons à protéger votre vie privée."
}

export default function PolitiqueConfidentialite() {
  return (
    <Bounded>
      <h1 className="text-center text-4xl font-medium my-8">Politique de Confidentialité</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold">Collecte des informations</h2>
          <p>Nous collectons des informations lorsque vous vous inscrivez sur notre site, vous vous connectez à votre compte, faites un achat, participez à un concours, et/ou lorsque vous vous déconnectez. Les informations recueillies incluent votre nom, votre adresse e-mail, votre numéro de téléphone, et/ou votre carte de crédit.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Utilisation des informations</h2>
          <p>Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Personnaliser votre expérience et répondre à vos besoins individuels.</li>
            <li>Fournir un contenu publicitaire personnalisé.</li>
            <li>Améliorer notre site Web.</li>
            <li>Améliorer le service client et vos besoins de prise en charge.</li>
            <li>Vous contacter par e-mail.</li>
            <li>Administrer un concours, une promotion, ou une enquête.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Confidentialité des informations</h2>
          <p>Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n&apos;importe quelle raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande et/ou une transaction, comme par exemple pour expédier une commande.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Divulgation à des tiers</h2>
          <p>Nous ne vendons, n&apos;échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierce parties de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.</p>
          <p>Nous pensons qu&apos;il est nécessaire de partager des informations afin d&apos;enquêter, de prévenir ou de prendre des mesures concernant des activités illégales, fraudes présumées, situations impliquant des menaces potentielles à la sécurité physique de toute personne, violations de nos conditions d&apos;utilisation, ou quand la loi nous y contraint.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Protection des informations</h2>
          <p>Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons le cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne. Nous protégeons également vos informations hors ligne. Seuls les employés qui ont besoin d&apos;effectuer un travail spécifique (par exemple, la facturation ou le service client) ont accès aux informations personnelles identifiables. Les ordinateurs et serveurs utilisés pour stocker des informations personnelles identifiables sont conservés dans un environnement sécurisé.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Consentement</h2>
          <p>En utilisant notre site, vous consentez à notre politique de confidentialité.</p>
        </section>
      </div>
    </Bounded>
  );
}
