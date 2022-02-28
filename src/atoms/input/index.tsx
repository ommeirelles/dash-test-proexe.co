import { HTMLProps } from 'react'

export const Input = ({ className, ...props }: HTMLProps<HTMLInputElement>) => {
  return (
    <input
      type="text"
      className={`
        ${className}
        input
        bg-transparent
        focus:outline-none
        border-b-2
        pl-2
        placeholder:text-opacity-50
        dark:placeholder:text-opacity-50

        border-b-light-primary
        text-black
        invalid:border-b-light-error
        placeholder:text-black

        dark:text-white
        dark:border-b-dark-primary
        dark:invalid:border-b-dark-error
        dark:placeholder:text-white
    `}
      {...props}
    />
  )
}
