import React from 'react'
import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Searchbar from '../components/Searchbar'
import Element from '../components/Element'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ModifierCollection(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [choix, setChoix] = useState("Tous");
  const [factors, setFactors] = useState([]);
  const [error, setError] = useState(null);
  // const categorie = "Achat de Biens";
  const { categorie } = location.state || {};
  const handleExpand = () => {
    open ? setOpen(false) : setOpen(true);
  }

  const handleClick = (e) => {
    setOpen(false);
    setChoix(e.target.innerText)
  }

  // useEffect(() => {
  //   if (categorie) {
  //     axios.get('http://localhost:3000/api/admin/getfactors', {
  //       params: { selectedCategorie: categorie }
  //     })
  //       .then(response => {
  //         setFactors(response.data.factors);
  //         console.log(response);  
  //       })
  //       .catch(error => {
  //         setError(error.response ? error.response.data.error : 'An error occurred');
  //       });
  //   }
  // }, [categorie]);


  useEffect(() => {
    if (categorie) {
      axios.get(`http://localhost:3000/api/admin/getfactors?selectedCategorie=${categorie}`)
        .then(response => {
          setFactors(response.data.factors);
          console.log(response);
        })
        .catch(error => {
          setError(error.response ? error.response.data.error : 'An error occurred');
          console.log(error); // Additional logging for debugging
        });
    }
  }, [categorie]);
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
                <div className='bg-white p-2 rounded-lg border border-[2px] border-solid border-primaryBlue pr-2 pl-2 cursor-pointer' onClick={() => {navigate('/admin/bdd')}}>
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
            {/* {factors.map((factor, index) => (
                <Element key={index} name={factor}/>
              ))} */}
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