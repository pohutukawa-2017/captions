import {combineReducers} from 'redux'
import imageUpload from './imageUpload'
import images from './images'
import auth from './auth'
import singleImage from './getImage'
import captions from './getCaptions'

export default combineReducers({
  images,
  singleImage,
  captions,
  imageUpload,
  auth
})
