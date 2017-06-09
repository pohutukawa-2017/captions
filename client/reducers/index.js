import {combineReducers} from 'redux'
import imageUpload from './imageUpload'
import images from './images'
import auth from './auth'
import singleImage from './getImage'
import captions from './getCaptions'
import profile from './profile'

export default combineReducers({
  images,
  singleImage,
  captions,
  auth,
  imageUpload,
  profile
})
