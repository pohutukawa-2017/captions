import {getAllImages, getImageById, getCaptionsById, postNewCaption, removeCaption, request, postNewImage} from '../api'
import {saveUserToken} from '../auth'

export const REQUEST_IMAGES = 'REQUEST_IMAGES'
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const REGISTER_ERROR = 'REGISTER_ERROR'
export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const RECEIVED_IMAGE_ID = 'RECEIVED_IMAGE_ID'

export function postImage (pictureURL) {
  return (dispatch) => {
    postNewImage(pictureURL, (err, res) => {
      if (err) return console.log(err)
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
    cloudinary.openUploadWidget({cloud_name: 'dboovyrqb', upload_preset: 'p8w4fgph', tags: ['test']},
      (error, result) => {
        dispatch(postImage(result[0].url))
        // Todo handle error
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

export function loginUser (loginInfo, route, redirect) {
  return (dispatch) => {
    dispatch(requestLogin())
    return request('post', route, loginInfo)
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

export const saveNewCaption = (caption, cb) => {
  return (dispatch) => {
    postNewCaption(caption.imageId, {text: caption.text}, (err, res) => {
      if (err) return console.log(err) // TODO: Error component
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
        if (err) return console.log(err)
        dispatch(receiveImages(res.result))
      })
    }
  }
}

export const getImagePath = (id) => {
  return (dispatch, getState) => {
    const state = getState()
    if (!state.singleImage.id || state.singleImage.id !== id) {
      getImageById(id, (err, res) => {
        if (err) return console.log(err) // TODO: Error component
        dispatch(imagePath(res))
      })
    }
  }
}

export const getCaptionsList = (id) => {
  return (dispatch, getState) => {
    const state = getState()
    if (state.captions.length === 0 || state.singleImage.id !== id) {
      getCaptionsById(id, (err, res) => {
        if (err) return console.log(err) // TODO: Error component
        dispatch(captions(res))
      })
    }
  }
}

export const deleteCaption = (id, imageId) => {
  return (dispatch) => {
    removeCaption(id, (err, res) => {
      if (err) return console.log(err)
      getCaptionsById(imageId, (err, res) => {
        if (err) return console.log(err) // TODO: Error component
        dispatch(captions(res))
      })
    })
  }
}
