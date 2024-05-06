import React from 'react'

function Input(props) {
  // props needed: type, label, placeholder
  return (
    <div className={`rounded-xl border border-solid border-[#0F172A] border-[2px] px-[25px] py-[3px] w-full flex flex-col justify-around`}>
        <p className='text-[12px]'>{props.label}</p>
        <input type={props.type} className='border-none focus:border-none ring-transparent outline-none w-full text-[14px]' placeholder={props.placeholder}/>
    </div>
  )
}

export default Input