import {postNewCaption} from '../api'

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

export const saveNewCaption = (caption, cb) => {
  return (dispatch) => {
    postNewCaption(caption.imageId, {text: caption.text}, (err, res) => {
      if (err) return console.log(err) // TODO: Error component
      // TODO: update store captions from api
      cb(res.captionId)
    })
  }
}
