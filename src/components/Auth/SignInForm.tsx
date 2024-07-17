"use client"

import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
        errors
    }
  } = useForm<FieldValues>({
    defaultValues:{
        name: '',
        username: '',
        email: '',
        password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    //LOGIN
  }

  const socialAction = (action:string) => {
    setIsLoading(true);

    //nextJS Social SignIn
  }

  return (
    <form className="flex flex-col gap-5 w-full mt-4 max-w-3xl px-4 md:px-0" onSubmit={handleSubmit(onSubmit)}>
      <Input id="email" label='Email' register={register}/>
    </form>
  )
}

export default SignInForm