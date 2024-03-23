const login = () => {
  return (
    <div>
      <img src="/Vector2.svg" className="w-100%" alt="SVG Image"></img>
      <div className="absolute   right-[30%] top-[15%] w-[40%] h-[70%]  bg-white rounded-[15px] shadow">
        <h1 className="text-center text-neutral-800 text-[31px] font-bold font-['Eudoxus Sans'] leading-[130px]">
          Se connecter
        </h1>
        {/* formulaire  */}
        <form className="" action="#" method="POST">
          <div className="flex flex-col  justify-center items-center">
            <div className="w-[371px] mb-[30px] h-14 px-5 py-2 rounded-[15px] border border-slate-900 flex-col justify-center items-start inline-flex">
              <div className="self-stretch h-10 flex-col justify-center items-start flex">
                <div className=" w-[331px] text-neutral-800 text-sm font-normal font-['Inter'] leading-none">
                  Nom d’utilisateur
                </div>

                <div className="w-[331px] h-6 justify-start items-center inline-flex">
                  <div className="text-neutral-500 text-sm font-normal font-['Inter'] leading-normal">
                    <input
                      className="focus:border-none focus:outline-none "
                      type="email"
                      name="email"
                      placeholder="exemple@domain.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-[371px] mb-[12px] h-14 px-5 py-2 rounded-[15px] border border-slate-900 ">
              <div className=" w-[10%] float-right h-[100%] flex justify-center ">
                <img
                  className="w-[70%] my-[auto] h-[70%]"
                  src="/Hide.svg"
                  alt="SVG Image"
                ></img>
              </div>
              <div className=" w-[90%] h-10 flex-col justify-center items-start flex">
                <div className=" text-neutral-800 text-sm font-normal font-['Inter'] leading-none">
                  Mot de passe
                </div>

                <div className="  h-6  justify-start items-center inline-flex">
                  <div className="text-neutral-500 text-sm font-normal font-['Inter'] leading-normal">
                    <input
                      className="focus:border-none focus:outline-none w-60 "
                      type="password"
                      name="password"
                      placeholder="Doit contenir au moins 8 caractères"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[371px] h-4 mb-[20px] pl-[255.78px] pr-[0.22px] justify-end items-center inline-flex">
              <a
                href="/#"
                className="text-right  text-sky-600 text-[14px] font-normal font-['Inter'] leading-none"
              >
                Mot de passe oublié
              </a>
            </div>
            <div>
              <button type="submit" className="">
                <div className="w-[371px] h-14 px-8 py-4 bg-sky-950 rounded-[15px] justify-center items-center gap-2.5 inline-flex">
                  <div className="text-center text-white text-lg font-normal font-['Inter'] leading-normal">
                    Se connecter
                  </div>
                </div>
              </button>
            </div>
          </div>
        </form>
        <div className="flex justify-center mt-2">
          <span className="text-neutral-800 text-base font-normal font-['Inter'] leading-7">
            Vous n’avez pas encore de compte ?{" "}
          </span>
          <span className="text-sky-600 text-base font-normal font-['Inter'] leading-7">
            S’inscrire
          </span>
        </div>
      </div>
    </div>
  );
};

export default login;
