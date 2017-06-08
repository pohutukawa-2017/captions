import {combineReducers} from 'redux'

import auth from './auth'
import singleImage from './getImage'
import captions from './getCaptions'

export default combineReducers({
  singleImage,
  captions,
  auth
})
