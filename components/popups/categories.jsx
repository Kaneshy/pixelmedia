'use client'
import React, { useState } from 'react'
import Categoriespopup from './categoriespopup'
import { FaPlus } from "react-icons/fa";


const CategoriePage = () => {

  const [isopen, setisopen] = useState(false)

  return (
    <main >
      <button onClick={()=>setisopen(!isopen)} 
      className='fixed bottom-8 right-8 p-4 bg-zinc-950 hover:bg-zinc-900 rounded-xl bg-red'>
        <FaPlus size={14}/>
      </button>
      {isopen && (
        <div>
          <Categoriespopup />
        </div>
      )}
    </main>
  )
}

export default CategoriePage