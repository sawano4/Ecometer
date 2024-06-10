import React from 'react'
import Input from '../components/Input';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';

function Modifier(props) {
    const user = props.user;
    // props needed: name, email, annuler, user
  return (
    <div className='bg-[#ffffff] h-[600px] w-[850px] rounded-2xl px-12 py-7 flex flex-col justify-between'>
        <div>
          <h1 className='text-2xl font-bold mb-3'>Modifier Compte</h1>
          <div className='flex flex-col justify-between gap-2 mb-5'>
              <h2 className='text-[18px]'>Profil</h2>
              <Input type='text' label="Nom de l'organisation" placeholder={user.name}/>
              <h2 className='text-[18px]'>Sécurité</h2>
              <Input type="email" label="Email" placeholder={user.email}/>
              <Input type="password" label="Nouveau mot de passe" placeholder="Tapez le nouveau mot de passe"/>
          </div>
          <div>
              <h2 className='text-[18px] mb-2'>Actions du compte</h2>
              <div className='flex justify-between gap-2'>
                <Button background="#2094F3" color="#ffffff" text="Voir profil"/>
                <Button background="#F77F00" color="#ffffff" text="Désactiver"/>
                <Button background="#D62828" color="#ffffff" text="Supprimmer"/>
              </div>
          </div>
        </div>
        <div className='flex gap-6 mx-4 mt-20 justify-between'>
          <div className='w-full' onClick={props.annuler}>
            <Button text="Annuler" background="#ffffff" color="#D62828" onClick={props.annuler}/>
          </div>
          <Button text="Valider" background="#003049" color="#ffffff"/>
        </div>
    </div>
  )
}

export default Modifier