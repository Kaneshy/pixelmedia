import { editEpisodeNumber } from '@/actions/db.actions';
import React, { useEffect, useRef, useState } from 'react';

const ChangePage = ({ isopen, setisopen, seasonD, episodeD, idK }) => {
    const [season, setSeason] = useState(seasonD || '');
    const [episode, setEpisode] = useState(episodeD || '');
    const formRef = useRef(null)

    const handleEditNumber = async (event) => {
        console.log(seasonD, episodeD)
        event.preventDefault(); // Prevent the default form submission
        const formData = new FormData(event.target); // Get form data


        const epi = formData.get('episode');
        const sea = formData.get('season');

        try {
            const res = await editEpisodeNumber(idK, epi, sea)
            if (res === true) {
                setisopen(!isopen)
            }
        } catch (error) {
            console.log(error)
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <form
             ref={formRef} 
                onSubmit={handleEditNumber}
                className="bg-[#C8A1E0] text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-xl font-semibold text-center mb-4 text-purple-900">Update Season & Episode</h2>

                <label htmlFor="season" className="text-gray-700 text-sm font-medium">
                    Season :
                </label>
                <input
                    type='number'
                    value={season}
                    onChange={(e) => setSeason(e.target.value)}
                    placeholder='1'
                    id="season"
                    name="season"
                    className="border-2 min-h-8 border-gray-300 rounded-md p-2 text-gray-800 w-full focus:ring-2 focus:ring-blue-400 mb-4"
                />

                <label htmlFor="episode" className="text-gray-700 text-sm font-medium">
                    Episode :
                </label>
                <input
                    type='number'
                    value={episode}
                    onChange={(e) => setEpisode(e.target.value)}
                    placeholder='1'
                    id="episode"
                    name="episode"
                    className="border-2 min-h-8 border-gray-300 rounded-md p-2 text-gray-800 w-full focus:ring-2 focus:ring-blue-400 mb-4"
                />

                <button
                    type="submit"
                    className="w-full mt-4 bg-[#e75f55] text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default ChangePage;