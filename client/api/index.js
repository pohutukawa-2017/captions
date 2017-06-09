import request from 'superagent'
import {get} from '../auth/localstorage'
import {isAuthenticated} from '../auth'

const baseUrl = '/api/v1'
export const registerUrl = '/register'
export const loginUrl = '/authenticate'

export function login (method = 'get', endpoint, data = {}) {
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
    .catch((err) => {
      throw err
    })
}

export function postNewImage (pictureURL, callback) {
  request
    .post('/api/v1/images')
    .send({path: pictureURL})
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

export function getAllImages (callback) {
  request.get('/api/v1/images')
  .end((err, res) => {
    if (err) {
      callback(err)
    } else {
      callback(null, res.body)
    }
  })
}

export function getImageById (id, callback) {
  request.get(`/api/v1/images/${id}`)
  .end((err, res) => {
    if (err) {
      callback(err)
    } else {
      callback(null, res.body.result[0])
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

export function removeCaption (captionId, callback) {
  request.delete(`/api/v1/captions/${captionId}`)
  .end((err, res) => {
    if (err) {
      callback(err)
    } else {
      callback(null, res.body.id)
    }
  })
}
