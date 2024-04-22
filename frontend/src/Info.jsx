function Info() {
  return (
    <div>
      <div className=" bg-[#F2F4F8] w-[100%] h-[220vh] flex ">
        <div className="sticky top-[0vh] w-[50%]  h-[25%] flex flex-col items-center ">
          <div className="  text-[6vh] text-neutral-800 mb-[4vh]  mt-[8vh] ">
            Pourquoi Ecometer?
          </div>

          <a className="w-[100%]" href="/#">
            <div className=" mx-auto border-[#000000] border-solid border-[0.5vh] py-[2vh] rounded-[2vh]  w-[50%] justify-center flex items-center">
              <div className=" w-[80%] pl-[1vh] text-center text-[#000000] text-[3.1vh]   ">
                Commencer le bilan Carbone
              </div>
              <div className=" w-[20%]  pl-[2vh] ">
                <img
                  className="h-[4vh] w-[4vh]"
                  src="/arrow-right.svg"
                  alt="SVG"
                ></img>
              </div>
            </div>
          </a>
        </div>

        <div className="w-[50%]  float-right h-[100%]">
          <div className=" h-[25%]">
            <div className="pl-[3vh] pt-[5vh] pb-[1vh]">
              <div className="bg-orange-200 rounded-[100vh] w-[10vh]  h-[10vh] flex items-center justify-center ">
                <img
                  className=" w-[7vh]"
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
                holistique de l'empreinte carbone de votre entreprise,
                permettant une compréhension détaillée et précise des
                différentes sources d'émissions.
              </div>
            </div>
          </div>

          <div className="  h-[25%]">
            <div className="pl-[3vh] pt-[5vh] pb-[1vh]">
              <div className="bg-orange-200 rounded-[100vh] w-[10vh]  h-[10vh] flex items-center justify-center ">
                <img
                  className=" w-[7vh]"
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

          <div className="  h-[25%]">
            <div className="pl-[3vh] pt-[5vh] pb-[1vh]">
              <div className="bg-orange-200 rounded-[100vh] w-[10vh]  h-[10vh] flex items-center justify-center ">
                <img
                  className=" w-[7vh]"
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

          <div className="  h-[25%]">
            <div className="pl-[3vh] pt-[5vh] pb-[1vh]">
              <div className="bg-orange-200 rounded-[100vh] w-[10vh]  h-[10vh] flex items-center justify-center ">
                <img
                  className=" w-[7vh]"
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
                En plus de l'analyse exhaustive, notre calculatrice vous permet
                de générer des rapports personnalisés. Obtenez des informations
                détaillées sur les principaux contributeurs à votre empreinte
                carbone et recevez des recommandations spécifiques pour
                améliorer la durabilité de votre entreprise de manière ciblée.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
