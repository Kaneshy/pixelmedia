'use client'
import React, { useState } from 'react'
import Categoriespopup from './categoriespopup'
import { FaPlus } from "react-icons/fa";
import Websitespopup from './websitespopup';


const WebsitesComp = () => {

  const [isopen, setisopen] = useState(false)

  return (
    <main >
      <button onClick={()=>setisopen(!isopen)} 
      className='fixed bottom-8 right-8 p-4 bg-zinc-950 hover:bg-zinc-900 rounded-xl bg-red'>
        <FaPlus size={14}/>
      </button>
      {isopen && (
        <div>
          <Websitespopup isopen={isopen} setisopen={setisopen} />
        </div>
      )}
    </main>
  )
}

export default WebsitesComp