import React from 'react'
import { useState } from 'react'

function Dropdown(props) {
  const [rotation, setRotation] = useState(0);
  const [choix, setChoix] = useState("Choisir");
  const [open, setOpen] = useState(false);
  const handleExpand = () => {
    setRotation((rotation + 180 ) % 360);
    console.log(rotation)
    open ? setOpen(false) : setOpen(true);
  }
  return (
    <div className='relative w-full'>
    <div className={`rounded-xl border border-solid border-[#0F172A] border-[2px] px-[25px] py-[3px] w-full flex justify-between items-center`}>
        <div className='flex flex-col justify-between'>
            <p className='text-[12px]'>{props.label}</p>
            <p>{choix}</p>
        </div>
        <img src="../../../Public/expand.png" alt="Expand" className={`w-[14px] h-[6px] cursor-pointer rotate-${rotation}`} onClick={handleExpand}/>
    </div>
    {open ?
      <div className='absolute w-[100px] h-[100px] bg-red'>
        Little problem here
      </div>
      : null}
      </div>
  )
}

export default Dropdown