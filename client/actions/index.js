
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
