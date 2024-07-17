import SignInForm from '@/components/Auth/SignInForm'
import DarkModeLogo from '@/components/DarkModeLogo'
import React from 'react'

const SignInPage = () => {
    return (
        <div className="flex flex-1 justify-center items-center flex-col md:py-10">
            <DarkModeLogo width={60} height={80} text='text-white text-3xl pr-5'/>
            <h2 className="text-4xl leading-[140px] text-white font-medium">
                Log in to your account
            </h2>
            <p className="text-slate-500 text-lg font-medium">
                Welcome back! Please enter your details.
            </p>
            <SignInForm/>
        </div>
      )
}

export default SignInPage