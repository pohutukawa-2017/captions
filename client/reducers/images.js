const initialState = [
  {
    id: 1,
    image_url: 'http://stories.barkpost.com/wp-content/uploads/2014/05/dogs-allowed-cute-dog.jpg'
  },
  {
    id: 2,
    image_url: 'https://i.ytimg.com/vi/f-e9hSUSlSM/maxresdefault.jpg'
  },
  {
    id: 3,
    image_url: 'http://beforeitsnews.com/contributor/upload/486248/images/cat-funny-5.jpg'
  }
]

const images = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default images
