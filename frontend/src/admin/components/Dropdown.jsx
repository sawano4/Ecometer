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

  const handleClick = (e) => {
    setOpen(false);
    setChoix(e.target.innerHTML);
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
      <div className='absolute bg-[#ffffff] z-10 w-full rounded-lg cursor-pointer'>
        <div className="w-full text-center py-1 border border-solid hover:bg-blue-600 hover:text-white" onClick={(e) => handleClick(e)}>
          <p>Exemple 1</p>
        </div>
        <div className="w-full text-center py-1 border border-solid hover:bg-blue-600 hover:text-white" onClick={(e) => handleClick(e)}>
          <p>Exemple 2</p>
        </div>
      </div>
      : null}
      </div>
  )
}

export default Dropdown