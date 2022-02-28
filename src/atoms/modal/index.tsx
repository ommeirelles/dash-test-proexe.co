import { HTMLProps, PropsWithChildren } from 'react'
import { Button } from '../button'
import { XIcon } from '@heroicons/react/solid'

export interface ModalProps extends HTMLProps<HTMLElement> {
  open: boolean
  id: string
  onClose?: { (): void }
}
export const Modal = ({ children, className, id, open, onClose }: PropsWithChildren<ModalProps>) => {
  return open ? (
    <>
      <div
        id={id}
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
      >
        <div className="relative bg-black bg-opacity-80 px-4 w-full max-w-screen h-full min-h-screen md:h-auto flex items-center place-items-center justify-center">
          {onClose ? (
            <Button className="fixed right-5 top-5" onClick={onClose}>
              <XIcon className="w-5" />
            </Button>
          ) : null}
          <div className={`relative bg-light-background dark:bg-dark-background rounded-lg shadow ${className}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  ) : null
}
