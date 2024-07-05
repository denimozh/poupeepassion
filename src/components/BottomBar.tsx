import Link from 'next/link'
import React from 'react'
import { BiBookmark } from 'react-icons/bi'
import { GoHome } from 'react-icons/go'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { IoCreateOutline, IoPaperPlaneOutline } from 'react-icons/io5'

const BottomBar = () => {
    return (
        <div className='z-50 flex justify-between items-center w-full sticky bottom-0 rounded-t-[20px] bg-dark-2 text-primary px-5 py-4 md:hidden'>
            <Link href={"/"} className="active:bg-primary gap-4 flex items-center py-4 px-3 hover:bg-primary text-lg rounded-lg hover:font-semibold">
              <GoHome className='text-2xl'/>
            </Link>
            <Link href={"/explore"} className="gap-4 flex items-center py-3 px-3 hover:bg-bg-primary text-lg rounded-lg hover:font-semibold">
              <HiOutlineSquares2X2 className='text-2xl'/>
            </Link>
            <Link href={"/saved"} className="gap-4 flex items-center py-3 px-3 hover:bg-slate-100 text-lg rounded-lg hover:font-semibold">
              <BiBookmark className='text-2xl'/>
            </Link>
            <Link href={"/messages"} className="gap-4 flex items-center py-3 px-3 hover:bg-primary text-lg rounded-lg hover:font-semibold">
              <IoPaperPlaneOutline className='text-2xl'/>
            </Link>
            <Link href={"/create-post"} className="gap-4 flex items-center py-3 px-3 hover:bg-primary text-lg rounded-lg hover:font-semibold">
              <IoCreateOutline className='text-2xl'/>
            </Link>
        </div>
      )
}

export default BottomBar