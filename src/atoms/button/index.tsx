import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react'
import './button.scss'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'error'
}

const Base = ({ children, className, type = 'button', ...props }: PropsWithChildren<ButtonProps>) => {
  return (
    <button type={type} className={`btn ${className}`} {...props}>
      {children}
    </button>
  )
}

const Primay = (props: PropsWithChildren<ButtonProps>) => {
  return <Base {...props} className={`btn-primary ${props.className}`} />
}

const Secondary = (props: PropsWithChildren<ButtonProps>) => {
  return <Base {...props} className={`btn-secondary ${props.className}`} />
}

const Error = (props: PropsWithChildren<ButtonProps>) => {
  return <Base {...props} className={`btn-error ${props.className}`} />
}

export const Button = ({ variant = 'primary', ...props }: PropsWithChildren<ButtonProps>) => {
  switch (variant) {
    case 'error':
      return <Error {...props} />
    case 'primary':
      return <Primay {...props} />
    case 'secondary':
      return <Secondary {...props} />
    default:
      return <Base {...props} />
  }
}
