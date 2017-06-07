export const getImage = (url) => {
  return {
    type: 'GET_IMAGE',
    image: url
  }
}

export const getCaptions = (captions) => {
  return {
    type: 'GET_CAPTIONS',
    captions
  }
}