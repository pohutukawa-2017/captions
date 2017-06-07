import {combineReducers} from 'redux'
import captions from './captions'

import initial from './initial'
import getImage from './getImage'
import getCaptions from './getCaptions'

export default combineReducers({
  initial,
  captions,
  getImage,
  getCaptions

})
