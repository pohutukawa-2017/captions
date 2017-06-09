import {RECEIVE_USER} from '../actions'

const initialState = {
  id: 0,
  username: '',
  profilePic: '',
  images: []
}

export default function user (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return action.user
    default:
      return state
  }
}
