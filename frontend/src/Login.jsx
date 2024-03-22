const login = () => {
  return (
    <div>
      <img src="/Vector2.svg" className="" alt="SVG Image"></img>
      <div className="absolute m-auto right-[30%] top-[20%] w-[572px] h-[541px]  bg-white rounded-[15px] shadow">
        <h1 className="text-center text-neutral-800 text-[31px] font-bold font-['Eudoxus Sans'] leading-[150px]">
          Se connecter
        </h1>
        {/* formulaire  */}
        <form className="" action="#" method="POST">
          <div className="">
            <div className="w-[371px] h-14 px-5 py-2 rounded-[15px] border border-slate-900 flex-col justify-center items-start inline-flex">
              <div className="self-stretch h-10 flex-col justify-center items-start flex">
                <div className="w-[331px] h-4 pr-[236px] justify-start items-center inline-flex">
                  <div className="text-neutral-800 text-xs font-normal font-['Inter'] leading-none">
                    Nom d’utilisateur
                  </div>
                </div>
                <div className="w-[331px] h-6 pr-[181px] justify-start items-center inline-flex">
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
            <div className="w-[371px] h-20 flex-col justify-center items-end gap-2 inline-flex">
              <div className="self-stretch px-5 py-2 bg-white rounded-[15px] border border-slate-900 justify-start items-center gap-3 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                  <div className="w-[295px] h-4 pr-[218px] justify-start items-center inline-flex">
                    <div className="text-neutral-500 text-xs font-normal font-['Inter'] leading-none">
                      Mot de passe
                    </div>
                  </div>
                  <div className="w-[295px] h-6 pr-[60px] justify-start items-center inline-flex">
                    <div className="text-neutral-500 text-sm font-normal font-['Inter'] leading-normal">
                      <input
                        className="focus:border-none focus:outline-none w-96 "
                        type="password"
                        name="password"
                        placeholder="Doit contenir au moins 8 caractères"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-6 h-6 px-[3px] pt-[4.46px] pb-[4.54px] justify-center items-center flex">
                  <div className="w-[18px] h-[15px] relative"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[371px] h-4 pl-[255.78px] pr-[0.22px] justify-end items-center inline-flex">
            <div className="text-right text-sky-600 text-xs font-normal font-['Inter'] leading-none">
              Mot de passe oublié
            </div>
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
        </form>
      </div>
    </div>
  );
};

export default login;
