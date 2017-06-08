import {combineReducers} from 'redux'

import getNextImage from './get-next-image'
import images from './images'
import auth from './auth'
import singleImage from './getImage'
import captions from './getCaptions'

export default combineReducers({
  images,
  singleImage,
  captions,
  getNextImage,
  auth
})
