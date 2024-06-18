import { multiFormatDateString } from '@/lib/utils';
import { Models } from 'appwrite'
import React from 'react'
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { useUserContext } from '@/context/AuthContext';
import PostStats from './PostStats';

type PostCardProps = {
  post: Models.Document;
}

const PostCard = ({ post }: PostCardProps) => {
  const { user } = useUserContext();

  if(!post.creator) return;

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
        <Link to={`/update-post/${post.$id}`} className={`${user.id !== post.creator.$id && "hidden"}`}>
          <FaRegEdit className='text-2xl'/>
        </Link>
      </div>
      <Link to={`/posts/${post.$id}`}>
        <div className='text-[18px] lg:text-[20px] font-medium pt-5'>
          <p>{post.title}</p>
        </div>
        <div className='text-[16px] md:text-lg py-3'>
          <p>{post.caption}</p>
          <ul className='flex gap-1 mt-2'>
            {post.tags.map((tag: string) => (
              <li key={tag} className="text-slate-400">
                #{tag}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={post.imageUrl}
          className='h-64 xs:h-[400px] lg:h-[450px] w-full rounded-[24px] object-cover mb-5'
        />
      </Link>

      <PostStats post={post} userId={user.id}/>
    </div>
  )
}

export default PostCard