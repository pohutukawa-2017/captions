import { RECEIVED_IMAGE_ID, RECEIVED_IMAGE_PATH } from '../actions'

function imageUpload (state = {id: null, path: ''}, action) {
  switch (action.type) {
    case RECEIVED_IMAGE_ID:
      return {...state, id: action.id}

    case RECEIVED_IMAGE_PATH:
      return {...state, path: action.path}

    default:
      return state
  }
}

export default imageUpload
