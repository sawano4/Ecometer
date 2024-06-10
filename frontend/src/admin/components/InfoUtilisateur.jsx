import React from 'react'
import Etat from './Etat'

function InfoUtilisateur(props) {
    // props needed: nom, Structure, nbrBilans, verifie, 
  return (
    <div className='flex justify-between p-3 flex-1'>
        <div className='w-full'>
            <p className='font-bold'>{props.nom}</p>
        </div>
        <div className='w-full'>
            <p className='text-specialGrey'>{props.structure}</p>
        </div>
        <div className='w-full flex justify-center items-center'>
            <p className='text-specialGrey'>{props.nbrBilans}</p>
        </div>
        <div className='w-full flex justify-center items-center'>
            <Etat verifie={props.verifie}/>
        </div>
        <div className='w-full flex justify-center items-center'>
            <img src="../../../public/modify.svg" alt="Modify" className='cursor-pointer w-[19px] h-[19px]' onClick={() => {props.show();props.modify()}}/>
        </div>
    </div>
  )
}

export default InfoUtilisateur