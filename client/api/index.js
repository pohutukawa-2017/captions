import request from 'superagent'
import { get } from '../auth/localstorage'
import { isAuthenticated } from '../auth'

const baseUrl = '/api/v1'

export default function consume (method = 'get', endpoint, data = {}) {
  const dataMethod = method.toLowerCase() === 'get' && 'query' || 'send'
  const token = get('token')
  const headers = {
    Accept: 'application/json'
  }
  if (isAuthenticated()) {
    headers['Authorization'] = `Bearer ${token}`
  }
  return request[method](baseUrl + endpoint)
    .set(headers)[dataMethod](data)
    .then((res) => {
      return res
    })
    .catch(err => {
      throw err
    })
}

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
      console.log(res.body.result)
      callback(null, res.body.result)
    }
  })
}
