import React from 'react'
import Button from '../components/Button'

function Afficher(props) {
  console.log(props.facteur)
  return (
    <div className='bg-[#ffffff] h-[600px] w-[850px] rounded-2xl px-12 py-7 flex flex-col justify-between'  >
        <h1 className='text-2xl font-bold'>{(props.facteur.tags ? props.facteur.tags : (props.facteur.name + " " + props.facteur.description)) + " " + (props.elementType == "Poste" ? props.postType : "") + " (" + props.facteur.elementType +")"}</h1>
        <div className='flex justify-between gap-6'>
            <div className='flex flex-col justify-between bg-[#F2F4F8] w-[60%] p-5 rounded-xl gap-2'>
                <p className='text-[20px]'><span className='font-bold'>Nom: </span>{props.facteur.name}</p>
                <p className='text-[20px]'><span className='font-bold'>Type élement: </span>{props.facteur.elementType}</p>
                <p className='text-[20px]'><span className='font-bold'>Identifiant de l'élement: </span>{props.facteur.identifier}</p>
                <p className='text-[20px]'><span className='font-bold'>Structure: </span>{props.facteur.structure}</p>
                <p className='text-[20px]'><span className='font-bold'>Type poste: </span>{props.postType}</p>
                <p className='text-[20px]'><span className='font-bold'>Type: </span>{props.facteur.elementType}</p>
                <p className='text-[20px]'><span className='font-bold'>Code de la catégorie: </span>{}</p>
                <p className='text-[20px]'><span className='font-bold'>Tags: </span>{props.facteur.tags}</p>
                <p className='text-[20px]'><span className='font-bold'>Description: </span>{props.facteur.description}</p>
            </div>
            <div className='flex flex-col justify-between bg-[#F2F4F8] w-[40%] p-5 rounded-xl'>
            <p className='text-[20px]'><span className='font-bold'>Total Poste: </span>{props.facteur.totalPostValue}</p>
                <p className='text-[20px]'><span className='font-bold'>Incertitude: </span>{props.facteur.uncertainty}</p>
                <p className='text-[20px]'><span className='font-bold'>CO2: </span>{props.facteur.co2}</p>
                <p className='text-[20px]'><span className='font-bold'>CH4f: </span>{props.facteur.ch4}</p>
                <p className='text-[20px]'><span className='font-bold'>CH4b: </span>{props.facteur.ch4b}</p>
                <p className='text-[20px]'><span className='font-bold'>N2O: </span>{props.facteur.n2o}</p>
                <p className='text-[20px]'><span className='font-bold'>Unité: </span>{props.facteur.unit}</p> 
            </div>
        </div>
        <Button text="Quitter" background="#ffffff" color="#D62828" action={props.annuler}/>
    </div>
  )
}

export default Afficher