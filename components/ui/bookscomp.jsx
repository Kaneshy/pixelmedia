import React from 'react'
import { IoLink } from "react-icons/io5";

const Bookscomp = () => {
    return (
        <section className="text-center text-black select-none bg-[#fae6ce] p-8 flex flex-col gap-4 items-center justify-center ">
            <h1 className="mt-12 text-3xl font-bold anton-regular   uppercase" >Personal Library</h1>
            <h2 className=" anton-regular text-sm text-neutral-700 " >A place for Simon Tofield to share his creative diary, often showcasing his life with 6 cats.</h2>
            <img src='https://res.cloudinary.com/dztz492su/image/upload/v1726447959/books/nsosowtmvdkkmneappfa.png' className="w-400 rounded-t-xl h-full object-cover" alt="" />
            <a href="https://personal-encyclopedia.vercel.app/" target="_blank" className="flex gap-4 items-center justify-center">
                <IoLink size={24} />
                <p className=" anton-regular text-sm text-neutral-700 " >Personal library </p>
            </a>

        </section>
    )
}

export default Bookscomp