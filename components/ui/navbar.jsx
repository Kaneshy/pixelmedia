'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";


const Navbar = () => {
    const [isopen, setisopen] = useState(false)
    return (
        <nav className='p-4 z-10 sticky top-0 text-white text-xl flex lobster-regular font-bold bg-[#674188] justify-between'>
            <Link href={'/'}>PIXELMEDIA</Link>

            {/* Links for larger screens */}
            <div className='flex gap-4 max-sm:hidden '>
                <Link className='hover:text-[#C8A1E0] lg:px-4 rounded-full' href={'/series'}>SERIES</Link>
                <Link className='hover:text-[#C8A1E0] lg:px-4 rounded-full' href={'/movies'}>MOVIES</Link>
                <Link className='hover:text-[#C8A1E0] lg:px-4 rounded-full' href={'/animes'}>ANIMES</Link>
                <Link className='hover:text-[#C8A1E0] lg:px-4 rounded-full' href={'/websites'}>WEBSITES</Link>
            </div>

            {/* Menu for smaller screens */}
            <div className='sm:hidden flex items-center'>
                <div
                    onClick={() => setisopen(!isopen)}
                    className='p-2 rounded-full bg-opacity-10 hover:bg-purple-600'>
                    <IoMenuSharp />
                </div>
                {isopen && (
                    <div className='fixed w-full top-16 left-0 bg-[#674188] p-4'>
                        <div className='flex flex-col gap-2'>
                            <Link className='text-white p-2 bg-purple-500 rounded-md hover:bg-purple-700' href={'/series'}>SERIES</Link>
                            <Link className='text-white p-2 bg-purple-500 rounded-md hover:bg-purple-700' href={'/movies'}>MOVIES</Link>
                            <Link className='text-white p-2 bg-purple-500 rounded-md hover:bg-purple-700' href={'/websites'}>WEBSITES</Link>
                            <Link className='text-white p-2 bg-purple-500 rounded-md hover:bg-purple-700' href={'/animes'}>ANIMES</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar