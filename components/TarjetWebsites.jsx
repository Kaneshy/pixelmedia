'use client'

import { deleteWebsite, FetchWebsites } from '@/actions/db.actions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'


const TargetsWebsitePage = () => {

    const [data, setdata] = useState([])
    const router = useRouter()


    useEffect(() => {
        const fetchdata = async () => {
            const res = await FetchWebsites()
            setdata(res)
            console.log(res)
        }
        fetchdata()

    }, [])

    const handledelete = async (id) => {
        const res = await deleteWebsite(id)
        if (res === true) {
            console.log('deleted succefully')
        }
    }


    return (
        <section className='grid-a select-none '>
            {data && data.map((x, i) => {
                return (
                    <main
                        target='_blank'
                        key={i}
                        className='flex relative flex-col bg-neutral-1000 p-3 bg-[#C8A1E0] rounded-xl border border-white hover:border-neutral-50'>
                        <a
                            href={`${x.link}`}
                            target='_blank'
                            className='items-center flex justify-center'>
                            <img className='max-h-72' src={x.imgurl} alt="" />
                        </a>
                        <section className='flex flex-col gap-y-2 p-2'>
                            <h1 className='nerko-one-regular text-2xl truncate '>{x.title} </h1>
                            <p className='text-sm text-zinc-100 truncate'>{x.desc}</p>
                        </section>
                        <div
                            onClick={() => handledelete(x._id)}
                            className='absolute bottom-2 right-2 p-2 rounded-full hover:scale-110 hover:text-red-500'>
                            <IoMdClose size={24} />

                        </div>
                    </main>
                )
            })}
        </section>
    )
}

export default TargetsWebsitePage