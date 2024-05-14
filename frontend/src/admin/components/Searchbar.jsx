import React from 'react'

function Searchbar(props) {
  return (
    <div className='w-[65%] h-[55px] rounded-xl border border-solid border-[2px] border-primaryBlue px-[25px] py-[10px] text-center cursor-pointer flex items-center bg-white mt-10'>
        <img src="../../../public/Search.svg" alt="Search" className='h-[24px] w-[24px] mr-5' />
        <input type="text"  placeholder={props.placeholder} className='border-none ring-transparent outline-none w-full' onChange={(e) => {props.update(e.target.value)}}/>
    </div>
  )
}

export default Searchbar