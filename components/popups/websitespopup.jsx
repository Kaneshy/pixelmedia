'use client'
import { addnewWebsite } from '@/actions/categories.action'
import React, { useEffect, useRef, useState } from 'react'
import { IoMdClose } from 'react-icons/io';


const Websitespopup = ({ isopen, setisopen }) => {

    const [previewImage, setPreviewImage] = useState("");
    const formRef = useRef(null)

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                setisopen(false); // Close the form
            }
        };

        // Add event listener to detect clicks outside the form
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up event listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setisopen]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">

            <form
                ref={formRef}
                action={addnewWebsite} className="text-white uppercase nerko-one-regular  centered-div flex flex-col gap-y-4 p-6 bg-zinc-950 rounded-md shadow-lg">
                <div
                    onClick={() => setisopen(!isopen)}
                    className='absolute top-2 right-2 p-2 rounded-full hover:scale-110'>
                    <IoMdClose size={24} />

                </div>

                <label className="text-slate-200 border-b border-slate-400 font-bold p-2 text-center"> NEW CATEGORIE </label>

                <label htmlFor="image"
                    className="mt-4 text-sm text-center bg-[#674188] text-white py-2 px-4 rounded-md hover:bg-[#9d66cc] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                    Upload Image
                </label>
                <div>

                    <input
                        type="file"
                        id="image"
                        onChange={handleImageChange}
                        name="image"
                        accept="image/*"
                        className="border-2 hidden border-slate-300 rounded-md p-2 text-black focus:ring-2 focus:ring-blue-400"
                    />

                    {previewImage && (
                        <img src={previewImage} alt="Selected" className="max-w-full h-auto" />
                    )}


                </div>


                <label htmlFor="title" className="text-slate-200 text-sm font-medium">
                    Title :
                </label>
                <input
                    placeholder='Netflix'
                    id="title"
                    name="title"
                    className="border-2 min-h-8 border-slate-300 rounded-md p-2 text-black focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="link" className="text-slate-200 text-sm font-medium">
                    Link :
                </label>
                <input
                    placeholder='anime,music,cover'
                    id="link"
                    name="link"
                    className="border-2 min-h-8 border-slate-300 rounded-md p-2 text-black focus:ring-2 focus:ring-blue-400"

                />

                <label htmlFor="desc" className="text-slate-200 text-sm font-medium">
                    Description :
                </label>
                <textarea
                    placeholder='Movies - series - audio latino'
                    id="desc"
                    name="desc"
                    className="border-2 min-h-8 border-slate-300 rounded-md p-2 text-black focus:ring-2 focus:ring-blue-400"

                />

                <button
                    type="submit"
                    className="mt-4 bg-[#674188] text-white py-2 px-4 rounded-md hover:bg-[#9d66cc] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                    Create
                </button>
            </form>
        </div>
    )
}

export default Websitespopup