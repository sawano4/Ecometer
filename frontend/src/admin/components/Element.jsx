import React from 'react'
import Button from './Button'

function Element(props) {
    // props needed: name
  return (
    <div className='flex justify-between p-3'>
        <p className='font-bold'>{props.name}</p>
        <div className='flex gap-2'>
            <Button background="#ffffff" color="#FCBF49" text="Afficher"/>
            <Button background="#ffffff" color="#0671E0" text="Modifier"/>
            <Button background="#ffffff" color="#D62828" text="Supprimer"/>
        </div>
    </div>
  )
}

export default Element