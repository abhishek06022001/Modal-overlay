import React from 'react'
import Overlay from './Overlay'

function Modal({ setDisplay, setText }) {
    return (
        <>
            <div
                className='absolute bg-gray-400 bg-opacity-50 min-h-screen w-screen
              
                '
                onClick={(() => setDisplay(false))}
            >


            </div>
            <div
                className='absolute z-20'
            >
                <div
                    className='bg-white   text-red-500 h-64 w-64 rounded-sm 
                    flex flex-col justify-between 
                    '
                >
                    <button
                        className='bg-red-700 p-4 w-fit text-white'
                        onClick={(() => setDisplay(false))}
                    >x</button>
                    <div
                        className='p-10'
                    >
                        Click the button below to accept the amazin offer !
                    </div>
                    <button
                        className='bg-emerald-700 text-white rounded-sm m-3'
                        onClick={() => {
                            setText("Offer Accepted");
                            setDisplay(false)
                        }}
                    >Accept The Offer</button>
                </div>
            </div>

        </>
    )
}

export default Modal