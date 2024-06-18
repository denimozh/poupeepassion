import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea'
import FileUploader from '../shared/FileUploader'
import { PostValidation } from '@/lib/validation'
import { Models } from 'appwrite' 
import { useUserContext } from '@/context/AuthContext'
import { useToast } from '../ui/use-toast'
import { useCreatePost, useUpdatePost } from '@/lib/react-query/queriesAndMutations'

type PostFormProps = {
    post?:Models.Document;
    action: "Create" | "Update"
}

const PostForm = ({ post, action }: PostFormProps) => {
    const { mutateAsync:createPost, isPending: isLoadingCreate } = useCreatePost();
    const { mutateAsync:updatePost, isPending: isLoadingUpdate } = useUpdatePost();

    const { user } = useUserContext();
    const { toast } = useToast();
    const navigate = useNavigate();

    // 1. Define your form.
    const form = useForm<z.infer<typeof PostValidation>>({
        resolver: zodResolver(PostValidation),
        defaultValues: {
            title: post ? post?.caption : "", 
            caption: post ? post?.caption : "", 
            file: [],
            tags: post ? post.tags.join(',') : "", 
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof PostValidation>) {
        if(post && action === 'Update'){
            const updatedPost = await updatePost({
                ...values,
                postId: post.$id,
                imageId: post?.imageId,
                imageUrl: post?.imageUrl
            })

            if(!updatedPost){
                toast({ title: "Please try again"})
            }

            return navigate(`/posts/${post.$id}`)
        }

        const newPost = await createPost({
            ...values,
            userId: user.id,
        })

        if(!newPost){
            toast({title:"Please try again"})
        }

        navigate('/');
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-9 w-full max-w-5xl">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg'>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Title" {...field} />
                            </FormControl>
                            <FormMessage className='text-red-500'/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="caption"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg'>Caption</FormLabel>
                            <FormControl>
                                <Textarea className='h-36 bg-slate-100 rounded-xl outline-none' {...field} />
                            </FormControl>
                            <FormMessage className='text-red-500'/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="file"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg'>Add Photos</FormLabel>
                            <FormControl>
                                <FileUploader fieldChange={field.onChange} mediaUrl={post?.imageUrl}/>
                            </FormControl>
                            <FormMessage className='text-red-500'/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg'>Add Tags (seperated by commas (" , "))</FormLabel>
                            <FormControl>
                                <Input placeholder="Art, Expression, Vintage" {...field} />
                            </FormControl>
                            <FormMessage className='text-red-500'/>
                        </FormItem>
                    )}
                />
                <div className='flex gap-4 items-center justify-end'>
                    <Button type="button" className='h-12 px-5 flex gap-2'>Cancel</Button>
                    <Button type="submit" 
                        className='border-2 border-slate-400 bg-white text-black hover:text-white h-12 px-5 flex gap-2' 
                        disabled={isLoadingCreate || isLoadingUpdate}
                    >
                        {isLoadingCreate || isLoadingUpdate && 'Loading...'}
                        {action}
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default PostForm