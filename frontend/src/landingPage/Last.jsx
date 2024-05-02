import React from "react";

function Last() {
  return (
    <React.Fragment>
      <div className=" w-[100%] h-[80vh] flex justify-center items-center">
        <div className=" bg-gradient-to-br from-[#02314A] to-[#0b5080] w-[84%] h-[70%] rounded-[3vh] flex flex-col   items-center ">
          <div className="text-white font-bold pt-[10vh] pb-[4vh]  text-[7vh]">
            Rejoignez-nous pour Faire une Différence
          </div>
          <div className="text-white w-[85%] text-center text-[2.8vh]">
            Chez Ecometer, nous nous engageons à promouvoir la durabilité sans
            aucune barrière financière. En offrant gratuitement notre
            Calculateur de Bilan Carbone pour les Entreprises, nous avons pour
            objectif d&apos;autonomiser les entreprises de toutes tailles à
            prendre des mesures significatives vers un avenir plus respectueux
            de l&apos;environnement.
          </div>
          <div className="bg-[#EEFEFC] flex items-center bg-opacity-30 rounded-[2vh]  rgba(238, 245, 252, 0.30)  w-1/3 mt-[5vh] h-[7vh]">
            <input
              placeholder="Entrez votre email professionnel"
              type="email "
              className="border-none outline-none placeholder-gray-300 bg-transparent text-white w-[72%] h-[80%] text-[2.5vh] pl-[3vh]"
            ></input>
            <div className="w-[3%]"></div>
            <a
              href="https://www.facebook.com/"
              className="  no-underline bg-[#FFF] w-[25%] flex items-center justify-center text-[#000]  text-[2.7vh] cursor-pointer transition-all duration-[0.3s] ease-[ease] delay-[0s] font-normal h-[100%]   rounded-[2vh] border-[none] "
            >
              S’inscrire
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Last;
