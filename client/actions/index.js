import request from 'superagent'

export const UPLOAD_CONFIRMED = 'UPLOAD_CONFIRMED'

export function storePicture (pictureURL) {
  return (dispatch) => {
    request
      .post(/*the database*/)
      .send(pictureURL)
      .end((err, res) => {
        // To do: handle error
        dispatch(uploadConfirmed(res.body))
      })
  }
}

export function uploadConfirmed (response) {
  return {
    type: UPLOAD_CONFIRMED,
    response: response
  }
}
