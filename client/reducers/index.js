import {combineReducers} from 'redux'

import auth from './auth'
import singleImage from './get-image'
import captions from './get-captions'

export default combineReducers({
  singleImage,
  captions,
  auth
})
