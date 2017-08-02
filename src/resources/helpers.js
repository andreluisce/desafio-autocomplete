
import { applyMiddleware, createStore, compose } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import reducers from '../reducers/mainReducer'

export default function getStore () {
  const middleware = process.env.NODE_ENV !== 'production'
    ? [require('redux-immutable-state-invariant').default(), promise, thunk]
    : [promise, thunk]

  const middlewares = [...middleware]

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )
}
