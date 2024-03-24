function Video() {
  return (
    <div>
      <div className="relative bg-white-100 h-[98vh]  w-[100%]">
        <h1 className="text-center text-neutral-800 text-[3.5vh] font-bold font-['Eudoxus Sans'] my-[2%] ">
          Comment fonctionne le calculateur ?
        </h1>
        <img
          className="absolute right-[0%] top-[12%] h-[66vh] "
          src="/Red-f.svg"
          alt="SVG Image"
        ></img>
        <img
          className="absolute right-[3%] bottom-[1%] h-[50vh] "
          src="/Red-ff.svg"
          alt="SVG Image"
        ></img>
        <img
          className="absolute left-[3%] bottom-[1%] h-[80vh]"
          src="/Red-fff.svg"
          alt="SVG Image"
        ></img>
        <div className=" absolute w-[100%] h-[80%]">
          <div className=" bg-white  shadow-[0px_0px_80px_-30px] rounded-[10px] rounded-b-lg h-[100%] w-[80%] mx-auto ">
            <div className="  h-[6%] w-[%] flex ">
              <div className="w-[0.5%]"></div>
              <div id="dawair" className="flex w-[5%] justify-between">
                <div className="flex items-center">
                  <img
                    className="h-[40%]"
                    src=" ../circle-f.svg"
                    alt="SVG Image"
                  ></img>
                </div>
                <div className="flex flec-col items-center">
                  <img
                    className="h-[40%]"
                    src=" ../circle-ff.svg"
                    alt="SVG Image"
                  ></img>
                </div>
                <div className="flex flec-col items-center">
                  <img
                    className="h-[40%]"
                    src=" ../circle-fff.svg"
                    alt="SVG Image"
                  ></img>
                </div>
              </div>
              <div
                id="title"
                className=" font-['Inter'] w-[89%] flex items-center justify-center"
              >
                <div className="bg-[#F1F5F9] rounded-[8px] text-neutral-300 w-[50%] h-[70%] font-['Roboto'] flex items-center justify-center">
                  <p className="text-neutral-300font-['Roboto'] text-[2.2vh] text-center">
                    Ecometer.com
                  </p>
                </div>
              </div>
              <div id="shoma" className="flex w-[5%]">
                <div className="flex items-center">
                  <img
                    className="h-[75%]"
                    src=" ../chevron-left.svg"
                    alt="SVG Image"
                  ></img>
                </div>
                <div className="flex flec-col items-center">
                  <img
                    className="h-[75%]"
                    src=" ../chevron-right.svg"
                    alt="SVG Image"
                  ></img>
                </div>
              </div>
              <div className="w-[0.5%]"></div>
            </div>
            <div className=" rounded-b-[10px] bg-blue-50 w-[100%] h-[100%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
