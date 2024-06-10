import React from 'react'
import Button from '../components/Button'

function Afficher() {
  return (
    <div className='bg-[#ffffff] h-[600px] w-[850px] rounded-2xl px-12 py-7 flex flex-col justify-between'  >
        <h1 className='text-2xl font-bold'>Photocopieurs</h1>
        <div className='flex justify-between gap-6'>
            <div className='flex flex-col justify-between bg-[#F2F4F8] w-[60%] p-5 rounded-xl gap-2'>
                <p className='text-[20px]'><span className='font-bold'>Nom: </span>Exemple</p>
                <p className='text-[20px]'><span className='font-bold'>Type élement: </span>ESI</p>
                <p className='text-[20px]'><span className='font-bold'>Identifiant de l'élement: </span>Entreprise</p>
                <p className='text-[20px]'><span className='font-bold'>Structure: </span>r</p>
                <p className='text-[20px]'><span className='font-bold'>Type poste: </span>456</p>
                <p className='text-[20px]'><span className='font-bold'>Nom poste: </span>36</p>
                <p className='text-[20px]'><span className='font-bold'>Code de la catégorie: </span>36</p>
                <p className='text-[20px]'><span className='font-bold'>Tags: </span>456</p>
                <p className='text-[20px]'><span className='font-bold'>Description: </span>456</p>
            </div>
            <div className='flex flex-col justify-between bg-[#F2F4F8] w-[40%] p-5 rounded-xl'>
            <p className='text-[20px]'><span className='font-bold'>Total Poste: </span>Entreprise</p>
                <p className='text-[20px]'><span className='font-bold'>Incertitude: </span>r</p>
                <p className='text-[20px]'><span className='font-bold'>CO2: </span>456</p>
                <p className='text-[20px]'><span className='font-bold'>CH4f: </span>36</p>
                <p className='text-[20px]'><span className='font-bold'>CH4b: </span>36</p>
                <p className='text-[20px]'><span className='font-bold'>N2O: </span>456</p>
                <p className='text-[20px]'><span className='font-bold'>Unité: </span>456</p> 
            </div>
        </div>
        <Button text="Quitter" background="#ffffff" color="#D62828"/>
    </div>
  )
}

export default Afficher