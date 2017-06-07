import request from 'superagent'

export function getImageById (id, callback) {
  request.get(`/api/v1/images/${id}`)
  .end((err, res) => {
    if (err) {
      callback(err)
    } else {
      callback(null, res.body.result[0].path)
    }
  })
}

export function getCaptionsById (id, callback) {
  request.get(`/api/v1/captions/${id}`)
  .end((err, res) => {
    if (err) {
      callback(err)
    } else {
      callback(null, res.body.result)
    }
  })
}

export function postNewCaption (imageId, text, cb) {
  request.post(`/api/v1/captions/${imageId}`)
  .send(text)
  .end((err, res) => {
    cb(err, res.body)
  })
}
