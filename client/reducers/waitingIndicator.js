import {WAITING_INDICATOR, NOT_WAITING} from '../actions'

function waitingIndicator (state = false, action) {
  switch (action.type) {
    case WAITING_INDICATOR:
      return {
        waiting: true
      }
    case NOT_WAITING:
      return {
        waiting: false
      }
    default:
      return state
  }
}

export default waitingIndicator
