import {
  login,
  getAllImages,
  getImageById,
  getCaptionsById,
  postNewCaption,
  removeCaption,
  postNewImage} from '../api'
import {saveUserToken} from '../auth'

export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'
export const USER_FAILURE = 'USER_FAILURE'
export const REQUEST_IMAGES = 'REQUEST_IMAGES'
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const REGISTER_ERROR = 'REGISTER_ERROR'
export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const RECEIVED_IMAGE_ID = 'RECEIVED_IMAGE_ID'
export const LOG_OUT = 'LOG_OUT'
export const ERROR_MESSAGE = 'ERROR_MESSAGE'
export const WAITING_INDICATOR = 'WAITING_INDICATOR'
export const NOT_WAITING = 'NOT_WAITING'

export function postImage (pictureURL) {
  return (dispatch) => {
    postNewImage(pictureURL, (err, res) => {
      if (err) dispatch(error(err.message))
      dispatch(receivedImageId(res.id[0]))
    })
  }
}

export function receivedImageId (id) {
  return {
    type: RECEIVED_IMAGE_ID,
    id
  }
}

export function uploadImage () {
  return function (dispatch) {
    cloudinary.openUploadWidget({
      cloud_name: 'dboovyrqb',
      upload_preset: 'p8w4fgph',
      tags: ['test'],
      cropping: 'server',
      cropping_aspect_ratio: 1,
      cropping_default_selection_ratio: 1,
      theme: 'minimal',
      min_image_width: 400,
      min_image_height: 400,
      cropping_validate_dimensions: true
    },
      (err, result) => {
        dispatch(postImage(result[0].url))
        if (err) return dispatch(error(err.message))
      }
    )
  }
}

export const requestImages = () => {
  return {
    type: REQUEST_IMAGES
  }
}

export const receiveImages = (images) => {
  return {
    type: RECEIVE_IMAGES,
    images: images
  }
}

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

export function logOut () {
  return {
    type: LOG_OUT
  }
}

export const imagePath = (image) => {
  return {
    type: 'GET_IMAGE',
    image: image
  }
}

export const captions = (captions) => {
  return {
    type: 'GET_CAPTIONS',
    captions
  }
}

export function requestUser () {
  return {
    type: REQUEST_USER,
    isFetching: true
  }
}

export function receiveUser (user) {
  return {
    type: RECEIVE_USER,
    isFetching: false,
    user
  }
}

export function userError (message) {
  return {
    type: USER_FAILURE,
    isFetching: false,
    errorMessage: message
  }
}

export function error (message) {
  return {
    type: ERROR_MESSAGE,
    errorMessage: message
  }
}

export function loginUser (credentials, route, redirect) {
  return (dispatch) => {
    dispatch(waitingIndicator())
    dispatch(requestLogin())
    return login('post', route, credentials)
      .then((response) => {
        if (!response.body.token) {
          return dispatch(loginError(response.body.info))
        } else {
          const userInfo = saveUserToken(response.body.token)
          dispatch(receiveLogin(userInfo))
          dispatch(notWaiting())
          redirect()
        }
      })
      .catch((err) => dispatch(loginError(err.response.body.info)))
  }
}

export function getUser (userId, route, callback) {
  return (dispatch) => {
    dispatch(waitingIndicator())
    dispatch(requestUser())
    return login('get', route)
      .then((response) => {
        dispatch(receiveUser(response.body))
        dispatch(notWaiting())
      })
      .catch((err) => {
        return dispatch(userError(err.response.body.info))
      })
  }
}

export const saveNewCaption = (caption, cb) => {
  return (dispatch) => {
    dispatch(waitingIndicator())
    postNewCaption(caption.imageId, caption, (err, res) => {
      if (err) return dispatch(error(err.message))
      dispatch(getCaptionsList(caption.imageId))
      dispatch(notWaiting())
      cb(res.captionId)
    })
  }
}

export const fetchImages = () => {
  return (dispatch, getState) => {
    dispatch(waitingIndicator())
    const state = getState()
    if (state.images.length === 0) {
      getAllImages((err, res) => {
        if (err) return dispatch(error(err.message))
        dispatch(receiveImages(res.result))
        dispatch(notWaiting())
      })
    }
  }
}

export const getImagePath = (id) => {
  return (dispatch, getState) => {
    dispatch(waitingIndicator())
    const state = getState()
    if (!state.singleImage.id || state.singleImage.id !== Number(id)) {
      const image = state.images.find((image) => image.id === Number(id))
      if (!image) {
        getImageById(id, (err, res) => {
          if (err) return dispatch(error(err.message))
          dispatch(imagePath(res))
          dispatch(notWaiting())
        })
      } else {
        dispatch(imagePath(image))
        dispatch(notWaiting())
      }
    }
  }
}

export const getCaptionsList = (id) => {
  return (dispatch, getState) => {
    dispatch(waitingIndicator())
    const state = getState()
    if (state.captions.length === 0 || state.singleImage.id !== id) {
      getCaptionsById(id, (err, res) => {
        if (err) return dispatch(error(err.message))
        dispatch(captions(res))
        dispatch(notWaiting())
      })
    }
  }
}

export const deleteCaption = (id, imageId) => {
  return (dispatch) => {
    dispatch(waitingIndicator())
    removeCaption(id, (err, res) => {
      if (err) dispatch(error(err.message))
      getCaptionsById(imageId, (err, res) => {
        if (err) dispatch(error(err.message))
        dispatch(captions(res))
        dispatch(notWaiting())
      })
    })
  }
}

export const getNextImage = (id) => {
  return {
    type: 'GET_NEXT_IMAGE',
    id
  }
}

export const waitingIndicator = () => {
  return {
    type: WAITING_INDICATOR
  }
}

export const notWaiting = () => {
  return {
    type: NOT_WAITING
  }
}
