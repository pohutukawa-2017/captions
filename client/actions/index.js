import {getAllImages, getImageById, getCaptionsById, postNewCaption, removeCaption, login, postNewImage} from '../api'
import {saveUserToken} from '../auth'

export const REQUEST_IMAGES = 'REQUEST_IMAGES'
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const REGISTER_ERROR = 'REGISTER_ERROR'
export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REQUEST_PROFILE = 'REQUEST_PROFILE'
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'
export const PROFILE_FAILURE = 'PROFILE_FAILURE'
export const RECEIVED_IMAGE_ID = 'RECEIVED_IMAGE_ID'
export const ERROR_MESSAGE = 'ERROR_MESSAGE'

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

export function requestProfile () {
  return {
    type: REQUEST_PROFILE,
    isFetching: true
  }
}

export function receiveProfile (profile) {
  return {
    type: RECEIVE_PROFILE,
    isFetching: false,
    profile
  }
}

export function profileError (message) {
  return {
    type: PROFILE_FAILURE,
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
    dispatch(requestLogin())
    return login('post', route, credentials)
      .then((response) => {
        if (!response.body.token) {
          return dispatch(loginError(response.body.info))
        } else {
          const userInfo = saveUserToken(response.body.token)
          dispatch(receiveLogin(userInfo))
          redirect()
        }
      })
      .catch((err) => dispatch(loginError(err.response.body.info)))
  }
}

export function getProfile (profileId, route, callback) {
  return (dispatch) => {
    dispatch(requestProfile())
    return login('get', route)
      .then((response) => {
        dispatch(receiveProfile(response.body))
      })
      .catch((err) => {
        return dispatch(profileError(err.response.body.info))
      })
  }
}

export const saveNewCaption = (caption, cb) => {
  return (dispatch) => {
    postNewCaption(caption.imageId, caption, (err, res) => {
      if (err) return dispatch(error(err.message))
      dispatch(getCaptionsList(caption.imageId))
      cb(res.captionId)
    })
  }
}

export const fetchImages = () => {
  return (dispatch, getState) => {
    const state = getState()
    if (state.images.length === 0) {
      getAllImages((err, res) => {
        if (err) return dispatch(error(err.message))
        dispatch(receiveImages(res.result))
      })
    }
  }
}

export const getImagePath = (id) => {
  return (dispatch, getState) => {
    const state = getState()
    if (!state.singleImage.id || state.singleImage.id !== Number(id)) {
      const image = state.images.find((image) => image.id === Number(id))
      if (!image) {
        getImageById(id, (err, res) => {
          if (err) return dispatch(error(err.message))
          dispatch(imagePath(res))
        })
      } else {
        dispatch(imagePath(image))
      }
    }
  }
}

export const getCaptionsList = (id) => {
  return (dispatch, getState) => {
    const state = getState()
    if (state.captions.length === 0 || state.singleImage.id !== id) {
      getCaptionsById(id, (err, res) => {
        if (err) return dispatch(error(err.message))
        dispatch(captions(res))
      })
    }
  }
}

export const deleteCaption = (id, imageId) => {
  return (dispatch) => {
    removeCaption(id, (err, res) => {
      if (err) dispatch(error(err.message))
      getCaptionsById(imageId, (err, res) => {
        if (err) dispatch(error(err.message))
        dispatch(captions(res))
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
