import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_ERROR} from '../actions'
import {isAuthenticated, getUserTokenInfo} from '../auth'

const initialState = {
  isFetching: false,
  isAuthenticated: isAuthenticated(),
  user: getUserTokenInfo(),
  errorMessage: ''
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isFetching: true,
        isAuthenticated: false,
        errorMessage: ''
      }
    case LOGIN_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: true,
        user: action.user
      }
    case LOGIN_FAILURE:
      return {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    case REGISTER_ERROR:
      return {
        errorMessage: action.message
      }
    default:
      return state
  }
}
