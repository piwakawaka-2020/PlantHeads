
import request from 'superagent'

import { get } from '../utils/localstorage'
import { isAuthenticated, removeUser } from '../utils/auth'
import { saveUserToken } from '../utils/auth'


export function register(user) {
  const token = get('token')
  const headers = { Accept: 'application/json' }

  if (isAuthenticated()) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return request
    .post('/api/auth/register')
    .set(headers)
    .send(user)
    .then(res => {
      return saveUserToken(res.body.token)
    })
}

export function login (user) {
  const token = get('token')
  const headers = { Accept: 'application/json' }

  if (isAuthenticated()) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return request
    .post('/api/auth/login')
    .set(headers)
    .send(user)
    .then(res => {
      console.log('logged in')
      return res.body.token
    })
    .catch(err => {
      throw err
    })
}

export function logOut (){
  removeUser()
}