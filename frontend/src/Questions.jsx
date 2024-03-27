import React from "react";
import { useState } from "react";

function Questions() {
  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  return (
    <React.Fragment>
      <div className="bg-[#F2F4F8] w-[100%]">
        <div className=" w-[40%] text-center pt-[7vh] pb-[4vh] font-bold mx-auto text-[6vh]">
          Foire Aux Questions
        </div>
        {/* ----------------------------- */}
        <button
          onClick={() => setShow(!show)}
          className="border-solid border-[#E2E8F0]  border-y-[0.3vh]     mx-auto  h-[13vh] flex justify-center items-center w-[90%]"
        >
          <div className=" w-[100%] text-left">
            Enim sodales consequat adipiscing facilisis massa venenatis, non
            lorem lobortis?{" "}
          </div>
          <div className="   ">
            <img
              className={` w-[4vh] ${show ? "scale-[-1]" : ``}`}
              src="/chevron-down.svg"
              alt="SVG"
            ></img>
          </div>
        </button>
        {show && (
          <div className="border-solid border-[#E2E8F0]  border-b-[0.3vh] flex items-center    mx-auto  h-[8vh]  w-[90%]">
            aaaa aaaa aaaaaaa aaaaa aaaa aaaaa aaa
          </div>
        )}
        {show && (
          <div className="border-solid border-[#E2E8F0]  border-b-[0.3vh] flex items-center    mx-auto  h-[8vh]  w-[90%]">
            aaaa aaaa aaaaaaaaaa aaaaaa aaaaaaa aaaaaaa aaaa
          </div>
        )}

        {/* ----------------------------- */}
        <button
          onClick={() => setShow2(!show2)}
          className="border-solid border-[#E2E8F0]  border-b-[0.3vh]     mx-auto  h-[13vh] flex justify-center items-center w-[90%]"
        >
          <div className=" w-[100%] text-left">
            Enim sodales consequat adipiscing facilisis massa venenatis, non
            lorem lobortis?{" "}
          </div>
          <div className="   ">
            <img
              className={` w-[4vh] ${show2 ? "scale-[-1]" : ``}`}
              src="/chevron-down.svg"
              alt="SVG"
            ></img>
          </div>
        </button>
        {show2 && (
          <div className="border-solid border-[#E2E8F0]  border-b-[0.3vh] flex items-center    mx-auto  h-[8vh]  w-[90%]">
            aaaa aaaa aaaaaaa aaaaa aaaa aaaaa aaa
          </div>
        )}
        {show2 && (
          <div className="border-solid border-[#E2E8F0]  border-b-[0.3vh] flex items-center    mx-auto  h-[8vh]  w-[90%]">
            aaaa aaaa aaaaaaaaaa aaaaaa aaaaaaa aaaaaaa aaaa
          </div>
        )}
        {/* ----------------------------- */}
        <button
          onClick={() => setShow3(!show3)}
          className="border-solid border-[#E2E8F0]  border-b-[0.3vh]     mx-auto  h-[13vh] flex justify-center items-center w-[90%]"
        >
          <div className=" w-[100%] text-left">
            Enim sodales consequat adipiscing facilisis massa venenatis, non
            lorem lobortis?{" "}
          </div>
          <div className="   ">
            <img
              className={` w-[4vh] ${show3 ? "scale-[-1]" : ``}`}
              src="/chevron-down.svg"
              alt="SVG"
            ></img>
          </div>
        </button>
        {show3 && (
          <div className="border-solid border-[#E2E8F0]  border-b-[0.3vh] flex items-center    mx-auto  h-[8vh]  w-[90%]">
            aaaa aaaa aaaaaaa aaaaa aaaa aaaaa aaa
          </div>
        )}
        {show3 && (
          <div className="border-solid border-[#E2E8F0]  border-b-[0.3vh] flex items-center    mx-auto  h-[8vh]  w-[90%]">
            aaaa aaaa aaaaaaaaaa aaaaaa aaaaaaa aaaaaaa aaaa
          </div>
        )}

        {/* ----------------------------- */}
        <button
          onClick={() => setShow4(!show4)}
          className="border-solid border-[#E2E8F0]  border-b-[0.3vh]     mx-auto  h-[13vh] flex justify-center items-center w-[90%]"
        >
          <div className=" w-[100%] text-left">
            Enim sodales consequat adipiscing facilisis massa venenatis, non
            lorem lobortis?{" "}
          </div>
          <div className="   ">
            <img
              className={` w-[4vh] ${show4 ? "scale-[-1]" : ``}`}
              src="/chevron-down.svg"
              alt="SVG"
            ></img>
          </div>
        </button>
        {show4 && (
          <div className="border-solid border-[#E2E8F0]  border-b-[0.3vh] flex items-center    mx-auto  h-[8vh]  w-[90%]">
            aaaa aaaa aaaaaaa aaaaa aaaa aaaaa aaa
          </div>
        )}
        {show4 && (
          <div className="border-solid border-[#E2E8F0]  border-b-[0.3vh] flex items-center    mx-auto  h-[8vh]  w-[90%]">
            aaaa aaaa aaaaaaaaaa aaaaaa aaaaaaa aaaaaaa aaaa
          </div>
        )}

        {/* ----------------------------- */}
        <button
          onClick={() => setShow5(!show5)}
          className="border-solid border-[#E2E8F0]  border-b-[0.3vh]     mx-auto  h-[13vh] flex justify-center items-center w-[90%]"
        >
          <div className=" w-[100%] text-left">
            Enim sodales consequat adipiscing facilisis massa venenatis, non
            lorem lobortis?{" "}
          </div>
          <div className="   ">
            <img
              className={` w-[4vh] ${show5 ? "scale-[-1]" : ``}`}
              src="/chevron-down.svg"
              alt="SVG"
            ></img>
          </div>
        </button>
        {show5 && (
          <div className="border-solid border-[#E2E8F0]  border-b-[0.3vh] flex items-center    mx-auto  h-[8vh]  w-[90%]">
            aaaa aaaa aaaaaaa aaaaa aaaa aaaaa aaa
          </div>
        )}
        {show5 && (
          <div className="border-solid border-[#E2E8F0]  border-b-[0.3vh] flex items-center    mx-auto  h-[8vh]  w-[90%]">
            aaaa aaaa aaaaaaaaaa aaaaaa aaaaaaa aaaaaaa aaaa
          </div>
        )}
        <div className="h-[8vh]"></div>
      </div>
    </React.Fragment>
  );
}

export default Questions;
