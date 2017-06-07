import {getImageById, getCaptionsById} from '../api'

export const imagePath = (url) => {
  return {
    type: 'GET_IMAGE',
    image: url
  }
}

export const imagePathWithId = (url, id) => {
  return {
    type: 'GET_IMAGE',
    image: url,
    id
  }
}

export const captions = (captions) => {
  return {
    type: 'GET_CAPTIONS',
    captions
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
