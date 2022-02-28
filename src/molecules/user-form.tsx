import React, { FormEvent, HTMLProps, SetStateAction, useCallback, useState, Dispatch } from 'react'
import { Button } from '../atoms/button'
import { Input } from '../atoms/input'
import { User } from '../store/dashboard'

interface UserProps extends HTMLProps<HTMLFormElement> {
  user?: User
}
export const UserForm = ({ user, className, ...props }: UserProps) => {
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')

  const onChange = useCallback(
    (setState: Dispatch<SetStateAction<string>>) => (ev: FormEvent<HTMLInputElement>) => {
      setState((ev.target as HTMLInputElement).value)
    },
    []
  )

  return (
    <form {...props} className={`${className} max-w-md w-screen flex flex-wrap`}>
      <div className="w-full bg-light-surface dark:bg-dark-surface rounded-t-md border-b-[1px] border-b-light-primary dark:border-b-dark-primary">
        <h3 className="m-5 text-xl font-bold text-light-onSurface dark:text-dark-onSurface">User Form</h3>
      </div>
      <div className="p-5 flex flex-wrap">
        <div className="flex basis-full py-4">
          <label className="font-semibold whitespace-nowrap" htmlFor="name">
            Name:
          </label>
          <Input
            required
            aria-required
            className="mx-2 basis-full shrink"
            type="text"
            id="name"
            placeholder="your name here"
            value={name}
            onChange={onChange(setName)}
          />
        </div>
        <div className="flex basis-full py-4">
          <label className="font-semibold whitespace-nowrap" htmlFor="email">
            E-mail:
          </label>
          <Input
            required
            aria-required
            className="mx-2 basis-full shrink "
            type="email"
            id="email"
            placeholder="example@domain.com"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
            value={email}
            onChange={onChange(setEmail)}
          />
        </div>
        <div className="flex basis-full justify-end py-2">
          <Button type="reset" variant="error">
            Cancel
          </Button>
          <Button type="submit">Confirm</Button>
        </div>
      </div>
    </form>
  )
}
