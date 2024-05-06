import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Searchbar from '../components/Searchbar'

function Basededonnees() {
  return (
    <div className='flex h-screen bg-[#404040]'>
      <Sidebar selected="1" className="fixed"/>
      <div className='bg-[#F0F3F5] w-full h-screen'>
        <Topbar title="Base de données"/>
        <div className='w-full flex flex-col items-center'>
          <Searchbar placeholder="Rechercher un facteur d'émission"/>
        </div>
        <div className='flex justify-center mt-10'>
          <div className='flex justify-between w-[800px] items-center'>
              <div className='bg-white p-2 rounded-lg border border-[2px] border-solid border-primaryBlue pr-4 pl-4'>
                  <p className="text-[16px]">Ajouter Element</p>
              </div>
              <div className='flex gap-2'>
                  <p>Filtre: <span className='text-accentOrange'>Tous</span></p>
                  <img src="../../../public/fleche.svg" alt="Expand" className='cursor-pointer' />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basededonnees