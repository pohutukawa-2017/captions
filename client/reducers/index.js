import {combineReducers} from 'redux'

import images from './images'
import singleImage from './get-image'
import captions from './get-captions'

export default combineReducers({
  singleImage,
  captions,
  images
})
