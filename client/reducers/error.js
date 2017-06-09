import {ERROR_MESSAGE} from '../actions'

const error = (state = '', action) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      return action.errorMessage

    default:
      return state
  }
}

export default error
