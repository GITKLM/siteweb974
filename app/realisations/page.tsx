import AnimatedRealisation from "./AnimatedRealisation";


const projects = [
  {
    title: "Gericht",
    description: "Site vitrine au design agréable et fonctionnel, présentant tant les innovations culinaires du chef et la carte du restaurant.",
    src: "gericht.png",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "blue"
  },
  {
    title: "Car hub",
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

const Page = () => {
  return (
<section>
<AnimatedRealisation />
</section>
  );
};

export default Page;
