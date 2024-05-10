import React from 'react'

function Facteur(props) {
  return (
    <div className='flex justify-between p-3'>
        <p className='font-bold'>{props.text}</p>
        <img src="../../../public/modify.svg" alt="Modify" className='cursor-pointer' />
    </div>
  )
}

export default Facteur