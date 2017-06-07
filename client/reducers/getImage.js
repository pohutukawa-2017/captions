const initialState = { }

const getImage = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_IMAGE':
      return {
        id: action.id,
        singleImage: action.image

      }
    default:
      return state
  }
}

export default getImage
