import request from 'superagent'

export const UPLOAD_CONFIRMED = 'UPLOAD_CONFIRMED'

export function postImage (pictureURL) {
  return (dispatch) => {
    request
      .post('/api/v1/images')
      .send({path: pictureURL})
      .end((err, res) => {
        // To do: handle error
        dispatch(receivedImageId(res.body.id))
      })
  }
}

export function receivedImageId (id) {
  return {
    type: RECEIVED_IMAGE_ID,
    id
  }
}

export function uploadImage () {
  return function (dispatch) {
    cloudinary.openUploadWidget({cloud_name: 'dboovyrqb', upload_preset: 'p8w4fgph', tags: ['test']},
      (error, result) => {
        dispatch(postImage(result[0].url))
        // Todo handle error
      })
  }
}
