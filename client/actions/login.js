
import { saveUserToken } from '../utils/auth'
import { login } from '../apis/auth'

export function requestLogin () {
  return {
    type: 'LOGIN_REQUEST',

  }
}

export function receiveLogin (user) {
  return {
    type: 'LOGIN_SUCCESS',
    user
  }
}

export function loginError (message) {
  return {
    type: 'LOGIN_FAILURE',
    message
  }
}

export function loginUser (user) {
  return dispatch => {
    dispatch(requestLogin(user))
    return login(user)
      .then((token) => {
        const userInfo = saveUserToken(token)
        dispatch(receiveLogin(userInfo))
        document.location = '/#/'
      })
      .catch(err => {
        dispatch(loginError(err.response.body.message))
      })
  }
}