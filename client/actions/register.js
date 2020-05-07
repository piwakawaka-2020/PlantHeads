import { saveUserToken } from '../utils/auth'
import { register } from '../apis/auth'
// import { receiveLogin, loginError } from './login'

export function registerUser(user) {
  return (dispatch) => {
      //returns a token and sends an api request
    register(user)
      .then(token => {
          //saves the token to localStorage
          saveUserToken(token)
          console.log('registered')
        // const userInfo = saveUserToken(token)
        // dispatch(receiveLogin(userInfo))
        // document.location = '/#/'
      })
      .catch(err => dispatch(loginError(err.response.body.message)))
  }
}