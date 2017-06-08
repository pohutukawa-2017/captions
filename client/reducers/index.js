import {combineReducers} from 'redux'

import imageUpload from './imageUpload'
import singleImage from './getImage'
import captions from './getCaptions'

export default combineReducers({
  singleImage,
  captions,
  imageUpload
})
