import React from "react";
import { useState } from "react";

function Questions() {
  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  return (
    <React.Fragment>
      <div className="bg-[#F2F4F8] w-[100%]">
        <div className=" ² text-center pt-[7vh] pb-[4vh] font-bold mx-auto text-[7.5vh]">
          Foire Aux Questions
        </div>
        {/* ----------------------------- */}
        <button
          onClick={() => setShow(!show)}
          className="border-solid border-[#E2E8F0]  border-y-[0.3vh]     mx-auto  h-[13vh] flex justify-center items-center w-[82%]"
        >
          <div className=" text-[4vh] w-[100%] text-left">
            Comment accéder au calculateur de bilan carbone de mon entreprise ?{" "}
          </div>
          <div className="   ">
            <img
              className={` w-[4vh] ${show ? "scale-[-1]" : ``}`}
              src="/chevron-down.svg"
              alt="SVG"
            ></img>
          </div>
        </button>
        {show && (
          <div className="text-[3.2vh] border-solid border-[#E2E8F0]  border-b-[0.3vh] flex items-center    mx-auto  h-[8vh]  w-[82%]">
            aaaa aaaa aaaaaaa aaaaa aaaa aaaaa aaa
          </div>
        )}
       

        {/* ----------------------------- */}
        <button
          onClick={() => setShow2(!show2)}
          className="border-solid border-[#E2E8F0]  border-b-[0.3vh]     mx-auto  h-[13vh] flex justify-center items-center w-[82%]"
        >
          <div className=" text-[4vh] w-[100%] text-left">
            La calculatrice est-elle conviviale pour les entreprises de
            différentes tailles ?{" "}
          </div>
          <div className="   ">
            <img
              className={` w-[4vh] ${show2 ? "scale-[-1]" : ``}`}
              src="/chevron-down.svg"
              alt="SVG"
            ></img>
          </div>
        </button>
        {show2 && (
          <div className="text-[3.2vh] border-solid border-[#E2E8F0]  border-b-[0.3vh] flex items-center    mx-auto  h-[8vh]  w-[82%]">
            aaaa aaaa aaaaaaa aaaaa aaaa aaaaa aaa
          </div>
        )}
       
        {/* ----------------------------- */}
        <button
          onClick={() => setShow3(!show3)}
          className="border-solid border-[#E2E8F0]  border-b-[0.3vh]     mx-auto  h-[13vh] flex justify-center items-center w-[82%]"
        >
          <div className=" text-[3.8vh] w-[100%] text-left">
            Les résultats du calcul de l'empreinte carbone sont-ils
            confidentiels et sécurisés ?{" "}
          </div>
          <div className="   ">
            <img
              className={` w-[4vh] ${show3 ? "scale-[-1]" : ``}`}
              src="/chevron-down.svg"
              alt="SVG"
            ></img>
          </div>
        </button>
        {show3 && (
          <div className="text-[3.2vh] border-solid border-[#E2E8F0]  border-b-[0.3vh] flex items-center    mx-auto  h-[8vh]  w-[82%]">
            aaaa aaaa aaaaaaa aaaaa aaaa aaaaa aaa
          </div>
        )}
      

        {/* ----------------------------- */}
        <button
          onClick={() => setShow4(!show4)}
          className="border-solid border-[#E2E8F0]  border-b-[0.3vh]     mx-auto  h-[13vh] flex justify-center items-center w-[82%]"
        >
          <div className=" text-[4vh] w-[100%] text-left">
            Y a-t-il des frais associés à l'utilisation de la calculatrice ?{" "}
          </div>
          <div className="   ">
            <img
              className={` w-[4vh] ${show4 ? "scale-[-1]" : ``}`}
              src="/chevron-down.svg"
              alt="SVG"
            ></img>
          </div>
        </button>
        {show4 && (
          <div className="text-[3.2vh] border-solid border-[#E2E8F0]  border-b-[0.3vh] flex items-center    mx-auto  h-[8vh]  w-[82%]">
            aaaa aaaa aaaaaaa aaaaa aaaa aaaaa aaa
          </div>
        )}
       

        {/* ----------------------------- */}
        <button
          onClick={() => setShow5(!show5)}
          className="border-solid border-[#E2E8F0]  border-b-[0.3vh]     mx-auto  h-[13vh] flex justify-center items-center w-[82%]"
        >
          <div className=" text-[4vh] w-[100%] text-left">
            Puis-je télécharger ou exporter les résultats du calcul de
            l’empreinte carbone ?{" "}
          </div>
          <div className="   ">
            <img
              className={` w-[4vh] ${show5 ? "scale-[-1]" : ``}`}
              src="/chevron-down.svg"
              alt="SVG"
            ></img>
          </div>
        </button>
       
        {show5 && (
          <div className="text-[3.2vh] border-solid border-[#E2E8F0]  border-b-[0.3vh] flex items-center    mx-auto  h-[8vh]  w-[82%]">
            aaaa aaaa aaaaaaaaaa aaaaaa aaaaaaa aaaaaaa aaaa
          </div>
        )}
        <div className="h-[8vh]"></div>
      </div>
    </React.Fragment>
  );
}

export default Questions;
