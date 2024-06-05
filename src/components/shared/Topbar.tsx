import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { IoIosLogOut } from "react-icons/io";
import LightLogo from './LightLogo';
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations';
import { useUserContext } from '@/context/AuthContext';

const TopBar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess])

  return (
    <section className='sticky top-0 z-50  md:hidden bg-white w-full'>
      <div className='flex flex-row justify-between items-center py-2 px-4'>
        <Link to="/" className="gap-3 items-center flex flex-row">
          <LightLogo text='text-xl' width="w-12" height="h-15"/>
        </Link>

        <div className='flex gap-4'>
          <Button variant="outline" onClick={() => signOut} className='flex gap-4 items-center hover:bg-transparent '>
            <IoIosLogOut className='text-2xl'/>
          </Button>
          <Link to={`/profile/${user.id}`} className='flex justify-center items-center gap-3'>
            <img src={user.imageUrl} className='h-8 w-8 rounded-full'/>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TopBar