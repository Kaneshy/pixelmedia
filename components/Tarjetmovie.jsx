'use client'

import { Fetchmovie } from '@/actions/db.actions'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaPlay } from "react-icons/fa";


const TargetsMovie = () => {


    const [data, setdata] = useState([])


    useEffect(() => {
        const fetchdata = async () => {
            const res = await Fetchmovie()
            setdata(res)
        }
        fetchdata()

    }, [])

    return (
        <section className='grid-b select-none '>
            {data && data.map((x, i) => {
                return (
                    <div
                        key={i}
                        target='_blank'
                        className='flex relative bg-zing-950 flex-col bg-[#C8A1E0] p-3 rounded-xl border border-white '>
                        <section className='items-center flex justify-center'>
                            <img className='max-h-72' src={x.imgurl} alt="" />
                        </section>

                        {/* Text section with uniform size */}
                        <section className='flex flex-col gap-y-2 p-2'>
                            <h1 className='text-body-bold font-bold truncate'>{x.title}</h1>
                            <h1 className='text-sm text-zinc-100 truncate'>{x.desc}</h1>
                        </section>

                        <section className='text-sm flex flex-col font-bold text-white'>
                            <a
                                className=' p-2 rounded-full   text-center '
                                target='_blank'
                                href={`${x.link}`}
                            >
                                <div className='flex py-2 px-4 gap-4 bg-white text-zinc-700 text-xs hover:bg-slate-400 items-center justify-between rounded-full '>
                                    <FaPlay />
                                    <div className='flex items-start gap-2'>
                                        <p className=''>Server</p>
                                        <p>English</p>
                                    </div>
                                </div>

                            </a>
                            {x.linkb && (
                                <a
                                className=' p-2 rounded-full   text-center '
                                target='_blank'
                                href={`${x.linkb}`}
                            >
                                <div className='flex py-2 px-4 gap-4 bg-white text-zinc-700 text-xs hover:bg-slate-400 items-center justify-between rounded-full '>
                                    <FaPlay />
                                    <div className='flex items-start gap-2'>
                                        <p className=''>Server</p>
                                        <p>Spanish</p>
                                    </div>
                                </div>

                            </a>
                            )}
                            {x.linkc && (
                                <a
                                className=' p-2 rounded-full   text-center '
                                target='_blank'
                                href={`${x.linkc}`}
                            >
                                <div className='flex py-2 px-4 gap-4 bg-white text-zinc-700 text-xs hover:bg-slate-400 items-center justify-between rounded-full '>
                                    <FaPlay />
                                    <div className='flex items-start gap-2'>
                                        <p className=''>Server</p>
                                        <p>Spanish</p>
                                    </div>
                                </div>

                            </a>
                            )}
                        </section>

                        <div className='p-2 text-xs absolute opacity-80 top-0 right-0 rounded-full font-bold bg-[#e75f55]'>
                            {x.rating}/10
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default TargetsMovie