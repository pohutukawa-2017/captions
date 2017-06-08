const initialState = { }

const getNextImage = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NEXT_IMAGE':
      return action.image

    default:
      return state
  }
}

export default getNextImage
