function Navbar() {
  return (
    <header className="bg-slate-900 text-[white] w-full h-[10vh] flex m-0 p-0">
      <div className="flex justify-between w-[40%] items-center ml-10">
        <h3 className="font-bold text-[4vh]">Ecometer</h3>

        <a
          href="/#"
          className="no-underline font-extralight text-[2.1vh] visited:text-[rgba(242,243,239,0.315)"
        >
          Accueil
        </a>
        <a
          href="/#"
          className="no-underline font-extralight text-[2.1vh] visited:text-[rgba(242,243,239,0.315)"
        >
          À propos
        </a>
        <a
          href="/#"
          className="no-underline font-extralight text-[2.1vh] visited:text-[rgba(242,243,239,0.315)"
        >
          Fonctionnement
        </a>
        <a
          href="/#"
          className="no-underline font-extralight text-[2.1vh] visited:text-[rgba(242,243,239,0.315)"
        >
          FAQ
        </a>
      </div>
      <div className="w-[30%]"> </div>
      <div className="flex w-[30%] items-center justify-center">
        <a
          href="/#"
          className="no-underline bg-[#003049] text-[white] text-[2.3vh] cursor-pointer transition-all duration-[0.3s] ease-[ease] delay-[0s] font-normal ml-5 px-[3.2vh] py-[1.5vh] rounded-[2vh] border-[none]"
        >
          Se connecter
        </a>

        <a
          href="https://www.facebook.com/"
          className="no-underline bg-[#D62828] text-[white] text-[2.3vh] cursor-pointer transition-all duration-[0.3s] ease-[ease] delay-[0s] font-normal ml-5 px-[3.2vh] py-[1.5vh] rounded-[2vh] border-[none]"
        >
          S’inscrire
        </a>
      </div>
    </header>
  );
}

export default Navbar;
