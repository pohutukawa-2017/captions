import {combineReducers} from 'redux'

import singleImage from './getImage'
import captions from './getCaptions'

export default combineReducers({
  singleImage,
  captions
})
