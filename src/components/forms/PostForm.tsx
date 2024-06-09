import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea'
import FileUploader from '../shared/FileUploader'
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const PostForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-9 w-full max-w-5xl">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className=''>Title</FormLabel>
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
                            <FormLabel className=''>Caption</FormLabel>
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
                            <FormLabel className=''>Add Photos</FormLabel>
                            <FormControl>
                                <FileUploader />
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
                            <FormLabel className=''>Add Tags (seperated by commas (" , "))</FormLabel>
                            <FormControl>
                                <Input placeholder="Art, Expression, Vintage" {...field} />
                            </FormControl>
                            <FormMessage className='text-red-500'/>
                        </FormItem>
                    )}
                />
                <div className='flex gap-4 items-center justify-end'>
                    <Button type="button" className='h-12 px-5 flex gap-2'>Cancel</Button>
                    <Button type="submit" className='border-2 border-slate-400 bg-white text-black hover:text-white h-12 px-5 flex gap-2'>Submit</Button>
                </div>
            </form>
        </Form>
    )
}

export default PostForm