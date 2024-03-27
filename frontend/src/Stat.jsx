import React from "react";
import Chart from "react-apexcharts";

function Stat() {
  return (
    <React.Fragment>
      <div className="w-[100%] h-[100vh]">
        <div className="text-[6vh] font-semibold w-full text-[Black]  text-center max-w-full pb-[3vh]  pt-[7vh]">
          Les Émissions Des GES en Nombres
        </div>

        <div id="kbir" className="w-[100%] flex ">
          <div id="chart" className="w-[50%] flex pt-[5vh] justify-center">
            <Chart
              type="line"
              className=" bg-[#F1F1F1] h-[65%] border-[#D8D8D8] border-solid border-[0.4vh] rounded-[2vh] w-[70%] "
              series={[
                {
                  name: "Quelque chose",
                  data: [28, 45, 34, 55, 42, 72, 67, 60, 55, 102],
                },
                {
                  name: "Quelque chose",
                  data: [25, 60, 70, 65, 55, 75, 75, 70, 50, 100],
                },
              ]}
              options={{
                stroke: { curve: "smooth", width: 3 },

                colors: ["#F77F00", "#D62828"],
                xaxis: {
                  categories: ["", "", 1990, "", 2000, "", 2010, "", 2020, ""],
                  theme: {},
                },
              }}
            ></Chart>
          </div>
          <div id="right" className=" w-[50%]">
            <div className="flex">
              <div className="  h-[20vh] w-[50%] flex justify-center items-center ">
                <div className=" border-[#EDEDED] border-solid border-[0.1vh] bg-[#F1F1F1] rounded-[2vh] w-[90%] ">
                  <div className="px-[1vh] font-bold text-[5vh] text-red-600">
                    40+
                  </div>
                  <div className="px-[1vh] font- text-[3.5vh] ">
                    Milliards de tonnes de CO2 émis en 2023
                  </div>
                </div>
              </div>
              <div className=" h-[20vh] w-[50%] flex justify-center items-center ">
                <div className="border-[#EDEDED] border-solid border-[0.1vh]   bg-[#F1F1F1] rounded-[2vh] w-[90%] ">
                  <div className="px-[1vh] font-bold text-[5vh] text-red-600">
                    21K+
                  </div>
                  <div className="px-[1vh] font- text-[3.5vh] ">
                    Milliards de tonnes de CO2 émis en 2023
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className=" h-[20vh] w-[50%] flex justify-center items-center ">
                <div className=" border-[#EDEDED] border-solid border-[0.1vh]  bg-[#F1F1F1] rounded-[2vh] w-[90%] ">
                  <div className="px-[1vh] font-bold text-[5vh] text-red-600">
                    60M
                  </div>
                  <div className="px-[1vh] font- text-[3.5vh] ">
                    Une description du nombre correspondant au graphique
                  </div>
                </div>
              </div>
              <div className=" h-[20vh] w-[50%] flex justify-center items-center ">
                <div className=" border-[#EDEDED] border-solid border-[0.1vh]   bg-[#F1F1F1] rounded-[2vh] w-[90%] ">
                  <div className="px-[1vh] font-bold text-[5vh] text-red-600">
                    45K+
                  </div>
                  <div className="font- px-[1vh] text-[3.5vh] ">
                    Une description du nombre correspondant au graphique{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className=" h-[20vh] w-[100%] flex justify-center items-center ">
                <div className=" border-[#EDEDED] border-solid border-[0.1vh]  bg-[#F1F1F1] rounded-[2vh] w-[95%] ">
                  <div className=" px-[1vh] font-bold text-[5vh] text-red-600">
                    3M
                  </div>
                  <div className=" px-[1vh] font- text-[3.5vh] ">
                    Une description du nombre correspondant au graphique plus
                    long que les autres{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[12vh] w-full flex justify-center items-center">
              <a className="w-[100%]" href="/#">
                <div className=" mx-auto py-[2vh] rounded-[2vh] bg-[#003049] w-[55%] justify-center flex items-center">
                  <div className=" w-[80%]  text-center text-[3.1vh] text-white  ">
                    Determiner Votre Bilan Carbone
                  </div>
                  <div className=" w-[20%]  pl-[2vh] ">
                    <img
                      className="h-[4vh] w-[4vh]"
                      src="/arrow-right-white.svg"
                      alt="SVG"
                    ></img>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Stat;
