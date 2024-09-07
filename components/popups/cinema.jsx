'use client'
import React, { useState } from 'react'
import Cinemapopup from './cinemapopup'
import { FaPlus } from "react-icons/fa";

const CinemaPage = () => {
    const [isopen, setisopen] = useState(false)

    return (
        <main >
            <button onClick={() => setisopen(!isopen)}
                className='fixed bottom-8 right-8 p-4 bg-zinc-950 hover:bg-zinc-900 rounded-xl bg-red'>
                 <FaPlus size={14}/>
            </button>
            {isopen && (
                <div className=''>
                    <Cinemapopup isopen={isopen} setisopen={setisopen} />
                </div>
            )}
        </main>
    )
}

export default CinemaPage