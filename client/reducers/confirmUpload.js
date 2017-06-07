import { UPLOAD_CONFIRMED } from '../actions'

function confirmUpload (state = [], action) {
  switch (action.type) {
    case UPLOAD_CONFIRMED:
      return action.response

    default:
      return state
  }
}

export default confirmUpload
