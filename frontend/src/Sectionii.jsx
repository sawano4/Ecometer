function Sectionii() {
  return (
    <section className="bg-[#f2f4f8] w-full h-[62vh]">
      <div className="text-[6vh] font-semibold w-full text-[Black] text-center max-w-full  pt-[7vh]">
        Comprenez votre Bilan Carbone
      </div>
      <div className="flex w-[90%] mx-auto mt-[5vh]">
        <div className="w-3/12 items-center">
          <img
            className="block h-[6.5vh] m-auto"
            src="/globe.svg"
            alt="SVG Image"
          ></img>
          <div className="text-[2.6vh] text-[Black] text-center max-w-full  pt-5">
            Comprenez l'impact de vos
            <br /> activités sur
            <br /> l'environnement.
          </div>
        </div>
        <div className="w-3/12 items-center">
          <img
            className="block h-[6.5vh] m-auto"
            src="/presentation-chart-bar.svg"
            alt="SVG Image"
          ></img>
          <div className="text-[2.6vh]  text-[Black] text-center max-w-full  pt-5">
            Respectez les exigences
            <br /> réglementaires en évaluant
            <br /> vos émissions de carbone.
          </div>
        </div>
        <div className="w-3/12 items-center">
          <img
            className="block h-[6.5vh] m-auto"
            src="/chart-pie.svg"
            alt="SVG Image"
          ></img>
          <div className="text-[2.6vh] text-[Black] text-center max-w-full  pt-5">
            Évaluez votre performance
            <br /> par rapport à l'industrie.
          </div>
        </div>
        <div className="w-3/12 items-center">
          <img
            className="block h-[6.5vh] m-auto"
            src="/home.svg"
            alt="SVG Image"
          ></img>
          <div className="text-[2.6vh] text-[Black] text-center max-w-full  pt-5">
            {" "}
            Montrez votre engagement
            <br /> en gérant votre empreinte
            <br /> carbone pour une
            <br /> entreprise responsable.
          </div>
        </div>
      </div>
      <div className="w-[100%] flex ">
        {" "}
        <a
          href=""
          className="text-center mt-[3vh] block justify-center items-center  no-underline bg-[#d62828] text-[white] text-[2.7vh] cursor-pointer transition-all duration-[0.3s] ease-[ease] delay-[0s] font-normal mx-auto px-[4vh] py-[2vh] rounded-[2vh] border-[none]"
        >
          En savoir plus
        </a>
      </div>
    </section>
  );
}

export default Sectionii;
