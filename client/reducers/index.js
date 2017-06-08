import {combineReducers} from 'redux'

import initial from './initial'
import imageUpload from './imageUpload'

export default combineReducers({
  initial,
  imageUpload
})
