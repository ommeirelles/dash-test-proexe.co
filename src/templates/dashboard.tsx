import { Header } from '../organism/header'
import { AdminUserTable } from '../organism/admin-user-table'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { GET_USERS_ACTION } from '../store/dashboard'

export const Dash = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GET_USERS_ACTION())
  }, [])

  return (
    <div className="max-w-screen w-screen h-screen bg-light-background dark:bg-dark-background overscroll-x-none overflow-x-hidden">
      <Header title="Dashboard" />
      <div className="w-full flex justify-center">
        <AdminUserTable />
      </div>
    </div>
  )
}
