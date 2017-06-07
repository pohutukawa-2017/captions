import {combineReducers} from 'redux'

import initial from './initial'
import confirmUpload from './confirmUpload'

export default combineReducers({
  initial,
  confirmUpload
})
