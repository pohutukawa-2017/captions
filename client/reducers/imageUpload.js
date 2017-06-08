import { RECEIVED_IMAGE_ID, RECEIVED_IMAGE_PATH } from '../actions'

function imageUpload (state = {id: null, path: ''}, action) {
  switch (action.type) {
    case RECEIVED_IMAGE_ID:
      return {...state, id: action.id}

    default:
      return state
  }
}

export default imageUpload
