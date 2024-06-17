import { useDeleteSavedPost, useGetCurrentUser, useLikePost, useSavePost } from "@/lib/react-query/queriesAndMutations";
import { checkIsLiked } from "@/lib/utils";
import { Models } from "appwrite"
import React, { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Loader from "./Loader";

type PostStatsProps = {
    post: Models.Document;
    userId: string;
}

const PostStats = ({ post, userId }: PostStatsProps) => {
  const likesList = post.likes.map((user: Models.Document) => user.$id)

  const [likes, setLikes] = useState(likesList);
  const [isSaved, setIsSaved] = useState(false);

  const { mutate: likePost } = useLikePost();
  const { mutate: savePost } = useSavePost();
  const { mutate: deleteSavedPost, isPending: isDeletingSaved } = useDeleteSavedPost();

  const { data: currentUser } = useGetCurrentUser();
  const savedPostRecord = currentUser?.save.find((record: Models.Document) => record.post.$id === post.$id);

  useEffect(() => {
    setIsSaved(!!savedPostRecord)
  }, [currentUser])

  const handleLikePost = (e: React.MouseEvent) => {
    e.stopPropagation();

    let newLikes = [...likes];

    const hasLiked = newLikes.includes(userId);

    if(hasLiked){
        newLikes = newLikes.filter((id) => id !== userId)
    } else {
        newLikes.push(userId);
    }

    setLikes(newLikes);
    likePost({ postId: post.$id, likesArray: newLikes })
  }

  const handleSavePost = (e: React.MouseEvent) => {
    e.stopPropagation();

    if(savedPostRecord){
        setIsSaved(false);
        deleteSavedPost(savedPostRecord.$id);
    } else {
        savePost({ postId: post.$id, userId });
        setIsSaved(true);
    }
  }

  return (
    <div className="flex justify-between items-center z-20">
        <div className="flex items-center gap-2 mr-5" onClick={handleLikePost}>
            {checkIsLiked(likes, userId) ? 
            <FaHeart className="text-xl cursor-pointer text-red-400"/>
            : <FaRegHeart className="text-xl cursor-pointer text-red-400"/>}
            <p className="text-xl md:text-lg">{likes.length}</p>
        </div>
        <div className="flex items-center gap-2">
            <FaRegComment className="text-xl cursor-pointer" onClick={() => {}}/>
        </div>
        <div className="flex items-center gap-2 ml-5" onClick={handleSavePost}>
            {isDeletingSaved ? <Loader/> : isSaved ? 
            <FaBookmark className="text-xl cursor-pointer"/>
            :  <FaRegBookmark  className="text-xl cursor-pointer"/>}
        </div>
    </div>
  )
}

export default PostStats