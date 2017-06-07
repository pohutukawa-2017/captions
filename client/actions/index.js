import request from '../api'
import {saveUserToken} from '../auth'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin () {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false
  }
}

function receiveLogin (user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user
  }
}

function loginError (message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function loginUser (loginInfo) {
  return dispatch => {
    dispatch(requestLogin(loginInfo))
    return request('post', '/authenticate', loginInfo)
      .then(response => {
        if (!response.ok) {
          dispatch(loginError(response.body.message))
          return // Promise.reject(response.body.message)
        } else {
          const userInfo = saveUserToken(response.body.token)
          dispatch(receiveLogin(userInfo))
          console.log('token saved to local storage')
        }
      })
      .catch(err => dispatch(loginError(err.response.body.message)))
  }
}
