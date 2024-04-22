import { useState } from "react";

function Login() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <div>
      <img
        src="/Vector2.svg"
        className="max-w-full w-[100%]"
        alt="SVG Image"
      ></img>
      <div className="absolute  shadow-[0px_0px_80px_-30px] right-[30%] top-[15%] w-[40%] h-[75%]  bg-white rounded-[15px] shadow">
        <h1 className="text-center text-neutral-800 text-[4.5vh] font-bold font-['Eudoxus Sans'] py-[6vh]">
          Se connecter
        </h1>
        {/* formulaire  */}
        <form className="" action="#" method="POST">
          <div className="flex flex-col  justify-center items-center">
            <div className="w-[60%] h-[10vh] mb-[5vh] h-14 px-5  rounded-[2vh] border border-slate-900 flex-col justify-center items-start flex">
              <div className="  flex-col  justify-center  items-start flex">
                <div className=" w-[50%]   text-[3vh] font-normal font-['Inter'] ">
                  Nom d’utilisateur
                </div>

                <div className="w-[60vh]  justify-start items-center inline-flex">
                  <div className="text-neutral-500  font-normal font-['Inter'] ">
                    <input
                      className="text-[2.6vh]  focus:border-none focus:outline-none "
                      type="email"
                      name="email"
                      placeholder="exemple@domain.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-[60%]  h-[10vh] h-14 px-5 py-2 rounded-[2vh] border border-slate-900 ">
              <div className=" w-[10%] float-right h-[100%] flex justify-center ">
                <img
                  className="w-[70%] my-[auto] h-[70%] cursor-pointer"
                  src={show ? 'public/Eye.svg' : 'eye-off.svg'}
                  alt="toggle"
                  onClick={toggle}
                ></img>
              </div>
              <div className=" w-[90%] h-[100%] flex-col justify-center items-start flex">
                <div className="  text-[3vh] font-normal font-['Inter'] ">
                  Mot de passe
                </div>

                <div className="  pb-[1vh] w-full  justify-start items-center flex">
                  <div className="text-neutral-500 w-full text-sm font-normal font-['Inter'] ">
                    <input
                      className="text-[2.6vh] w-[100%]  focus:outline-none  "
                      type={show ? "text" : "password"}
                      name="password"
                      placeholder="Doit contenir au moins 8 caractères"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[60%] h-[4vh] mb-[3vh] justify-end items-center flex">
              <a
                href="/#"
                className="text-right  text-sky-600 text-[2.7vh] font-normal font-['Inter'] "
              >
                Mot de passe oublié
              </a>
            </div>
            <div className="w-full">
              <button type="submit" className="w-full">
                <div className="w-[60%] h-[10vh]  bg-sky-950 rounded-[2vh] justify-center items-center gap-2.5 inline-flex">
                  <div className="text-center text-white text-[3.5vh]  font-['Inter sans'] ">
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
  );
}

export default Login;
