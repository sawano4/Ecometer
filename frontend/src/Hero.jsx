import "./Hero.css";

function Hero() {
  return (
    <section className="mainhead">
      <img className="Vector1" src="/Vector1.svg" alt="SVG Image"></img>
      <img className="earth" src="/Illustrations.svg" alt="SVG Image"></img>
      <img className="rec" src="/Rectangle.svg" alt="SVG Image"></img>
      <div className="title">
        Calculer le <br /> Bilan Carbone de
        <br /> Votre Entreprise.{" "}
      </div>
      <div className="title2">
        Bilan vert, avenir brillant,
        <br /> l’outil essentiel pour des choix éco-responsables.{" "}
      </div>
      <a href="https://www.facebook.com/" className="btn22">
        S’inscrire
      </a>
      <a href="/login" className="btn11">
        Se connecter
      </a>
    </section>
  );
}

export default Hero;
