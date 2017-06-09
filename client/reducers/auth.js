import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_ERROR, LOG_OUT} from '../actions'
import {isAuthenticated, getUserTokenInfo} from '../auth'
import {set} from '../auth/localstorage'

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
    case LOG_OUT:
      set('token')
      return {
        user: getUserTokenInfo()
      }
    default:
      return state
  }
}
