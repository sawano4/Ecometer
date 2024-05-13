import React from 'react'

function Button(props) {
  // props needed: background, color, text
  return (
    <div className={`w-full rounded-xl border border-solid border-[2px] px-[25px] py-[10px] text-center cursor-pointer`} style={{borderColor: props.color, backgroundColor: props.background, color: props.color}}>
        <p>{props.text}</p>
    </div>
  )
}

export default Button