'use client'
import { addnewcinema } from '@/actions/categories.action'
import React, { useEffect, useRef, useState } from 'react'


const Cinemapopup = ({ isopen, setisopen }) => {

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
                onSubmit={addnewcinema}
                className="text-white relative scrollbar-b flex flex-col gap-y-4 p-6 bg-zinc-950 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto"
            >
                <div className='absolute top-2 right-2 p-2 rounded-full bg-neutral-400'>x</div>
                <label className="text-slate-200 font-bold border-b border-slate-400 pb-2 text-center text-lg">NEW CATEGORY</label>

                <label
                    htmlFor="image"
                    className="mt-4 bg-blue-500 text-center text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                    Upload Image
                </label>
                <div className="flex flex-col items-center">
                    <input
                        type="file"
                        id="image"
                        onChange={handleImageChange}
                        name="image"
                        accept="image/*"
                        className="hidden"
                    />
                    {previewImage && (
                        <img src={previewImage} alt="Selected" className="max-w-full h-auto rounded-md shadow-lg mb-4" />
                    )}
                </div>

                <select
                    name="options"
                    className="border-2 rounded-md p-2 text-zinc-500 bg-zinc-900 w-full focus:ring-2 focus:ring-blue-400"
                >
                    <option value="movie">Movie</option>
                    <option value="serie">Series</option>
                </select>

                <label htmlFor="title" className="text-slate-200 font-medium">Title:</label>
                <textarea
                    placeholder="Futurama"
                    id="title"
                    name="title"
                    className="border-2 border-slate-300 rounded-md p-2 min-h-10 text-black w-full focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="link" className="text-slate-200 font-medium">Link:</label>
                <input
                    placeholder="futurama.com"
                    id="link"
                    name="link"
                    className="border-2 border-slate-300 rounded-md p-2 text-black w-full focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="linkb" className="text-slate-200 font-medium">Link B:</label>
                <input
                    placeholder="futurama.com"
                    id="linkb"
                    name="linkb"
                    className="border-2 border-slate-300 rounded-md p-2 text-black w-full focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="linkc" className="text-slate-200 font-medium">Link C:</label>
                <input
                    placeholder="futurama.com"
                    id="linkc"
                    name="linkc"
                    className="border-2 border-slate-300 rounded-md p-2 text-black w-full focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="desc" className="text-slate-200 font-medium">Description:</label>
                <textarea
                    placeholder="Audio Latino"
                    id="desc"
                    name="desc"
                    className="border-2 border-slate-300 rounded-md p-2 text-black w-full focus:ring-2 focus:ring-blue-400 min-h-[100px]"
                />

                <label htmlFor="season" className="text-slate-200 font-medium">Season:</label>
                <input
                    type="number"
                    placeholder="4"
                    id="season"
                    name="season"
                    className="border-2 border-slate-300 rounded-md p-2 text-black w-full focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="episode" className="text-slate-200 font-medium">Episode:</label>
                <input
                    type="number"
                    placeholder="1"
                    id="episode"
                    name="episode"
                    className="border-2 border-slate-300 rounded-md p-2 text-black w-full focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="rating" className="text-slate-200 font-medium">Rating:</label>
                <input
                    type="number"
                    placeholder="9.2"
                    id="rating"
                    name="rating"
                    className="border-2 border-slate-300 rounded-md p-2 text-black w-full focus:ring-2 focus:ring-blue-400"
                />

                <button
                    type="submit"
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full"
                >
                    Create
                </button>
            </form>
        </div>
    )
}

export default Cinemapopup