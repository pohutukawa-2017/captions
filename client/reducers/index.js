import {combineReducers} from 'redux'

import initial from './initial'
import auth from './auth'

export default combineReducers({
  initial,
  auth
})
