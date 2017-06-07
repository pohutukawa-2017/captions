import request from 'superagent'

export function apiGetImageById (id, callback) {
  request.get(`/api/v1/images/${id}`)
  .end((err, res) => {
    if (err) {
      callback(err.message)
    } else {
      callback(null, res.body.result[0].path)
    }
  })
}

export function apiGetCaptionsById (id, callback) {
  request.get(`/api/v1/captions/${id}`)
  .end((err, res) => {
    if (err) {
      callback(err.message)
    } else {
      console.log(res.body.result)
      callback(null, res.body.result)
    }
  })
}
