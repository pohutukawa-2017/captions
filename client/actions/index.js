<<<<<<< HEAD
export const GET_CAPTION = 'GET_ACTION'

export const getCaption = (caption) => {
  return {
    type: GET_CAPTION,
    caption
  }
}
=======
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
>>>>>>> 14b9c727bcadc9adeafbc473da539a467db0d8b7
