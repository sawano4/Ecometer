import React from 'react'
import Input from '../components/Input'
import Dropdown from '../components/Dropdown'
import Button from '../components/Button'

function AjouterElm(props) {
  return (
    <div className='bg-[#ffffff] h-[600px] w-[850px] rounded-2xl px-12 py-7 flex flex-col justify-between'>
        <h1 className='text-2xl font-bold'>Ajouter Élement</h1>
        <div className='flex flex-col gap-3'>
            <h2 className='text-[18px]'>Informations sur le facteur d'émission</h2>
            <div className='flex justify-between gap-3'>
                <Input label="Valeur totale du poste" placeholder="Exemple Élement"/>
                <Input label="Incertitude" placeholder="Exemple Élement"/>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 gap-3'>
                <Dropdown label="Sous-Catégorie 1" choixPossibles={["Exemple 1", "Exemple 2"]}/>
                <Dropdown label="Sous-Catégorie 2" choixPossibles={["Exemple 1", "Exemple 2"]}/>
                <Dropdown label="Sous-Catégorie 3" choixPossibles={["Exemple 1", "Exemple 2"]}/>
                <Dropdown label="Sous-Catégorie 4" choixPossibles={["Exemple 1", "Exemple 2"]}/>
                <Dropdown label="Sous-Catégorie 5" choixPossibles={["Exemple 1", "Exemple 2"]}/>
                <Dropdown label="Sous-Catégorie 6" choixPossibles={["Exemple 1", "Exemple 2"]}/>
            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-3'>
                <Input type="number" label="CO2" placeholder="Exemple Élement"/>
                <Input type="number" label="CH4" placeholder="Exemple Élement"/>
                <Input type="number" label="CH4b" placeholder="Exemple Élement"/>
                <Input type="number" label="N2O" placeholder="Exemple Élement"/>
            </div>
            <div className='flex gap-6 mx-4 mt-20 justify-between'>
                <div className='w-full' onClick={props.annuler}>
                    <Button text="Annuler" background="#ffffff" color="#D62828"/>
                </div>
                <Button text="Valider" background="#003049" color="#ffffff"/>
            </div>
        </div>
    </div>
  )
}

export default AjouterElm