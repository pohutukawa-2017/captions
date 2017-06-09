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
  login('post', `/images`, {path: pictureURL})
    .then((res) => {
      callback(null, res.body)
    })
    .catch((err) => {
      return callback(err)
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
  login('post', `/captions/${imageId}`, text)
  .then((res) => {
    cb(null, res.body)
  })
  .catch((err) => {
    return cb(err)
  })
}

export function removeCaption (captionId, callback) {
  login('delete', `/captions/${captionId}`)
    .then((res) => {
      callback(null, res.body)
    })
    .catch((err) => {
      return callback(err)
    })
}

export function uploadImage (file, callback) {
  request.post('https://api.cloudinary.com/v1_1/dboovyrqb/upload')
    .field('upload_preset', 'p8w4fgph')
    .field('file', file)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else if (res.body.secure_url !== '') {
        callback(null, res.body.secure_url)
      }
    })
}
