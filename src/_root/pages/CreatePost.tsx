import PostForm from '@/components/forms/PostForm';
import React from 'react'
import { MdAddPhotoAlternate } from "react-icons/md";

const CreatePost = () => {
  return (
    <div className='flex flex-1'>
      <div className='flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:px-8 lg:p-14'> 
        <div className='max-w-5xl flex justify-start items-center gap-3 w-full'>
          <MdAddPhotoAlternate className='text-5xl'/>
          <h2 className='text-left w-full text-2xl md:text-4xl font-bold'>Create Post</h2>
        </div>
        <PostForm/>
      </div>
    </div>
  )
}

export default CreatePost