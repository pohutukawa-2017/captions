import {RECEIVE_PROFILE} from '../actions'

const initialState = {
  id: 0,
  username: '',
  profilePic: '',
  images: []
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PROFILE:
      return action.profile
    default:
      return state
  }
}
