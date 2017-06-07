import request from 'superagent'

export function apiGetImageById (id, callback) {
  console.log("api")
  request.get(`/images/${id}`)
  .end((err, res)=> {
    if (err) {
      callback(err.message)
		} else {
			callback(null, res.body.result[0].path)
		}
  })
}