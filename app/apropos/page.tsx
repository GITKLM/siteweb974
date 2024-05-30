
import Bounded from '../components/Bounded';
import AnimationApropos from './AnimationApropos';
import { Metadata } from 'next';


export const metadata: Metadata = {
        title:"À Propos | Création de site internet d'excellence",
        description: "Découvrez qui nous sommes chez Site Web 974. En savoir plus sur notre expertise en développement web, nos valeurs et notre engagement envers nos clients."
        }

export default function page() {


  

  return (
<Bounded >
<AnimationApropos />
</Bounded>
)
}
