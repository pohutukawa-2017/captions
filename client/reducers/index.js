import {combineReducers} from 'redux'

import auth from './auth'
import images from './images'
import captions from './captions'
import singleImage from './single-image'

export default combineReducers({
  auth,
  images,
  captions,
  singleImage
})
