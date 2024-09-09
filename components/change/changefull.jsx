import { DeleteAction, EditCinema, editEpisodeNumber } from '@/actions/db.actions';
import React, { useEffect, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation';
import { MdDelete } from "react-icons/md";



const ChangeFull = ({ data, setischange, ischange }) => {
    const formRef = useRef(null)
    const [imgFetched, setimgFetched] = useState('')
    const [previewImage, setPreviewImage] = useState("");
    const [inputs, setInputs] = useState({});
    const [preValue, setPreValue] = useState({})
    const router = useRouter()

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setimgFetched(imageUrl);
            setPreValue((prev) => {
                return { ...prev, [event.target.name]: event.target.value };
            });
        }
    };


    useEffect(() => {
        setimgFetched(data.imgurl)
        setPreValue(data)
        console.log('runign', preValue)

        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                setischange(false); // Close the form
            }
        };

        // Add event listener to detect clicks outside the form
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up event listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setischange]);

    const handleChange = (e) => {
        setPreValue((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleformdata = async (formData) => {
        console.log(preValue)
        const b = formData.get('title')
        const res = await EditCinema(preValue)
        if (res === true) {
            setischange(!ischange)
            router.refresh()
            console.log('refreshing')
        }
        console.log(b)
    }

    const handledelete = async () => {
        const res = await DeleteAction(data._id)
        if(res === true ) {
            setischange(!ischange)
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50 overflow-auto">
            <form
                ref={formRef}
                action={handleformdata}
                className="text-zinc-800  relative scrollbar-b flex  flex-col gap-y-4 p-6 bg-[#F8EDE3] rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto"
            >
                <div
                    onClick={() => setischange(!ischange)}
                    className='absolute top-2 right-2 p-2 rounded-full hover:scale-110'>
                    <IoMdClose size={24} />

                </div>
                <div
                    onClick={handledelete}
                    className='absolute flex items-center  top-4 left-2 p-2 rounded-full hover:text-red-700'>
                    <MdDelete size={24} />

                </div>

                <label className=" uppercase nerko-one-regular border-b border-slate-400 pb-2 text-center text-lg">NEW CATEGORY</label>

                <label
                    htmlFor="image"
                    className="mt-4 uppercase nerko-one-regular text-white bg-[#C5705D] text-center py-2 px-4 rounded-md hover:bg-[#ce998d] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                    Upload Image
                </label>
                <div className="flex  flex-col items-center">
                    <input
                        type="file"
                        id="image"
                        onChange={handleImageChange}
                        name="image"
                        accept="image/*"
                        className="hidden"
                    />
                    <img src={imgFetched} alt="Selected" className="max-w-full h-auto rounded-md shadow-lg mb-4" />
                </div>

                <select
                    name="options"
                    className="border-2 uppercase nerko-one-regular rounded-md p-2  bg-[#C5705D] w-full  focus:ring-[#C5705D]"
                >
                    <option value="movie">Movie</option>
                    <option value="serie">Series</option>
                </select>

                <label htmlFor="title" className="uppercase nerko-one-regular">Title:</label>
                <textarea
                    placeholder="Futurama"
                    id="title"
                    name="title"
                    onChange={handleChange}
                    value={preValue.title}
                    className="border-2 border-slate-300 rounded-md p-2 min-h-10 text-black w-full focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="link" className="uppercase nerko-one-regular">Link:</label>
                <input
                    placeholder="futurama.com"
                    id="link"
                    name="link"
                    onChange={handleChange}
                    value={preValue.link}
                    className="border-2 border-slate-300 rounded-md p-2 text-black w-full focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="linkb" className=" uppercase nerko-one-regular">Link B:</label>
                <input
                    placeholder="futurama.com"
                    id="linkb"
                    name="linkb"
                    onChange={handleChange}
                    value={preValue.linkb}
                    className="border-2 border-slate-300 rounded-md p-2 text-black w-full focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="linkc" className="uppercase nerko-one-regular">Link C:</label>
                <input
                    placeholder="futurama.com"
                    id="linkc"
                    name="linkc"
                    onChange={handleChange}
                    value={preValue.linkc}
                    className="border-2 border-slate-300 rounded-md p-2 text-black w-full focus:ring-2 focus:ring-blue-400"
                />


                <label htmlFor="desc" className="uppercase nerko-one-regular">Description:</label>
                <textarea
                    placeholder="Audio Latino"
                    id="desc"
                    name="desc"
                    onChange={handleChange}
                    value={preValue.desc}
                    className="border-2 border-slate-300 rounded-md p-2 text-black w-full focus:ring-2 focus:ring-blue-400 min-h-[100px]"
                />

                {data.season && (
                    <>

                        <label htmlFor="season" className="uppercase nerko-one-regular">Season:</label>
                        <input
                            type="number"
                            placeholder="4"
                            id="season"
                            name="season"
                            onChange={handleChange}
                            value={preValue.season}
                            className="border-2 border-slate-300 rounded-md p-2 text-black w-full focus:ring-2 focus:ring-blue-400"
                        />
                    </>
                )}
                {data.episode && (
                    <>
                        <label htmlFor="episode" className="uppercase nerko-one-regular">Episode:</label>
                        <input
                            type="number"
                            placeholder="1"
                            id="episode"
                            name="episode"
                            onChange={handleChange}
                            value={preValue.episode}
                            className="border-2 border-slate-300 rounded-md p-2 text-black w-full focus:ring-2 focus:ring-blue-400"
                        />
                    </>
                )}

                <label htmlFor="rating" className=" uppercase nerko-one-regular">Rating:</label>
                <input
                    type="number"
                    placeholder="9.2"
                    id="rating"
                    name="rating"
                    onChange={handleChange}
                    value={preValue.rating}
                    className="border-2 border-slate-300 rounded-md p-2 text-black w-full focus:ring-2 focus:ring-blue-400"
                />

                <button
                    type="submit"
                    className="mt-4 uppercase nerko-one-regular bg-[#C5705D] text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full"
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default ChangeFull;