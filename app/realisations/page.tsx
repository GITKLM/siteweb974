import AnimatedRealisation from "./AnimatedRealisation";


const projects = [
  {
    title: "Gericht",
    description: "Site vitrine au design agréable et fonctionnel, présentant tant les innovations culinaires du chef et la carte du restaurant.",
    src: "gericht.png",
    color: "blue"
  },
  {
    title: "Car hub",
    description: "Un magnifique site e-commerce pour emprunter des véhicules avec une interface simple et intuitive",
    src: "car-hub.png",
    color: "green"
  },
  {
    title: "Hoo Bank",
    description: "Site vitrine d'une application de banque en ligne au design moderne",
    src: "bank-app.png",
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
