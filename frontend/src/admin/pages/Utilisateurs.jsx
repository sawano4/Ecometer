import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Ajouter from '../popups/Ajouter'
import Profil from '../popups/Profil'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Searchbar from '../components/Searchbar'
import InfoUtilisateur from '../components/InfoUtilisateur'

function Utilisateurs() {
  const [open, setOpen] = useState(false);
  const [choix, setChoix] = useState("Tous");
  const handleExpand = () => {
    open ? setOpen(false) : setOpen(true);
  }

  const handleClick = (e) => {
    setOpen(false);
    setChoix(e.target.innerText)
  }

  const [popupAdd, setPopupAdd] = useState(false);

  const showPopupAdd = () => {
    setPopupAdd(true);
  }

  const hidePopupAdd = () => {
    setPopupAdd(false);
  }
  useEffect(() => {
    axios.get('http://localhost:3000/api/admin/clients')
      .then(res => {
        console.log(res.data.clients);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (
    <div className='flex h-screen bg-[#404040]'>
      <Sidebar selected="1" className="fixed" />
      <div className='bg-[#F0F3F5] w-full h-screen'>
        <Topbar title="Utilisateurs" />
        <div className='w-full flex flex-col items-center'>
          <Searchbar placeholder="Rechercher une entreprise" />
        </div>
        <div className='flex mt-5 flex-col items-center gap-3'>
          <div className='flex justify-between w-[70%] items-center'>
            <div className='bg-white p-2 rounded-lg border border-[2px] border-solid border-primaryBlue pr-4 pl-4 cursor-pointer' onClick={() => showPopupAdd()}>
              <p className="text-[16px]">Ajouter Element</p>
            </div>
            <div className='flex gap-2'>
              <p>Filtre: <span className='text-accentOrange'>{choix}</span></p>
              <img src="../../../public/fleche.svg" alt="Expand" className='cursor-pointer' onClick={handleExpand} />
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
              <p className='w-full'>Nom</p>
              <p className='w-full'>Structure</p>
              <p className='w-full flex justify-center items-center'>Nombre Bilans</p>
              <p className='w-full flex justify-center'>État</p>
              <p className='w-full flex justify-center'>Action</p>
            </div>
            <InfoUtilisateur nom="Exemple" structure="Entreprise" nbrBilans={6} verifie={true} />
            <InfoUtilisateur nom="Exemple" structure="Association" nbrBilans={6} verifie={true} />
            <InfoUtilisateur nom="Exemple" structure="Entreprise" nbrBilans={6} verifie={false} />
            <InfoUtilisateur nom="Exemple" structure="Etat" nbrBilans={6} verifie={true} />
            <InfoUtilisateur nom="Exemple" structure="Entreprise" nbrBilans={6} verifie={false} />
            <InfoUtilisateur nom="Exemple" structure="Entreprise" nbrBilans={6} verifie={true} />
          </div>
        </div>
      </div>
      {popupAdd && (
        <div className='absolute flex items-center justify-center h-screen w-screen backdrop-blur-sm bg-gray-900 bg-opacity-50'>
          <Ajouter annuler={hidePopupAdd} />
        </div>
      )}
    </div>
  )
}

export default Utilisateurs;