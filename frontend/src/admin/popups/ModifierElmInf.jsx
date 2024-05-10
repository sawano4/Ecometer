import React from 'react'
import Input from '../components/Input'
import Dropdown from '../components/Dropdown'
import Button from '../components/Button'

function ModifierElmInf() {
const name = "Photocopieurs";
  return (
    <div className='bg-[#ffffff] h-[600px] w-[850px] rounded-2xl px-12 py-7 flex flex-col justify-between'>
        <h1 className='text-2xl font-bold'>{"Modifier Élement: " + name}</h1>
        <div className='flex flex-col gap-3'>
            <h2 className='text-[18px]'>Informations de Base</h2>
            <div className='grid grid-cols-2 grid-rows-2 gap-3'>
                <Input type="text" label="Nom" placeholder="Exemple Élement"/>
                <Dropdown label="Structure" choixPossibles={["Exemple 1", "Exemple 2"]}/>
                <Dropdown label="Catégorie de l'élement" choixPossibles={["Exemple 1", "Exemple 2"]}/>
                <Dropdown label="Type de l'élement" choixPossibles={["Exemple 1", "Exemple 2"]}/>
            </div>
            <Input label="Description" placeholder="Description de l'élement"   />
            <div className='flex justify-between gap-3'>
                <Input type="number" label="Type de Poste" placeholder="Exemple Élement"/>
                <Input type="number" label="Unité" placeholder="KgCO2e/Unité"/>    
            </div>
            <Input type="text" label="Mots clés" placeholder="tag1, tag2, tag3"/> 
            <div className='flex gap-6 mx-4 mt-20 justify-between'>
                <Button text="Annuler" background="#ffffff" color="#D62828"/>
                <Button text="Valider" background="#003049" color="#ffffff"/>
            </div>
        </div>
    </div>
  )
}

export default ModifierElmInf