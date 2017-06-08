export const REQUEST_IMAGES = "REQUEST_IMAGES"
export const RECEIVE_IMAGES = "RECEIVE_IMAGES"


export const requestImages = () => {
 return {
   type: REQUEST_IMAGES
 }
}

export const receiveImages = (images) => {
  return {
    type: RECEIVE_IMAGES,
    images: images.map(image => image.data)
  }
}




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
