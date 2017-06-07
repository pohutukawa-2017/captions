const images = [
  {
    id: 1,
    path: 'http://stories.barkpost.com/wp-content/uploads/2014/05/dogs-allowed-cute-dog.jpg'
  },
  {
    id: 2,
    path: 'https://i.ytimg.com/vi/f-e9hSUSlSM/maxresdefault.jpg'
  },
  {
    id: 3,
    path: 'http://beforeitsnews.com/contributor/upload/486248/images/cat-funny-5.jpg'
  }
]

const initial = (state = {...images}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default initial
