import Leftbar from '@/components/shared/Leftbar'
import Topbar from '@/components/shared/Topbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='w-full md:flex'>
      <Topbar/>
      <Leftbar/>
      <section className='flex flex-1 h-full'>
        <Outlet />
      </section>
    </div>
  )
}

export default RootLayout