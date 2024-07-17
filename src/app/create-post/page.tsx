import BottomBar from '@/components/BottomBar'
import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar'
import React from 'react'

const CreatePage = () => {
  return (
    <div className="h-screen w-full md:flex">
      <TopBar/>
      <SideBar/>
      <section  className="flex flex-1 h-full flex-col items-center">
        
      </section>
      <BottomBar/>
    </div>
  )
}

export default CreatePage