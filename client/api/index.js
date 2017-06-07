import request from 'superagent'

export function storePicture (url, callback) {
  request.send({ url })
    .end((errorMessage, res) => {
      if (errorMessage) {
        callback(errorMessage)
      } else {
        callback()
      }
    })
}
