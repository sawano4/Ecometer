import React from 'react'

function Topbar(props) {
  return (
    <div className='w-full h-16 bg-white px-8 flex items-center shadow-lg'>
        <h1 className='font-bold text-[25px]'>{props.title}</h1>
    </div>
  )
}

export default Topbar