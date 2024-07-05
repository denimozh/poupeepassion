import Link from 'next/link';
import React from 'react'
import { BiBookmark } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { GoHome } from 'react-icons/go';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { IoCreateOutline, IoPaperPlaneOutline, IoSettingsOutline } from 'react-icons/io5';
import DarkModeLogo from './DarkModeLogo';

const SideBar = () => {
  return (
    <nav className='hidden md:flex px-6 pt-10 pb-4 h-full flex-col min-w-[280px] bg-dark-2'>
        <div className="flex flex-col justify-between gap-16">
            <div className='flex flex-col gap-10'>
                <Link href="/" className="flex gap-4 items-center">
                    <DarkModeLogo width={50} height={60} text='text-2xl text-white'/>
                </Link>

                
                <Link href={`/profile/123`} className="flex gap-3 items-center text-primary">
                    <img
                        src={"/assets/icons/profile-placeholder.svg"}
                        alt="profile"
                        className="h-14 w-14 rounded-full"
                    />
                    <div className="flex flex-col">
                        <p className="body-bold">username</p>
                        <p className="small-regular text-light-3">@username</p>
                    </div>
                </Link>
            </div>

            <ul className='flex flex-col gap-2'>
                <li className='rounded-lg base-medium transition'>
                    <Link href={"/"} className="gap-4 flex items-center py-4 px-3 text-primary hover:bg-primary hover:text-black text-lg rounded-lg hover:font-semibold">
                        <GoHome className='text-3xl '/>
                        <p>Home</p>
                    </Link>
                </li>
                <li className='rounded-lg base-medium transition'>
                    <Link href={"/explore"} className="gap-4 flex items-center py-4 px-3 text-primary hover:bg-primary hover:text-black text-lg rounded-lg hover:font-semibold">
                        <HiOutlineSquares2X2 className='text-3xl'/>
                        <p>Explore</p>
                    </Link>
                </li>
                <li className='rounded-lg base-medium transition'>
                    <Link href={"/all-users"} className="gap-4 flex items-center py-4 px-3 text-primary hover:bg-primary hover:text-black text-lg rounded-lg hover:font-semibold">
                        <BsPeople className='text-3xl'/>
                        <p>People</p>
                    </Link>
                </li>
                <li className='rounded-lg base-medium transition'>
                    <Link href={"/saved"} className="gap-4 flex items-center py-4 px-3 text-primary hover:bg-primary hover:text-black text-lg rounded-lg hover:font-semibold">
                        <BiBookmark className='text-3xl'/>
                        <p>Saved</p>
                    </Link>
                </li>
                <li className='rounded-lg base-medium transition'>
                    <Link href={"/messages"} className="gap-4 flex items-center py-4 px-3 text-primary hover:bg-primary hover:text-black text-lg rounded-lg hover:font-semibold">
                        <IoPaperPlaneOutline className='text-3xl'/>
                        <p>Messages</p>
                    </Link>
                </li>
                <li className='rounded-lg base-medium transition'>
                    <Link href={"/create-post"} className="gap-4 flex items-center py-4 px-3 text-primary hover:bg-primary hover:text-black text-lg rounded-lg hover:font-semibold">
                        <IoCreateOutline className='text-3xl'/>
                        <p>Create Post</p>
                    </Link>
                </li>
            </ul>
            
            <ul className='flex flex-col pt-10'>
                <li className='rounded-lg base-medium transition'>
                    <Link href={"/create-post"} className="gap-4 flex items-center py-4 px-3 text-primary hover:bg-primary hover:text-black text-lg rounded-lg hover:font-semibold">
                        <FiLogOut className='text-3xl'/>
                        <p>Logout</p>
                    </Link>
                </li>
                <li className='rounded-lg base-medium transition'>
                    <Link href={"/settings"} className="gap-4 flex items-center py-4 px-3 text-primary hover:bg-primary hover:text-black text-lg rounded-lg hover:font-semibold">
                        <IoSettingsOutline className='text-3xl'/>
                        <p>Settings</p>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default SideBar