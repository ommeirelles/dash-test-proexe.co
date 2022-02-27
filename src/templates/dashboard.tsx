import { Header } from '../organism/header'
import { UserTable } from '../molecules/user-table'

export const Dash = () => {
  return (
    <div className="max-w-screen w-screen h-screen bg-light-background dark:bg-dark-background">
      <Header title="Dashboard" />
      <div className="w-full flex justify-center">
        <UserTable />
      </div>
    </div>
  )
}
