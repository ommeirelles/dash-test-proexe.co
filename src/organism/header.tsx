interface HeaderProps {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="w-full h-1/5 bg-light-primary dark:bg-dark-primary flex place-items-center">
      <h1 className="ml-10 font-bold w-full block font-overpass text-2xl text-light-onPrimary dark:text-dark-onPrimary">
        Dashboard
      </h1>
    </div>
  )
}
