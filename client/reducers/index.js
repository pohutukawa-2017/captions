import {combineReducers} from 'redux'

import images from './images'
import singleImage from './getImage'
import captions from './getCaptions'

export default combineReducers({
  images,
  singleImage,
  captions
})
