import React from 'react'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Searchbar from '../components/Searchbar'
import Facteur from '../components/Facteur'

function Basededonnees() {
  const [open, setOpen] = useState(false);
  const [choix, setChoix] = useState("Tous");
  const handleExpand = () => {
    open ? setOpen(false) : setOpen(true);
  }

  const handleClick = (e) => {
    setOpen(false);
    setChoix(e.target.innerText)
  }
  return (
    <div className='flex h-screen bg-[#404040]'>
      <Sidebar selected="1" className="fixed"/>
      <div className='bg-[#F0F3F5] w-full h-screen'>
        <Topbar title="Base de données"/>
        <div className='w-full flex flex-col items-center'>
          <Searchbar placeholder="Rechercher un facteur d'émission"/>
        </div>
        <div className='flex mt-10 flex-col items-center gap-3'>
          <div className='flex justify-between w-[70%] items-center'>
              <div className='bg-white p-2 rounded-lg border border-[2px] border-solid border-primaryBlue pr-4 pl-4 cursor-pointer'>
                  <p className="text-[16px]">Ajouter Element</p>
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
              <p>Collections</p>
              <p>Actions</p>
            </div>
            <Facteur text="Achat de biens"/>
            <Facteur text="Achat de services"/>
            <Facteur text="Transport de marchandises"/>
            <Facteur text="Transport de personnes"/>
            <Facteur text="Process et émissions fugitives"/>
            <Facteur text="Traitement des déchets"/>
            <Facteur text="Électricité"/>
            <Facteur text="UTCF"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basededonnees