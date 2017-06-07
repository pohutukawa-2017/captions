import {combineReducers} from 'redux'

import singleImage from './get-image'
import captions from './get-captions'

export default combineReducers({
  singleImage,
  captions
})
