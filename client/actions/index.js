
export const imagePath = (url) => {
  return {
    type: 'GET_IMAGE',
    image: url
  }
}

export const imagePathWithId = (url, id) => {
  return {
    type: 'GET_IMAGE',
    image: url,
    id
  }
}

export const captions = (captions) => {
  return {
    type: 'GET_CAPTIONS',
    captions
  }
}
