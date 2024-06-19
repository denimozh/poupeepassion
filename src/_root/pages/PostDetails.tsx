import Loader from '@/components/shared/Loader';
import { useUserContext } from '@/context/AuthContext';
import { useDeletePost, useGetPostById } from '@/lib/react-query/queriesAndMutations'
import { multiFormatDateString } from '@/lib/utils';
import { FaRegEdit } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { Button } from '@/components/ui/button';

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || '');
  const { user } = useUserContext();

  const handleDeletePost = useDeletePost();

  return (
    <div className='flex flex-col flex-1 gap-10 overflow-scroll py-10 px-5 md:p-14 items-center'>
      {isPending ? <Loader/> : (
        <div className='bg-slate-100 w-full max-w-5xl rounded-[30px] flex-col flex xl:flex-row border border-dark-4 xl:rounded-l-[24px]'>
          <img 
            src={post?.imageUrl}
            alt='creator'
            className='h-80 lg:h-[480px] xl:w-[48%] rounded-t-[30px] xl:rounded-l-[24px] xl:rounded-tr-none object-cover p-5 bg-slate-100'
          />
          <div className='flex flex-col gap-5 lg:gap-7 flex-1 items-start p-8 rounded-b-[30px] bg-slate-200'>
            <div className='flex justify-between items-center w-full'>
              <Link to={`/profile/${post?.creator.$id}`} className='flex items-center gap-3'>
                <img src={post?.creator?.imageUrl} alt='creator' className='rounded-full w-12 lg:h-12'/>

                <div className='flex flex-col'>
                  <p className='text-lg'>{post?.creator.username}</p>
                  <div>
                    <p className='text-slate-400 text-[14px]'>
                      {multiFormatDateString(post?.$createdAt)}
                    </p>
                  </div>
                </div>
              </Link>

              <div className='flex justify-center items-center gap-4'>
                <Link to={`/update-post/${post?.$id}`} className={`${user.id !== post?.creator.$id && "hidden"}`}>
                  <FaRegEdit className='text-2xl'/>
                </Link>
                <Button onClick={handleDeletePost}>
                  <MdDelete className='text-2xl'/>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PostDetails