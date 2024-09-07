'use client'

import { Fetchcategories } from '@/actions/db.actions'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const TargetsPage = () => {

    const [data, setdata] = useState([])


    useEffect(() => {
      const fetchdata = async () => {
        const res = await Fetchcategories()  
        setdata(res)
        console.log(res)
      }
      fetchdata()

    }, [])
    

    return (
        <section className='grid-a select-none '>
            {data && data.map((x, i) => {
                return (
                    <a
                        href={`${x.link}`}
                        target='_blank'
                        key={i}
                        className='flex flex-col bg-neutral-1000 p-3 bg-[#C8A1E0] rounded-xl border border-white hover:border-neutral-50'>
                        <section className='items-center flex justify-center'>
                            <img className='max-h-72'  src={x.imgurl} alt="" />
                        </section>
                        <section className='flex flex-col gap-y-2 p-2'>
                            <h1 className='nerko-one-regular text-2xl truncate '>{x.title} </h1>
                            <p className='text-sm text-zinc-100 truncate'>{x.desc}</p>
                        </section>
                    </a>
                )
            })}
        </section>
    )
}

export default TargetsPage