'use client'
import { addnewcategories } from '@/actions/categories.action'
import React, { useState } from 'react'


const Categoriespopup = () => {

    const [previewImage, setPreviewImage] = useState("");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
        }
    };

    return (
        <form action={addnewcategories} className="text-white centered-div flex flex-col gap-y-4 p-6 bg-zinc-950 rounded-md shadow-lg">
            <label className="text-slate-200 border-b border-slate-400 font-bold p-2 text-center"> NEW CATEGORIE </label>

            <label htmlFor="image"
                className="mt-4 text-sm text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
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
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
                Create
            </button>
        </form>
    )
}

export default Categoriespopup