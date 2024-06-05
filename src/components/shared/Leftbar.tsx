import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { IoIosLogOut } from "react-icons/io";
import LightLogo from './LightLogo';
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations';
import { useUserContext } from '@/context/AuthContext';

const Leftbar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess])
  
  return (
    <nav className='hidden md:flex px-6 py-10 flex-col justify-between min-w-[290px] bg-white'>
      <div className='flex flex-col gap-11'> 
        <Link to="/" className="gap-3 items-center flex flex-row">
          <LightLogo text='text-2xl' width="w-12" height="h-15"/>
        </Link>
        <Link to={`/profile/${user.id}`} className='flex gap-3 items-center'>
          <img src={user.imageUrl} className='h-13 w-14 rounded-full'/>
          <div className='flex flex-col '>
            <p className='text-[20px] font-medium leading-[140%]'>
              {user.name}
            </p>
            <p className='text-[14px] font-normal leading-[140%] text-slate-600'>
              @{user.username}
            </p>
          </div>
        </Link>

        <ul className='flex flex-col gap-6'>
          <li className='rounded-lg base-medium hover:bg-slate-500 transition'>
            <NavLink to={"/"} className="gap-4 flex items-center p-4">

            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Leftbar