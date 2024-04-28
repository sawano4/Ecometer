import  { useState } from "react";

function Signup() {


  const [Type, setType] = useState("Association");
  const Secteur = useSecteur(Type);
  
  const TypedeStr = [
    "Association",
    "Collectivité territoriale",
    "Établissement public",
    "État",
    "Entreprise"
  ];
  return (
    <div className="realtive">
      <img
        src="/Vector2.svg"
        className="absolute max-w-full w-[100%]"
        alt="SVG Image"
      ></img>
      <div className="absolute w-full h-full flex items-center">
        <div className="  mx-auto     w-[58%] h-[92%]  bg-[white]  rounded-[15px] shadow-[0px_0px_30px_-15px]">
          <div
            id="title"
            className="h-[18%] pt-[2vh] flex-col flex justify-center items-center"
          >
            <div className="pt-[2vh] text-[4.8vh] text-neutral-800 font-bold font-['Eudoxus Sans'] leading-9  ">
              S’inscrire
            </div>
            <div className="text-[2.4vh] font-['Inter'] font-sans ">
              Commençons, Créez votre compte
            </div>
          </div>

          <div className="h-[70%]  w-full">
            <form className="flex w-full h-full " action="#" method="POST">
              <div id="left" className="w-1/2   h-full">
                <div
                  id="every"
                  className="h-[20%] w-full  flex justify-center items-center"
                >
                  <div className="w-[84%] h-[64%] rounded-[2vh] border border-slate-900 flex-col justify-center items-start flex">
                    <div className="  flex-col w-full  justify-center  items-start flex">
                      <div className="pl-[2vh] mb-[0.3vh] w-full text-neutral-800   font-['Inter'] font-['Inter'] leading-none font-sans   text-[1.9vh] font-normal font-['Inter'] ">
                        Nom de l’organisation
                      </div>

                      <div className=" pl-[2vh] w-[60vh] w-full  justify-start items-center inline-flex">
                        <div className="text-neutral-500 w-full  font-normal font-['Inter'] ">
                          <input
                            className=" w-[97%] text-[2.2vh] font-['Inter'] font-sans  focus:border-none focus:outline-none "
                            type="text"
                            name="Nom"
                            placeholder="Exemple: ESI"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  ----------------------*/}
                <div
                  id="every"
                  className="h-[20%] w-full  flex justify-center items-center"
                >
                  <div className="w-[84%] h-[64%] rounded-[2vh] border border-slate-900 flex-col justify-center items-start flex">
                    <div className="  flex-col w-full  justify-center  items-start flex">
                      <div className="pl-[2vh] mb-[0.3vh] w-full text-neutral-800   font-['Inter'] font-['Inter'] leading-none font-sans   text-[1.9vh] font-normal font-['Inter'] ">
                        Adresse
                      </div>

                      <div className=" pl-[2vh] w-[60vh] w-full  justify-start items-center inline-flex">
                        <div className="text-neutral-500 w-full  font-normal font-['Inter'] ">
                          <input
                            className=" w-[97%] text-[2.2vh] font-['Inter'] font-sans  focus:border-none focus:outline-none "
                            type="text"
                            name="Nom"
                            placeholder="Exemple: 16309, Oued-Smar, El-Harrach, Alger"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  ----------------------*/}
                <div
                  id="every"
                  className="h-[20%] w-full  flex justify-center items-center"
                >
                  <div className="w-[84%] h-[64%] rounded-[2vh] border border-slate-900 flex-col justify-center items-start flex">
                    <div className="  flex-col w-full justify-center  items-start flex">
                      <div className="pl-[2vh] mb-[0.3vh] w-full text-neutral-800   font-['Inter'] font-['Inter'] leading-none font-sans   text-[1.9vh] font-normal font-['Inter'] ">
                        Email
                      </div>

                      <div className=" pl-[2vh] w-full justify-start items-center inline-flex">
                        <div className="  w-full   text-neutral-500  font-normal font-['Inter'] ">
                          <input
                            className=" w-[97%]   text-[2.2vh] font-['Inter'] font-sans  focus:border-none focus:outline-none "
                            type="email"
                            name="Nom"
                            placeholder="exemple@domain.com"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  ----------------------*/}
                <div
                  id="every"
                  className="h-[20%] w-full  flex justify-center items-center"
                >
                  <div className="w-[84%] h-[64%] rounded-[2vh] border border-slate-900 flex-col justify-center items-start flex">
                    <div className="  flex-col w-full  justify-center  items-start flex">
                      <div className="pl-[2vh] mb-[0.3vh] w-full text-neutral-800   font-['Inter'] font-['Inter'] leading-none font-sans   text-[1.9vh] font-normal font-['Inter'] ">
                        Mot de passe
                      </div>

                      <div className=" pl-[2vh] w-full  justify-start items-center inline-flex">
                        <div className="  w-full  text-neutral-500  font-normal font-['Inter'] ">
                          <input
                            className=" w-[97%]    text-[2.2vh] font-['Inter'] font-sans  focus:border-none focus:outline-none "
                            type="email"
                            name="Nom"
                            placeholder="Doit contenir au moins 8 caractères"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  ----------------------*/}

                <div
                  id="every"
                  className="h-[20%] w-full  flex justify-center items-center"
                >
                  <div className="w-[84%] h-[64%] rounded-[2vh] border border-slate-900 flex-col justify-center items-start flex">
                    <div className="  flex-col w-full justify-center  items-start flex">
                      <div className="pl-[2vh] mb-[0.3vh] w-full text-neutral-800   font-['Inter'] font-['Inter'] leading-none font-sans   text-[1.9vh] font-normal font-['Inter'] ">
                        Confirmer le mot de passe
                      </div>

                      <div className=" pl-[2vh] w-full justify-start items-center inline-flex">
                        <div className="   w-full   text-neutral-500  font-normal font-['Inter'] ">
                          <input
                            className="    w-[97%]  text-[2.2vh] font-['Inter'] font-sans  focus:border-none focus:outline-none "
                            type="email"
                            name="Nom"
                            placeholder="Doit contenir au moins 8 caractères"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="left" className="w-1/2  h-full">
                <div className="w-full h-[40%]  flex justify-center items-center">
                  <div className="  w-[23vh] h-[23vh] bg-rose-300 rounded-full flex justify-center items-center">
                    <img
                      src="/camera.svg"
                      className="max-w-full h-[6vh] "
                      alt="SVG Image"
                    ></img>
                  </div>
                </div>
                <div className="w-full h-[20%]  flex justify-center items-center">
                  <div className="w-[84%]  h-[64%] flex justify-between ">
                    <div className="h-full w-[48.5%]  rounded-[2vh] border border-slate-900 flex-col justify-center items-start flex">
                      <div className="pl-[2vh] mb-[0.3vh] w-full text-neutral-800   font-['Inter'] font-['Inter'] leading-none font-sans   text-[1.9vh] font-normal font-['Inter'] ">
                        Nombre d’employés
                      </div>

                      <div className=" pl-[2vh] w-[60vh] w-full  justify-start items-center inline-flex">
                        <div className="text-neutral-500 w-full  font-normal font-['Inter'] ">
                          <input
                            className=" w-[97%] text-[2.2vh] font-['Inter'] font-sans  focus:border-none focus:outline-none "
                            type="text"
                            name="Nom"
                            placeholder="Exemple: 100"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="h-full w-[48.5%]  rounded-[2vh] border border-slate-900 flex-col justify-center items-start flex">
                      <div className="pl-[2vh] mb-[0.3vh] w-full text-neutral-800   font-['Inter'] font-['Inter'] leading-none font-sans   text-[1.9vh] font-normal font-['Inter'] ">
                        Nombre de locaux
                      </div>

                      <div className=" pl-[2vh] w-[60vh] w-full  justify-start items-center inline-flex">
                        <div className="text-neutral-500 w-full  font-normal font-['Inter'] ">
                          <input
                            className=" w-[97%] text-[2.2vh] font-['Inter'] font-sans  focus:border-none focus:outline-none "
                            type="text"
                            name="Nom"
                            placeholder="Exemple: 4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="every"
                  className="h-[20%] w-full  flex justify-center items-center"
                >
                  <div className="w-[84%] h-[64%] rounded-[2vh] border border-slate-900 flex-col justify-center items-start flex">
                    <div className=" relative flex-col w-full  justify-center  items-center flex">
                      <select
                        className=" outline-none   border-none appearance-none w-[96%]"
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option disabled selected>
                          Type de structure
                        </option>
                        {TypedeStr.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <img
                        src="/Down.svg"
                        className="absolute pointer-events-none right-[5%] max-w-full"
                        alt="SVG Image"
                      ></img>
                    </div>
                  </div>
                </div>
                <div
                  id="every"
                  className="h-[20%] w-full  flex justify-center items-center"
                >
                  <div className="w-[84%] h-[64%] rounded-[2vh] border border-slate-900 flex-col justify-center items-start flex">
                    <div className=" relative flex-col w-full  justify-center  items-center flex">
                      <select
                        disabled={!Secteur.length}
                        className="outline-none appearance-none w-[96%]"
                      >
                        <option  >
                          Secteur d’activité
                        </option>
                        {Secteur.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <img
                        src="/Down.svg"
                        className="absolute pointer-events-none right-[5%] max-w-full"
                        alt="SVG Image"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="h-[12%] w-[96%] justify-end flex  ">
            <button
              href=""
              className="no-underline h-[80%] bg-[#003049] text-[white] text-[2.8vh]  font-normal  px-[4.5vh]  rounded-[2vh] border-[none]"
            >
              Confimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function useSecteur(Type) {

  if (Type === "Association" || Type === "Entreprise") {
    return  [
      "Administration",
      "Agriculture et forêts",
      "Banque / assurance",
      "BTP",
      "Commerce et distribution",
      "Eau et déchets",
      "Enseignement",
      "Industries agroalimentaires",
      "Industries chimiques et pharmaceutiques",
      "Industries de l'énergie",
      "Industries lourdes",
      "Industries manufacturières divers",
      "Information et communication",
      "Santé et action sociale",
      "Services divers",
      "Transport et logistique",
    ];
  } else {
    return [];
  }


}
export default Signup;
