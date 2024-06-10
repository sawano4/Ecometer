import React from 'react'
import { useNavigate } from 'react-router-dom'


function Facteur(props) {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between p-3 cursor-pointer'>
        <p className='font-bold' onClick={() => navigate('/admin/bdd/modifier', { state: { categorie: props.text } })}>{props.text}</p>
        <img src="../../../public/modify.svg" alt="Modify" className='cursor-pointer' />
    </div>
  )
}

export default Facteur