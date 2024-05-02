function Info() {
  return (
    <div>
      <div className="  bg-[#F2F4F8] w-[100%]  flex ">
        <div className="sticky top-[0vh] w-[50%]  h-[25%] flex justify-center  ">
          <div className="w-[80%]">
            <div className="  text-[7vh] font-bold text-[black] mb-[2vh]  mt-[8vh] ">
              Pourquoi Ecometer?
            </div>

            <a className="w-[80%]" href="/acceuil">
              <div className="  border-[#000000] border-solid border-[0.3vh] py-[2.1vh] rounded-[2vh]  w-[65%] justify-center flex items-center">
                <div className=" w-[80%] pl-[1vh] text-center  text-[#000000] text-[2.5vh]   ">
                  Commencer le bilan Carbone
                </div>
                <div className=" w-[20%]  pl-[2vh] ">
                  <img
                    className="h-[4 vh] w-[4vh]"
                    src="/arrow-right.svg"
                    alt="SVG"
                  ></img>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="w-[50%]  float-right h-[100%]">
          <div className="pt-[3vh]">
            <div className="pl-[3vh] pt-[5vh] pb-[1vh]">
              <div className="bg-orange-200 rounded-[100vh] w-[10vh]  h-[10vh] flex items-center justify-center ">
                <img
                  className=" w-[5.5vh]"
                  src="/clipboard-check.svg"
                  alt="svg"
                ></img>{" "}
              </div>
            </div>
            <div className=" pl-[2vh] ">
              <div className=" text-[6vh] font-bold"> Analyse Complète : </div>
              <div className="  w-[85%] text-[3vh] font-lg">
                Notre calculatrice effectue une analyse approfondie en prenant
                en compte une vaste gamme de facteurs. Elle offre une vue
                holistique de l&apos;empreinte carbone de votre entreprise,
                permettant une compréhension détaillée et précise des
                différentes sources d&apos;émissions.
              </div>
            </div>
          </div>

          <div className=" pt-[5vh]">
            <div className="pl-[3vh]  ">
              <div className="bg-orange-200 rounded-[100vh] w-[10vh]  h-[10vh] flex items-center justify-center ">
                <img
                  className=" w-[5.5vh]"
                  src="/cursor-click.svg"
                  alt="svg"
                ></img>{" "}
              </div>
            </div>
            <div className=" pl-[2vh]  ">
              <div className=" text-[6vh] font-bold">
                {" "}
                Interface Conviviale :{" "}
              </div>
              <div className="  w-[85%] text-[3vh] font-lg">
                La navigation à travers notre calculatrice est conçue pour être
                intuitive et conviviale. Vous pouvez explorer les
                fonctionnalités de manière simple et efficace, rendant les
                évaluations de durabilité accessibles à tous les utilisateurs,
                quel que soit leur niveau de compétence technique.
              </div>
            </div>
          </div>

          <div className=" pt-[5vh]">
            <div className="pl-[3vh] ">
              <div className="bg-orange-200 rounded-[100vh] w-[10vh]  h-[10vh] flex items-center justify-center ">
                <img
                  className=" w-[5.5vh]"
                  src="/lock-closed.svg"
                  alt="svg"
                ></img>{" "}
              </div>
            </div>
            <div className=" pl-[2vh]  ">
              <div className=" text-[6vh] font-bold">
                {" "}
                Sécurité et Confidentialité :{" "}
              </div>
              <div className="  w-[85%] text-[3vh] font-lg">
                Nous accordons une importance primordiale à la sécurité de vos
                données. Soyez assuré(e) que toutes les informations que vous
                fournissez sont traitées de manière confidentielle. Notre
                plateforme adhère aux normes de sécurité les plus élevées,
                garantissant la protection totale de vos données contre tout
                accès non autorisé.
              </div>
            </div>
          </div>

          <div className="pt-[5vh] ">
            <div className="pl-[3vh] ">
              <div className="bg-orange-200 rounded-[100vh] w-[10vh]  h-[10vh] flex items-center justify-center ">
                <img
                  className=" w-[5.5vh]"
                  src="/document-report.svg"
                  alt="svg"
                ></img>{" "}
              </div>
            </div>
            <div className=" pl-[2vh]  ">
              <div className=" text-[6vh] font-bold">
                {" "}
                Rapports Personnalisés :{" "}
              </div>
              <div className="  w-[85%] text-[3vh] font-lg">
                En plus de l&apos;analyse exhaustive, notre calculatrice vous
                permet de générer des rapports personnalisés. Obtenez des
                informations détaillées sur les principaux contributeurs à votre
                empreinte carbone et recevez des recommandations spécifiques
                pour améliorer la durabilité de votre entreprise de manière
                ciblée.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  bg-[#F2F4F8] w-full h-[8vh]"></div>
    </div>
  );
}

export default Info;
