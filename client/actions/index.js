export const getImage = (url) => {
  return {
    type: 'GET_IMAGE',
    image: url
  }
}