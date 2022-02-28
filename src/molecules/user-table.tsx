import { Table } from '../atoms/table'
import { Button } from '../atoms/button'
import { useCallback } from 'react'
import { User } from '../store/dashboard'

interface UserTableProps {
  userList: Array<User>
  onChange: { (type: 'edit' | 'delete', user: User): void }
}
export const UserTable = ({ userList = [], onChange }: UserTableProps) => {
  const changeCallback = useCallback((user: User) => () => onChange('edit', user), [])
  const deleteCallback = useCallback((user: User) => () => onChange('delete', user), [])

  return (
    <Table className="w-full">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th className="sm:text-sm">username</th>
          <th className="max-w-[50px] sm:max-w-none overflow-hidden">email</th>
          <th>city</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {userList.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td className="max-w-[50px] sm:max-w-none overflow-hidden">{user.email}</td>
            <td className="max-w-[50px] sm:max-w-none overflow-hidden">{user.address?.city}</td>
            <td>
              <Button
                variant="secondary"
                className="font-semibold px-2 sm:px-4 text-xs sm:text-sm"
                onClick={changeCallback(user)}
              >
                Edit
              </Button>
              <Button
                variant="error"
                className="font-semibold px-2 sm:px-4 text-xs sm:text-sm"
                onClick={deleteCallback(user)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
