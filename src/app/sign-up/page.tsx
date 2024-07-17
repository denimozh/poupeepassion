import SignUpForm from '@/components/Auth/SignUpForm'
import DarkModeLogo from '@/components/DarkModeLogo'
import React from 'react'

const SignUpPage = () => {
    return (
        <div className="flex flex-1 justify-center items-center flex-col py-10">
            <DarkModeLogo width={60} height={80} text='text-white text-3xl'/>
            <h2 className="text-4xl leading-[140px] text-white font-medium">
                Create a new account
            </h2>
            <p className="text-slate-500 text-lg font-medium">
            To use PoupeePassion, Enter your details
            </p>
            <SignUpForm/>
        </div>
    )
}

export default SignUpPage