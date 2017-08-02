import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './main/app'

import getStore from './resources/helpers'

import './styles/main.scss'

const store = getStore()

ReactDOM.render(<Provider store={store} >
  < App />
</Provider>, document.querySelector('[data-js="app"]'))
