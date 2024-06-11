import React from 'react'
import Button from './Button'
import { useState } from 'react'

function Element(props) {
    // props needed: factor
    //showPopup
    const [popupDetail, setPopupDetail] = useState(false);
    const [popupMod, setPopupMod] = useState(false);
    console.log(props.facteur);
  return (
    <div className='flex justify-between p-3'>
        <p className='font-bold'>{(props.facteur.tags ? props.facteur.tags : (props.facteur.name + " " + props.facteur.description)) + " " + (props.elementType == "Poste" ? props.postType : "no post type") + " (" + props.facteur.elementType +")"}</p>
        <div className='flex gap-2'>
            <Button background="#ffffff" color="#FCBF49" text="Afficher"/>
            <Button background="#ffffff" color="#0671E0" text="Modifier"/>
            <Button background="#ffffff" color="#D62828" text="Supprimer"/>
        </div>
    </div>
  )
}

export default Element