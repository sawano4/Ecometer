import React from 'react'
import Input from '../components/Input'
import Dropdown from '../components/Dropdown'
import Button from '../components/Button'

function Ajouter() {
  return (
    <div className='bg-[#ffffff] h-[600px] w-[850px] rounded-2xl px-12 py-7 flex flex-col'>
        <h1 className='text-2xl font-bold'>Ajouter utilisateur</h1>
        <div className='flex justify-between w-full gap-10'>
            <div className='w-full flex flex-col gap-5 justify-end '>
                <Input type="text" label="Nom de l'organisation" placeholder="Exemple: ESI"/>
                <Input type="text" label="Adresse" placeholder="Exemple: 16309, Oued-Smar, El-Harrach, Alger"/>
                <Input type="email" label="Email" placeholder="email@domain.com"/>
                <Input type="password" label="Mot de passe" placeholder="Doit contenir au moins 8 caractères"/>
                <Input type="password" label="Confirmer le mot de passe" placeholder="Doit contenir au moins 8 caractères"/>
            </div>
            <div className='w-full flex items-center flex-col gap-5 '>
                <img src="../../../public/insertPicture.svg" alt="Photo" className='w-[152px] h-[152px] cursor-pointer'/>
                <div className='flex justify-between gap-3'>
                    <Input type="number" label="Nombre d'employés"/>
                    <Input type="number" label="Nombre de locaux"/>
                </div>
                <Dropdown label="Structure de l'organisation"/>
                <Dropdown label="Industrie"/>
            </div>
        </div>
        <div className='flex gap-6 mx-4 mt-20'>
            <Button text="Annuler" background="#ffffff" color="#003049"/>
            <Button text="Valider" background="#003049" color="#ffffff"/>
        </div>
    </div>
  )
}

export default Ajouter