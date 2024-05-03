import React from 'react'

function Button(props) {
  return (
    <div className='w-full rounded-xl border border-solid border-[#0F172A] border-[2px] px-[25px] py-[10px] text-center'>
        <p>{props.text}</p>
    </div>
  )
}

export default Button