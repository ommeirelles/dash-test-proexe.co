import { useCallback, useState } from 'react'
import { LightBulbIcon as SolidBulb } from '@heroicons/react/solid'
import { LightBulbIcon as OutlineBulb } from '@heroicons/react/outline'
import { Button } from '../atoms/button'

interface HeaderProps {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  const [dark, setDark] = useState(false)

  return (
    <div className="relative w-full h-1/5 bg-light-primary dark:bg-dark-primary flex place-items-center">
      <h1 className="text-shadow-lg ml-10 font-bold w-full block font-overpass text-[40px] text-light-onPrimary dark:text-dark-onPrimary">
        {title}
      </h1>
      <Button
        className="fixed right-2 top-2 p-2 flex"
        onClick={useCallback(() => {
          if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
          } else {
            document.documentElement.classList.add('dark')
          }
          setDark(document.documentElement.classList.contains('dark'))
        }, [])}
      >
        {dark ? <SolidBulb className="w-4 mx-2" /> : <OutlineBulb className="w-4 mx-2" />}
        Change Theme
      </Button>
    </div>
  )
}
