  
import request from 'superagent'

import { get } from '../utils/localstorage'
import { isAuthenticated } from '../utils/auth'

export function register (user) {
  const token = get('token')
  const headers = { Accept: 'application/json' }

  if (isAuthenticated()) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return request
    .post('/api/v1/auth/register')
    .set(headers)
    .send(user)
    .then(res => res.body.token)
}
