import { multiFormatDateString } from '@/lib/utils';
import { Models } from 'appwrite'
import React from 'react'
import { Link } from 'react-router-dom';

type PostCardProps = {
  post: Models.Document;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className='bg-slate-100 rounded-3xl border border-slate-400 p-5 lg:p-7 w-full max-w-screen-sm;'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <Link to={`/profile/${post.creator.$id}`}>
            <img src={post?.creator?.imageUrl} alt='creator' className='rounded-full w-12 lg:h-12'/>
          </Link>

          <div className='flex flex-col'>
            <p className='text-lg'>{post.creator.username}</p>
            <div>
              <p className='text-slate-400 text-[14px]'>
                {multiFormatDateString(post.$createdAt)}
              </p>
            </div>
          </div>
        </div>
        <Link to={`/update/post/${post.$id}`}>
          
        </Link>
      </div>
    </div>
  )
}

export default PostCard