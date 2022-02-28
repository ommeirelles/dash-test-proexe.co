import { Action } from 'redux'
import { List } from 'immutable'
import { ThunkAction } from 'redux-thunk'

export interface User {
  id: number
  name: string
  username?: string
  email: string
  address?: {
    street?: string
    suite?: string
    city?: string
    zipcode?: string
    geo?: {
      lat?: number
      lng?: number
    }
  }
  phone?: string
  website?: string
  company?: {
    name?: string
    catchPhrase?: string
    bs?: string
  }
}

export function DashboardReducer(
  state: List<User> = List(),
  action: ADD_USER_ACTION_TYPE | REMOVE_USER_ACTION_TYPE | UPDATE_USER_ACTION_TYPE | GET_USERS_ACTION_TYPE
) {
  switch (action.type) {
    case UserDashboardActionTypes.ADD_USER: {
      const users = state,
        newUser = (action as ADD_USER_ACTION_TYPE).value
      return users.push(newUser)
    }
    case UserDashboardActionTypes.GET_USERS: {
      const users = (action as GET_USERS_ACTION_TYPE).value
      return state.push(...users)
    }
    case UserDashboardActionTypes.REMOVE_USER: {
      return state.filter((v) => v.id !== (action as REMOVE_USER_ACTION_TYPE).value.id)
    }
    case UserDashboardActionTypes.UPDATE_USER: {
      const updatedUser = (action as UPDATE_USER_ACTION_TYPE).value
      return state.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    }
    default:
      break
  }
  return state
}

export enum UserDashboardActionTypes {
  GET_USERS = 'GET_USERS',
  ADD_USER = 'ADD_USER',
  REMOVE_USER = 'REMOVE_USER',
  UPDATE_USER = 'UPDATE_USER',
}

export interface ADD_USER_ACTION_TYPE extends Action<UserDashboardActionTypes.ADD_USER> {
  value: User
}

export interface REMOVE_USER_ACTION_TYPE extends Action<UserDashboardActionTypes.REMOVE_USER> {
  value: User
}

export interface UPDATE_USER_ACTION_TYPE extends Action<UserDashboardActionTypes.UPDATE_USER> {
  value: User
}

export interface GET_USERS_ACTION_TYPE extends Action<UserDashboardActionTypes.GET_USERS> {
  value: User[]
}

export const GET_USERS_ACTION = (): ThunkAction<void, List<User>, unknown, GET_USERS_ACTION_TYPE> => {
  return async (dispatch) => {
    const data = await fetch(`${import.meta.env.VITE_API}/users`)
    const users: User[] = await data.json()

    dispatch({
      type: UserDashboardActionTypes.GET_USERS,
      value: users,
    })
  }
}

export const ADD_USER_ACTION = (u: User): ThunkAction<void, List<User>, unknown, ADD_USER_ACTION_TYPE> => {
  return async (dispatch) => {
    const response = await fetch(`${import.meta.env.VITE_API}/users`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(u),
    })
    const newUser = await response.json()

    dispatch({
      type: UserDashboardActionTypes.ADD_USER,
      value: newUser,
    })
  }
}

export const REMOVE_USER_ACTION = (u: User): ThunkAction<void, List<User>, unknown, REMOVE_USER_ACTION_TYPE> => {
  return async (dispatch) => {
    const response = await fetch(`${import.meta.env.VITE_API}/users/${u.id}`, {
      method: 'DELETE',
    })

    if (response.status == 200) {
      dispatch({
        type: UserDashboardActionTypes.REMOVE_USER,
        value: u,
      })
    }
  }
}

export const UPDATE_USER_ACTION = (u: User): ThunkAction<void, List<User>, unknown, UPDATE_USER_ACTION_TYPE> => {
  return async (dispatch) => {
    const response = await fetch(`${import.meta.env.VITE_API}/users/${u.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(u),
    })
    const editedUser = await response.json()

    dispatch({
      type: UserDashboardActionTypes.UPDATE_USER,
      value: editedUser,
    })
  }
}
