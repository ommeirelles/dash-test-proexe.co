import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import Thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  DashboardReducer,
  GET_USERS_ACTION,
  ADD_USER_ACTION,
  REMOVE_USER_ACTION,
  UPDATE_USER_ACTION,
} from './dashboard'

const enhancer = composeWithDevTools({
  actionCreators: { GET_USERS_ACTION, ADD_USER_ACTION, REMOVE_USER_ACTION, UPDATE_USER_ACTION },
  trace: true,
  traceLimit: 25,
})
export const store = createStore(DashboardReducer, enhancer(applyMiddleware(Thunk, logger)))
