'use client'

import clsx from "clsx"

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps {
    label: string,
    id: string,
    type?: string,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disabled?: boolean
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-md text-white">
        {label}
      </label>
      <div className="mt-2">
        <input id={id} type={type} autoComplete={id} disabled={disabled} {...register(id, { required })} className={clsx(`
            h-12 bg-dark-4 border-none
            bg-[#1F1F22]
            w-full
            border-0
            rounded-md
            py-1.5
          placeholder:text-gray-400
            text-white
            outline-none
            px-5
          `)}
        />
      </div>
    </div>
  )
}

export default Input