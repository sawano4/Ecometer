import React from 'react'
import Button from './Button'

function Element(props) {
    // props needed: factor
    const a = () => {
      props.showDetail();
      props.modifySelected(props.i);
    }

    const b = () => {
      if (confirm("Êtes vous sûr de vouloir supprimer ?")) {
        props.deleteFactor(props.i);
      }
    }
  return (
    <div className='flex justify-between p-3'>
        <p className='font-bold'>{(props.facteur.tags ? props.facteur.tags : (props.facteur.name + " " + props.facteur.description)) + " " + (props.elementType == "Poste" ? props.postType : "") + " (" + props.facteur.elementType +")"}</p>
        <div className='flex gap-2'>
            <Button background="#ffffff" color="#FCBF49" text="Afficher" action={a}/>
            <Button background="#ffffff" color="#0671E0" text="Modifier" action={props.showMod}/>
            <Button background="#ffffff" color="#D62828" text="Supprimer" action={b}/>
        </div>
    </div>
  )
}

export default Element