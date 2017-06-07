import {combineReducers} from 'redux'

import initial from './initial'
import getImage from './getImage'
import getCaptions from './getCaptions'

export default combineReducers({
  initial,
  getImage,
  getCaptions
})
