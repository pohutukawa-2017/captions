const initialState = { }

const getCaptions = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_CAPTIONS':
      return {
        captions: action.captions
      }
    default:
      return state
  }
}

export default getCaptions