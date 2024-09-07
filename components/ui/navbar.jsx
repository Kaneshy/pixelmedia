import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='p-4 text-white text-xl flex lobster-regular font-bold bg-[#674188] justify-between'>
            <Link href={'/'}>PIXELMEDIA</Link>
            <div className='flex gap-4 '>
                <Link className='hover:text-[#C8A1E0] px-4 rounded-full' href={'/series'}>SERIES</Link>
                <Link className='hover:text-[#C8A1E0] px-4 rounded-full' href={'/movies'}>MOVIES</Link>
            </div>

        </nav>
    )
}

export default Navbar