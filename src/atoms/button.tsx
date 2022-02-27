import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps, PropsWithChildren } from 'react'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'error'
}
const base = `
    antialiased
    font-overpass
    focus:ring-0
    font-medium 
    rounded-lg 
    text-sm 
    px-4
    py-2.5 
    text-center
    shadow-sm
    shadow-black
    mx-1
    `

//primary variant theming
const primaryLightTheme = `bg-light-primary hover:bg-light-primaryVariant text-light-onPrimary`
const primaryDarkTheme = `dark:bg-dark-primary dark:hover:bg-dark-primaryVariant dark:text-dark-onPrimary`
//secondary variant  theming
const secondaryLightTheme = `bg-light-secondary hover:bg-light-secondaryVariant text-light-onSecondary`
const secondaryDarkTheme = `dark:bg-dark-secondary dark:hover:bg-dark-secondaryVariant dark:text-dark-onSecondary`
//secondary variant  theming
const errorLightTheme = `bg-light-error text-light-onError`
const erroryDarkTheme = `dark:bg-dark-error dark:text-dark-onError`

export const Button = ({
  children,
  className,
  type = 'button',
  variant = 'primary',
  ...props
}: PropsWithChildren<ButtonProps>) => {
  let variantTheming
  switch (variant) {
    case 'error':
      variantTheming = `${errorLightTheme} ${erroryDarkTheme}`
      break
    case 'secondary':
      variantTheming = `${secondaryLightTheme} ${secondaryDarkTheme}`
      break
    case 'primary':
      variantTheming = `${primaryLightTheme} ${primaryDarkTheme}`
      break
    default:
      break
  }

  return (
    <button
      type={type}
      className={`
        ${base} 
        ${variantTheming}
        ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
