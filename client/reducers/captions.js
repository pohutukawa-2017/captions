import {GET_CAPTION} from '../actions'
const initialState = {
  captions: [
    {
      id: 1,
      caption: 'this pic sucks'
    },
    {
      id: 2,
      caption: 'your food looks nice'
    },
    {
      id: 42,
      image: 'https://assets.entrepreneur.com/content/16x9/822/1413823428-amazingly-free-stock-websites.jpg'
    }
  ]}

function captions (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default captions
