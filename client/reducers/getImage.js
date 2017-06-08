const initialState = { }

const getImage = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_IMAGE':
      return action.image

    default:
      return state
  }
}

export default getImage
