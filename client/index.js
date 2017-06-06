import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
<<<<<<< HEAD
import {createStore} from 'redux'
=======
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
>>>>>>> ffa17e135c9c90da1fb4afe03b10ff3c1afd8bd3

import reducers from './reducers'
import App from './components/App'

<<<<<<< HEAD
const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
=======
let store = createStore(reducers, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))
>>>>>>> ffa17e135c9c90da1fb4afe03b10ff3c1afd8bd3

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
