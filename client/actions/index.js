import request from '../api'
import {saveUserToken} from '../auth'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const REGISTER_ERROR = 'REGISTER_ERROR'
export const REGISTER_REQUEST = 'REGISTER_REQUEST'

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

export function loginError (message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function loginUser (loginInfo, route, redirect) {
  return dispatch => {
    dispatch(requestLogin())
    return request('post', route, loginInfo)
      .then(response => {
        if (!response.body.token) {
          dispatch(loginError(response.body.info))
          return // Promise.reject(response.body.message)
        } else {
          const userInfo = saveUserToken(response.body.token)
          dispatch(receiveLogin(userInfo))
          redirect()
        }
      })
      .catch(err => dispatch(loginError(err.response.body.message)))
  }
}

export const imagePath = (url) => {
  return {
    type: 'GET_IMAGE',
    image: url
  }
}

export const captions = (captions) => {
  return {
    type: 'GET_CAPTIONS',
    captions

  }
}
