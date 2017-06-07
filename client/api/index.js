import request from 'superagent'

export function apiGetImageById (id, callback) {
  request.get(`/images/${id}`)
  .end((err, res)=> {
    if (err) {
      callback(err.message)
		} else {
			callback(res.body)
		}
  })
}