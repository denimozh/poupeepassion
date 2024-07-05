import BottomBar from '@/components/BottomBar'
import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar'
import React from 'react'

const ExplorePage = () => {
  return (
    <div className="h-screen w-full md:flex">
      <TopBar/>
      <SideBar/>
      <section  className="flex flex-1 h-full flex-col items-center">
        <p className='text-3xl md:text-4xl pt-10 md:pt-20 text-white font-semibold'>Search Category</p>
        <div>

        </div>
        <div>
          <p>Search Results</p>
        </div>
      </section>
      <BottomBar/>
    </div>
  )
}

export default ExplorePage