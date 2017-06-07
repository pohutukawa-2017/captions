export const imagePath = (url) => {
  return {
    type: 'GET_IMAGE',
    image: url
  }
}

export const captions = (captions) => {
  return {
    type: 'GET_CAPTIONS',
    captions
  }
}

export const getNextImage = (id) => {
  return {
    type: 'GET_NEXT_IMAGE',
    id
  }
}
