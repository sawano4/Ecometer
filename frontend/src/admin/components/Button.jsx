import React from 'react'

function Button(props) {
  return (
    <div className={`w-full rounded-xl border border-solid border-${props.color} border-[2px] px-[25px] py-[10px] text-center cursor-pointer bg-${props.background} text-${props.color}`}>
        <p>{props.text}</p>
    </div>
  )
}

export default Button