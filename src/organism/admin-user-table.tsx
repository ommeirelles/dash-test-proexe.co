import { FormEventHandler, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List } from 'immutable'

import { UserTable } from '../molecules/user-table'
// import { Pagination } from '../molecules/pagination'
import { Button } from '../atoms/button'
import { Modal } from '../atoms/modal'
import { UserForm } from '../molecules/user-form'
import { ConfirmUserExclusion } from '../molecules/confirm-user-exclusion'
import { ADD_USER_ACTION, UPDATE_USER_ACTION, REMOVE_USER_ACTION, User } from '../store/dashboard'

export const AdminUserTable = () => {
  const userList = useSelector((state: List<User>) => state)
  const dispatch = useDispatch()
  const [userModal, setUserModal] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(false)
  const [user, setUser] = useState<User | undefined>(undefined)

  const onCloseModal = useCallback(() => {
    setUser(undefined)
    setUserModal(false)
  }, [])

  const onSubmitForm: FormEventHandler<HTMLFormElement> = useCallback(
    (form) => {
      form.preventDefault()
      const name = (form.target as unknown as { name: HTMLInputElement }).name.value
      const email = (form.target as unknown as { email: HTMLInputElement }).email.value
      if (user && !user.id) dispatch(ADD_USER_ACTION({ name, email } as unknown as User))
      if (user && user.id) dispatch(UPDATE_USER_ACTION({ ...user, name, email }))
      setUser(undefined)
      setUserModal(false)
    },
    [user]
  )

  const onConfirmDelete = useCallback(() => {
    if (user) dispatch(REMOVE_USER_ACTION(user))
    setUser(undefined)
    setConfirmationModal(false)
  }, [user])

  const onChangeTableLine = useCallback((type: 'edit' | 'delete', user: User) => {
    setUser(user)
    if (type == 'edit') {
      setUserModal(true)
    } else {
      setConfirmationModal(true)
    }
  }, [])

  return (
    <>
      <div className="w-full flex flex-col mx-5">
        <div className="flex justify-between items-end">
          <h2 className="grow-1 text-shadow-lg mt-5 font-bold font-overpass text-2xl text-light-onPrimary dark:text-dark-onPrimary">
            Users
          </h2>
          <Button
            className="grow-1 self-end place-self-end"
            onClick={useCallback(() => {
              setUserModal(true)
            }, [])}
          >
            New User
          </Button>
        </div>
        <UserTable userList={userList.toArray()} onChange={onChangeTableLine} />
        {/* <Pagination /> */}
      </div>
      <Modal id="user-modal" open={userModal}>
        <UserForm user={user} onReset={onCloseModal} onSubmit={onSubmitForm} />
      </Modal>
      <Modal open={confirmationModal} id="user-delete-confirmation-modal">
        <ConfirmUserExclusion
          onConfirm={onConfirmDelete}
          onCancel={useCallback(() => {
            setUser(undefined)
            setConfirmationModal(false)
          }, [])}
        />
      </Modal>
    </>
  )
}
