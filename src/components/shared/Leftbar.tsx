import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { IoIosLogOut } from "react-icons/io";
import LightLogo from './LightLogo';
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations';
import { useUserContext } from '@/context/AuthContext';
import { GoHome } from "react-icons/go";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BsPeople } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Leftbar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess])
  
  return (
    <nav className='hidden md:flex px-6 py-4 pb-6 flex-col min-w-[300px] bg-white border-r border-slate-400 h-full'>
      <div className='flex flex-col justify-between h-full'> 
        <div className='flex flex-col gap-10'>
          <Link to="/" className="gap-3 items-center flex flex-row">
            <LightLogo text='text-2xl' width="w-12" height="h-15"/>
          </Link>

          <ul className='flex flex-col gap-2'>
            <li className='rounded-lg base-medium transition'>
              <NavLink to={"/"} className="gap-4 flex items-center py-4 px-3 hover:bg-slate-100 text-lg rounded-lg hover:font-semibold">
                <GoHome className='text-3xl'/>
                <p>Home</p>
              </NavLink>
            </li>
            <li className='rounded-lg base-medium transition'>
              <NavLink to={"/explore"} className="gap-4 flex items-center py-4 px-3 hover:bg-slate-100 text-lg rounded-lg hover:font-semibold">
                <HiOutlineSquares2X2 className='text-3xl'/>
                <p>Explore</p>
              </NavLink>
            </li>
            <li className='rounded-lg base-medium transition'>
              <NavLink to={"/all-users"} className="gap-4 flex items-center py-4 px-3 hover:bg-slate-100 text-lg rounded-lg hover:font-semibold">
                <BsPeople className='text-3xl'/>
                <p>People</p>
              </NavLink>
            </li>
            <li className='rounded-lg base-medium transition'>
              <NavLink to={"/saved"} className="gap-4 flex items-center py-4 px-3 hover:bg-slate-100 text-lg rounded-lg hover:font-semibold">
                <BiBookmark className='text-3xl'/>
                <p>Saved</p>
              </NavLink>
            </li>
            <li className='rounded-lg base-medium transition'>
              <NavLink to={"/messages"} className="gap-4 flex items-center py-4 px-3 hover:bg-slate-100 text-lg rounded-lg hover:font-semibold">
                <IoPaperPlaneOutline className='text-3xl'/>
                <p>Messages</p>
              </NavLink>
            </li>
            <li className='rounded-lg base-medium transition'>
              <NavLink to={"/create-post"} className="gap-4 flex items-center py-4 px-3 hover:bg-slate-100 text-lg rounded-lg hover:font-semibold">
                <IoCreateOutline className='text-3xl'/>
                <p>Create Post</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <Link to={`/profile/${user.id}`} className='flex gap-3 items-center'>
            <img src={user.imageUrl} className='h-10 w-10 rounded-lg'/>
            <div className='flex flex-col '>
              <p className='text-[20px] font-medium leading-[140%]'>
                {user.name}
              </p>
              <p className='text-[14px] font-normal leading-[140%] text-slate-600'>
                @{user.username}
              </p>
            </div>
          </Link>
          <Popover>
            <PopoverTrigger><FiMoreVertical className='text-2xl'/></PopoverTrigger>
            <PopoverContent className='w-48'>
              <NavLink to={"/settings"} className="gap-4 flex items-center bg-slate-50 hover:bg-slate-100 text-lg py-2 px-2 rounded-lg hover:font-semibold">
                <FiSettings className='text-xl'/>
                <p>Settings</p>
              </NavLink>
              <div onClick={() => signOut} className="gap-4 flex items-center bg-slate-50 hover:bg-slate-100 text-lg py-2 px-2 rounded-lg hover:font-medium hover:cursor-pointer">
                <IoIosLogOut className='text-xl'/>
                <p>Log Out</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  )
}

export default Leftbar