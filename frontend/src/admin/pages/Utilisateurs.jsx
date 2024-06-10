import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Ajouter from '../popups/Ajouter'
import Modifier from '../popups/Modifier'
import Profil from '../popups/Profil'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Searchbar from '../components/Searchbar'
import InfoUtilisateur from '../components/InfoUtilisateur'

function Utilisateurs() {

  const [open, setOpen] = useState(false);
  const [choix, setChoix] = useState("Tous");
  const [users, setUsers] = useState([]);
  const [popupAdd, setPopupAdd] = useState(false);
  const [popupMod, setPopupMod] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const filters = ["Tous", "Non vérifiés", "Vérifiés", "Employés < 10", "10 < Employés < 100", "Employés > 100"]

  const updateInputValue = (s) => {
    setInputValue(s);
    console.log(s);
    setFilteredUsers(users.filter(user => user.name.toLowerCase().startsWith(inputValue.toLowerCase())));
  }

  const handleExpand = () => {
    open ? setOpen(false) : setOpen(true);
  }

  const handleClick = (e) => {
    setOpen(false);
    setChoix(e.target.innerText);
    // switch (choix) {
    //   case "Tous":
    //     filteredUsers = [...users]; 
    //   case "Non vérifiés":
    //     setFilteredUsers(filteredUsers.filter(user => (!user.verified)));
    //     break;
    //   case "Vérifiés":
    //     setFilteredUsers(filteredUsers.filter(user => (user.verified)));
    //     break;
    //   case "Employés < 10":
    //     setFilteredUsers(filteredUsers.filter(user => (user.numberOfEmployees <= 10)));
    //     break;
    //   case "10 < Employés < 100":
    //     setFilteredUsers(filteredUsers.filter(user => (user.numberOfEmployees > 10 && user.numberOfEmployees <= 100)));
    //     break;
    //   case "Employés > 100":
    //     setFilteredUsers(filteredUsers.filter(user => (user.numberOfEmployees > 100)));
    //     break;
    // }
  }

  const showPopupAdd = () => {
    setPopupAdd(true);
  }

  const hidePopupAdd = () => {
    setPopupAdd(false);
  }

  const showPopupMod = () => {
    setPopupMod(true);
  }

  const hidePopupMod = () => {
    setPopupMod(false);
  }

  const modifySelectedUser = (i, filtered) => {
    filtered ?
    setSelectedUser(filteredUsers[i]) : setSelectedUser(users[i]);
  }

  useEffect(() => {
    axios.get('http://localhost:3000/api/admin/clients')
      .then(res => {
        setUsers(res.data.clients);
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
          <Searchbar placeholder="Rechercher une entreprise" update={updateInputValue}/>
        </div>
        <div className='flex mt-5 flex-col items-center gap-3'>
          <div className='flex justify-between w-[70%] items-center'>
            <div className='bg-white p-2 rounded-lg border border-[2px] border-solid border-primaryBlue pr-4 pl-4 cursor-pointer' onClick={() => showPopupAdd()}>
              <p className="text-[16px]">Ajouter un utilisateur</p>
            </div>
            <div className='flex gap-2'>
              <p>Filtre: <span className='text-accentOrange'>{choix}</span></p>
              <img src="../../../public/fleche.svg" alt="Expand" className='cursor-pointer' onClick={handleExpand} />
              {open ? (
                <div className='absolute bg-[#ffffff] z-10  rounded-lg cursor-pointer'>
                  {filters.map((filter, index) => (
                    <div className="w-full text-center p-2 border border-solid hover:bg-blue-600 hover:text-white" onClick={(e) => handleClick(e)} key={index}>
                      <p>{filter}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          <div className='w-[80%] max-h-[400px] bg-white rounded-xl px-5 overflow-y-scroll shadow-xl'>
            <div className='flex justify-between p-3 text-specialGrey'>
              <p className='w-full'>Nom</p>
              <p className='w-full'>Structure</p>
              <p className='w-full flex justify-center items-center'>Employés</p>
              <p className='w-full flex justify-center'>État</p>
              <p className='w-full flex justify-center'>Action</p>
            </div>
            {((users.length == 0) || ((inputValue != "") && (filteredUsers.length == 0))) && (
              <div className='bg-white w-full flex items-center justify-center p-4'>
                <p className='text-specialGrey'>Aucun utilisateur trouvé</p>
              </div>
            )}
            {(inputValue == "")  ?
              users.map((user, index) => (
                <InfoUtilisateur key={index} nom={user.name} structure={user.structure} nbrBilans={user.numberOfEmployees} verifie={user.verified} show={showPopupMod} modify={() => {modifySelectedUser(index, false)}}/>
              )) :
              filteredUsers.map((user, index) => (
                <InfoUtilisateur key={index} nom={user.name} structure={user.structure} nbrBilans={user.numberOfEmployees} verifie={user.verified} show={showPopupMod} modify={() => {modifySelectedUser(index, true)}}/>
              ))}
          </div>
        </div>
      </div>
      {popupAdd && (
        <div className='absolute flex items-center justify-center h-screen w-screen backdrop-blur-sm bg-gray-900 bg-opacity-50'>
          <Ajouter annuler={hidePopupAdd} />
        </div>
      )}
      {popupMod && (
        <div className='absolute flex items-center justify-center h-screen w-screen backdrop-blur-sm bg-gray-900 bg-opacity-50'>
          <Modifier annuler={hidePopupMod} user={selectedUser} />
        </div>
      )}
    </div>
  )
}

export default Utilisateurs;