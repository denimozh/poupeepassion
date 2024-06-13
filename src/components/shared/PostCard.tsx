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
            <img />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard