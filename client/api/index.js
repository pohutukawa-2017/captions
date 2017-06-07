import request from 'superagent'

import { get } from '../auth/localstorage'
import { isAuthenticated } from '../auth'

const baseUrl = '/api/v1'

export default function consume (method = 'get', endpoint, data = {}) {
  console.log(method, endpoint, data)
  const dataMethod = method.toLowerCase() === 'get' && 'query' || 'send'
  const token = get('token')
  const headers = {
    Accept: 'application/json'
  }
  console.log('token', token)
  if (isAuthenticated()) {
    console.log('this happened')
    headers['Authorization'] = `Bearer ${token}`
  }
  console.log(dataMethod)
  return request[method](baseUrl + endpoint)
    .set(headers)[dataMethod](data)
    .then((res) => {
      return res
    })
    .catch(err => {
      throw err
    })
}
