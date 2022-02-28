import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { Dash } from './templates/dashboard'
import './index.scss'
import { store } from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Dash />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
