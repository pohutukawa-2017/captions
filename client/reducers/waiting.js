import {WAITING_INDICATOR, NOT_WAITING} from '../actions'

function waitingIndicator (state = false, action) {
  switch (action.type) {
    case WAITING_INDICATOR:
      return true

    case NOT_WAITING:
      return false

    default:
      return state
  }
}

export default waitingIndicator
