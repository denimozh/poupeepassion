import { z } from "zod"

export const SignUpValidation = z.object({
    name: z.string().min(2, {message: 'Too short'}),
    username: z.string().min(2 , {message: 'Too short'}),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be atleast 8 characters'})
})

export const SignInValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be atleast 8 characters'})
})

export const PostValidation = z.object({
    title: z.string().min(2).max(200),
    caption: z.string().min(2).max(2200),
    file: z.custom<File[]>(),
    tags: z.string()
})