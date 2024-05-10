import React from 'react'

function Etat(props) {
    if (props.verifie) {
        return (

            <div className='px-5 py-2 bg-statusBlue rounded-lg text-white w-[70%] flex justify-center items-center'>
                <p >vérifié</p>
            </div>
          )
    } else {
        return (

            <div className='px-5 py-2 bg-secondaryRed rounded-lg text-white w-[70%] flex justify-center items-center'>
                <p>Non vérifié</p>
            </div>
          )
    }
}

export default Etat