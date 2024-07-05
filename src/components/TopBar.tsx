import Link from 'next/link'
import React from 'react'
import { IoIosLogOut } from 'react-icons/io'
import DarkModeLogo from './DarkModeLogo'

const TopBar = () => {
  return (
    <div className='sticky top-0 z-50 md:hidden bg-dark-2 w-full'>
      <div className='flex flex-row justify-between items-center py-3 px-4 bg-dark-2'>
        <Link href="/" className="gap-3 items-center flex flex-row">
            <DarkModeLogo width={50} height={60} text='text-2xl text-white'/>
        </Link>

        <div className='flex gap-4'>
          <div className='flex gap-4 items-center text-white '>
            <IoIosLogOut className='text-2xl'/>
          </div>
          <Link href={`/profile/123`} className='flex justify-center items-center gap-3'>
            <img src={"imageUrl"} className='h-8 w-8 rounded-full'/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopBar