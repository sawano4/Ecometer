import React from 'react'
import Button from '../components/Button';

function Profil() {
    const nom = "ESI";
    const structure = "Entreprise";
    const adresse = "19 Oued Smar, El Harrach, Alger";
    const industrie = "Exemple";
    const nombreEmployés = 456;
    const nombreLocaux = 36;
  return (
    <div className='bg-[#ffffff] h-[600px] w-[850px] rounded-2xl px-12 py-7 flex flex-col'>
        <h1 className='text-2xl font-bold mb-10'>Profil</h1>
        <div className="flex w-full justify-between gap-10">
            <div className="bg-[#F2F4F8] rounded-xl p-5 w-full flex flex-col justify-between">
                <p className="font-bold">Nom de l'organisation: </p>
                <span>{nom}</span>
                <p className="font-bold">Structure de l'organisation: </p>
                <span>{structure}</span>
                <p className="font-bold">Adresse: </p>
                <span>{adresse}</span>
                <p className="font-bold">Industrie</p>
                <span>{industrie}</span>
            </div>
            <div className='flex flex-col w-full items-center gap-5'>
                <img src="../../../public/insertPicture.svg" alt="Photo" className='w-[152px] h-[152px] cursor-pointer'/>
                <div className='w-full'>
                    <div className="bg-[#F2F4F8] rounded-xl p-5 w-full">
                        <p className="font-bold">Nombre d'employés: </p>
                        <span>{nombreEmployés}</span>
                        <p className="font-bold">Nombre de locaux: </p>
                        <span>{nombreLocaux}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex gap-6 mx-4 mt-28'>
            <Button text="Annuler" background="#ffffff" color="#D62828"/>
            <Button text="Valider" background="#003049" color="#ffffff"/>
        </div>
    </div>
  )
}

export default Profil