import {combineReducers} from 'redux'

import singleImage from './get-image'
import captions from './get-captions'
import getNextImage from './get-next-image'

export default combineReducers({
  singleImage,
  captions,
  getNextImage
})
