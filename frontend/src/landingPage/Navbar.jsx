/* import { useState, useEffect } from "react";
import React from "react";*/

function Navbar() {
  /* const [fix, setFix] = useState(false);
  useEffect(() => {
    const handScroll = () => {
      setFix(window.scrollY > 500);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handScroll);

    return () => window.removeEventListener("scroll", handScroll);
  });*/
  return (
    // <nav className="{ /*`${fix ? " sticky top-0 " : ""}`"} */ ">
    <header className=" bg-slate-900  text-[white] w-full h-[18vh] flex m-0 p-0">
      <div className="w-[8%]"> </div>
      <div className="flex justify-between   w-[40%] items-center ">
        <h3 className="font-bold font-[Arial] font-sans text-[4vh]">
          Ecometer
        </h3>

        <a
          href="/#"
          className="no-underline  font-normal  leading-normal font-[Arial] text-[2.8vh] visited:text-[rgba(242,243,239,0.315)"
        >
          Accueil
        </a>
        <a
          href="/#"
          className="no-underline font-extralight text-[2.8vh] visited:text-[rgba(242,243,239,0.315)"
        >
          À propos
        </a>
        <a
          href="/#"
          className="no-underline font-extralight text-[2.8vh] visited:text-[rgba(242,243,239,0.315)"
        >
          Fonctionnement
        </a>
        <a
          href="/#"
          className="no-underline font-extralight text-[2.8vh] visited:text-[rgba(242,243,239,0.315)"
        >
          FAQ
        </a>
      </div>
      <div className="w-[20.5%]"> </div>
      <div className="flex w-[30%] items-center justify-center">
        <a
          href="/login"
          className="no-underline bg-[#003049] text-[white] text-[2.4vh] cursor-pointer transition-all duration-[0.3s] ease-[ease] delay-[0s] font-normal ml-5 px-[5vh] py-[1.8vh] rounded-[2vh] border-[none]"
        >
          Se connecter
        </a>

        <a
          href="/signup"
          className="no-underline bg-[#D62828] text-[white] text-[2.4vh] cursor-pointer transition-all duration-[0.3s] ease-[ease] delay-[0s] font-normal ml-[1.5vh] px-[5vh] py-[1.8vh] rounded-[2vh] border-[none]"
        >
          S’inscrire
        </a>
      </div>
    </header>
    // </nav>
  );
}

export default Navbar;
