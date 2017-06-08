import {getAllImages, getImageById, getCaptionsById, postNewCaption} from '../api'
export const REQUEST_IMAGES = 'REQUEST_IMAGES'
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES'

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
