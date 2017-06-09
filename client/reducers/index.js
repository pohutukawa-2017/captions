import {combineReducers} from 'redux'

import user from './user'
import auth from './auth'
import images from './images'
import captions from './getCaptions'
import singleImage from './getImage'
import imageUpload from './imageUpload'
import profile from './profile'
import error from './error'

export default combineReducers({
  user,
  auth,
  images,
  captions,
  singleImage,
  imageUpload,
  profile,
  error
})
