import React from 'react'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Searchbar from '../components/Searchbar'
import Element from '../components/Element'

function ModifierCollection() {
  const [open, setOpen] = useState(false);
  const [choix, setChoix] = useState("Tous");
  const categorie = "Achat de Biens";
  const handleExpand = () => {
    open ? setOpen(false) : setOpen(true);
  }

  const handleClick = (e) => {
    setOpen(false);
    setChoix(e.target.innerText)
  }
  return (
    <div className='flex h-screen bg-[#404040]'>
      <Sidebar selected="2" className="fixed"/>
      <div className='bg-[#F0F3F5] w-full h-screen'>
        <Topbar title="Base de données"/>
        <div className='w-full flex flex-col items-center'>
          <Searchbar placeholder="Rechercher un facteur d'émission"/>
        </div>
        <div className='flex mt-5 flex-col items-center gap-3'>
          <div className='flex justify-between w-[70%] items-center'>
              <div className='flex justify-center items-center gap-3'>
                <div className='bg-white p-2 rounded-lg border border-[2px] border-solid border-primaryBlue pr-2 pl-2 cursor-pointer'>
                  <img src="../../../public/Return.svg" alt="Revenir" className='w-[9px] h-[14px]' />
                </div>
                <p className='text-primaryBlue font-bold text-[20px]'>{categorie}</p>
              </div>
              <div className='flex gap-2'>
                  <p>Filtre: <span className='text-accentOrange'>{choix}</span></p>
                  <img src="../../../public/fleche.svg" alt="Expand" className='cursor-pointer' onClick={handleExpand}/>
                  {open ? (
                      <div className='absolute bg-[#ffffff] z-10  rounded-lg cursor-pointer'>
                        <div className="w-full text-center p-2 border border-solid hover:bg-blue-600 hover:text-white" onClick={(e) => handleClick(e)}>
                          <p>Tous</p>
                        </div>
                        <div className="w-full text-center p-2 border border-solid hover:bg-blue-600 hover:text-white" onClick={(e) => handleClick(e)}>
                          <p>Exemple</p>
                        </div>
                      </div>
                  ) : null}
              </div>
          </div>
          <div className='w-[80%] max-h-[400px] bg-white rounded-xl px-5 overflow-y-scroll'>
            <div className='flex justify-between p-3 text-specialGrey'>
              <p>Élement</p>
              <p>Actions</p>
            </div>
            {/* something here */}
            <Element name="Photocopieurs"/>
            <Element name="Montant des achats"/>
            <Element name="Home cinéma"/>
            <Element name="Cadran photo, numérique"/>
            <Element name="Appareil photo, Compact"/>
            <Element name="Appareil photo, Hybride"/>
            <Element name="Imprimante, Laser"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModifierCollection