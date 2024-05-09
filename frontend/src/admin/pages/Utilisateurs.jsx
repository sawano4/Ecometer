import React from 'react'
import Ajouter from '../popups/Ajouter'
import Profil from '../popups/Profil'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Searchbar from '../components/Searchbar'

function Utilisateurs() {
  return (
    <div className='flex h-screen bg-[#404040]'>
      <Sidebar selected="1" className="fixed"/>
      <div className='bg-[#F0F3F5] w-full h-screen'>
        <Topbar title="Utilisateurs"/>
        <div className='w-full flex flex-col items-center'>
          <Searchbar placeholder="Rechercher une entreprise"/>
        </div>
        
      </div>
    </div>
  )
}

export default Utilisateurs