"use client"

import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const SignUpForm = () => {
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

    //SIGNUP AXIOS
  }

  return (
    <div>SignUpForm</div>
  )
}

export default SignUpForm