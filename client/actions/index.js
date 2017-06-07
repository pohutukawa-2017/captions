
export const GET_CAPTION = 'GET_ACTION'

export const getCaption = (caption) => {
  return {
    type: GET_CAPTION,
    caption
  }
}

export const getImage = (url, id) => {
  return {
    type: 'GET_IMAGE',
    image: url,
    id
  }
}

export const getCaptions = (captions) => {
  return {
    type: 'GET_CAPTIONS',
    captions
  }
}
