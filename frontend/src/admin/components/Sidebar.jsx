import React from 'react'

function Sidebar(props) {
  // code to make the selected tab brighter, prop should be 1, 2 or 3
  const selected = parseInt(props.selected);
  const select = ["primaryBlue", "primaryBlue", "primaryBlue"];
  select[selected - 1] = "selectedBlue";
  return (
    <div className="bg-primaryBlue w-[270px] h-full">
      <div className='flex flex-col items-center'>
        <img src="../../../public/EcometerLogo.svg" alt="ECOmeter" className="w-[70px] h-[70px] mb-7 mt-5"/>
        <div className='flex justify-between gap-5 mb-5 cursor-pointer'>
          <img src="../../../public/profilePhoto.svg" alt="Admin Photo" className='w-[46px] h-[46px]'/>
          <div className='flex flex-col mb-5  '>
            <h1 className='font-bold text-accentYellow'>Admin</h1>
            <p className='text-[15px] text-specialGrey'>admin@gmail.com</p>
          </div>
        </div>
      </div>
        <h1 className='mb-3 ml-5 text-white text-[20px]'>Accès Rapide</h1>
        <div className={`flex gap-5 items-center bg-${select[0]} pt-2 pb-2 text-white cursor-pointer`}>
            <img src="../../../public/users.svg" alt="" className='h-[30px] w-[30px] ml-5'/>
            <p className='text-[16px]'>Utilisateurs</p>
        </div>
        <div className={`flex gap-5 items-center bg-${select[1]} pt-2 pb-2 text-white cursor-pointer`}>
            <img src="../../../public/database.svg" alt="" className='h-[30px] w-[30px] ml-5'/>
            <p className='text-[16px]'>Base de données</p>
        </div>
        <div className={`flex gap-5 items-center bg-${select[2]} pt-2 pb-2 text-white cursor-pointer`}>
            <img src="../../../public/system.svg" alt="" className='h-[30px] w-[30px] ml-5'/>
            <p className='text-[16px]'>Système</p>
        </div>
        <div className={`flex gap-5 items-center pt-2 pb-2 text-white cursor-pointer mt-[30vh]`}>
            <img src="../../../public/logout.svg" alt="" className='h-[30px] w-[30px] ml-5'/>
            <p className='text-[16px]'>Se déconnecter</p>
        </div>
    </div>
  )
}

export default Sidebar