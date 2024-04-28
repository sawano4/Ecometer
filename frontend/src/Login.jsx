import { useState } from "react";

function Login() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <div className="realtive">
      <img
        src="/Vector2.svg"
        className="absolute max-w-full w-[100%]"
        alt="SVG Image"
      ></img>
      <div className="absolute w-full h-full ">
        <div className="  mx-auto mt-[22vh]    w-[30%] h-[68%]  bg-[white]  rounded-[15px] shadow-[0px_0px_30px_-15px]">
          <div className="text-center text-neutral-800 h-[10vh] text-[4.8vh] font-bold font-['Eudoxus Sans'] pt-[4vh]">
            Se connecter
          </div>
          <div className="text-center text-neutral-700 text-[2vh] font-medium font-['Eudoxus Sans']   pb-[7vh]">
            Bon retour, ravi de vous revoir
          </div>
          {/* formulaire  */}
          <form className="" action="#" method="POST">
            <div className="flex flex-col  justify-center items-center">
              <div className="w-[84%] h-[8vh] mb-[3vh] h-14 px-5  rounded-[2vh] border border-slate-900 flex-col justify-center items-start flex">
                <div className="  flex-col  justify-center  items-start flex">
                  <div className=" w-[50%] text-neutral-500 font-['Inter'] leading-none font-sans   text-[1.9vh] font-normal font-['Inter'] ">
                    Email d’utilisateur
                  </div>

                  <div className="w-[60vh]  justify-start items-center inline-flex">
                    <div className="text-neutral-500  font-normal font-['Inter'] ">
                      <input
                        className="text-[2.6vh] font-['Inter'] font-sans  focus:border-none focus:outline-none "
                        type="email"
                        name="email"
                        placeholder="exemple@domain.com"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" w-[84%] h-[8vh] h-14 px-5  rounded-[2vh] border border-slate-900 ">
                <div className=" w-[10%] float-right h-[100%] flex justify-center ">
                  <img
                    className="w-[70%] my-[auto] h-[70%] cursor-pointer"
                    src={show ? "public/Eye.svg" : "eye-off.svg"}
                    alt="toggle"
                    onClick={toggle}
                  ></img>
                </div>
                <div className=" w-[90%] h-[100%] flex-col justify-center items-start flex">
                  <div className="  w-[50%] font-normal text-neutral-500 font-['Inter'] leading-6 font-sans   text-[1.9vh] font-normal font-['Inter']">
                    Mot de passe
                  </div>

                  <div className="  pb-[1vh] w-full  justify-start items-center flex">
                    <div className="text-neutral-500 w-full text-sm font-normal font-['Inter'] ">
                      <input
                        className="text-[2.6vh] font-['Inter'] font-sans w-[100%]  focus:outline-none  "
                        type={show ? "text" : "password"}
                        name="password"
                        placeholder="Doit contenir au moins 8 caractères"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[82%] h-[4vh] mb-[3vh] justify-end items-center flex">
                <a
                  href="/#"
                  className="text-right  text-sky-600 text-[1.9vh] font-sans font-normal font-['Inter'] "
                >
                  Mot de passe oublié
                </a>
              </div>
              <div className="w-full">
                <button type="submit" className="w-full">
                  <div className="w-[84%] h-[8vh]  bg-sky-950 rounded-[2vh] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-white text-[3vh]  font-['Inter sans'] ">
                      Se connecter
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </form>
          <div className="flex justify-center mt-[4vh]">
            <span className="text-neutral-800 text-[2.8vh]  font-['Inter'] ">
              Vous n’avez pas encore de compte ?{" "}
            </span>
            <a href="/">
              {" "}
              <span className="text-sky-600  text-neutral-800 text-[2.8vh] font-['Inter'] ">
                &nbsp;S’inscrire
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
