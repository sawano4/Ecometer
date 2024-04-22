function Hero() {
  return (
    <section className="bg-slate-900 w-[100%] h-[90vh] relative">
      <img
        className="absolute  w-[100%] max-w-full bottom-0"
        src="/Vector1.svg"
        alt="SVG Image"
      ></img>

      {/** --------------------------- */}
      <div className=" absolute flex  w-full h-full">
        {/** --------------------------- */}
        <div id="div" className="w-1/2 flex justify-center items-center ">
          <div className="  ">
            <div className=" h-[10vh] text-[white] text-[9vh] font-bold w-[100%] ">
              Calculer le
            </div>

            <div className=" h-[10vh]  text-[white] text-[9vh] font-bold w-[100%] ">
              Bilan Carbone de
            </div>

            <div className="flex  w-[100%] ">
              <div className="  text-[white] text-[9vh] font-bold  ">
                Votre&nbsp;
              </div>

              <div className=" relative  text-[white] text-[9vh] font-bold  ">
                <p className="absolute">Entreprise.</p>
                <img
                  className=" h-[4.7vh] mt-[7vh] "
                  src="/Rectangle.svg"
                  alt="SVG Image"
                ></img>
              </div>
            </div>
            <div className="  text-[white] text-[2vh] w-[100%] mt-[3vh] ">
              Bilan vert, avenir brillant,
              <br /> l’outil essentiel pour des choix éco-responsables.
            </div>
            <div className="  text-[white] text-base w-[100%] mt-[5vh] ">
              <a
                href="https://www.facebook.com/"
                className="no-underline bg-[#D62828] text-[white] text-[2.8vh] cursor-pointer transition-all duration-[0.3s] ease-[ease] delay-[0s] font-normal   px-[4vh] py-[2vh] rounded-[2vh] border-[none] "
              >
                S’inscrire
              </a>
              <a
                href="/login"
                className=" no-underline bg-slate-900 text-[white] text-[2.8vh] cursor-pointer transition-all duration-[0.3s] ease-[ease] delay-[0s] font-normal border ml-[2vh] px-[4vh] py-[2vh] rounded-[2vh] border-[none] border-solid border-white "
              >
                Se connecter
              </a>
            </div>
          </div>
        </div>
        {/** --------------------------- */}
        <div className=" w-1/2 flex justify-center items-center">
          <img
            className=" max-w-full w-[80%] "
            src="/Illustrations.svg"
            alt="SVG Image"
          ></img>
        </div>
        {/** --------------------------- */}
        {/** --------------------------- */}
      </div>
    </section>
  );
}

export default Hero;
