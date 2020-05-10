
import { logOut } from '../apis/auth'

function requestLogout() {
    return {
        type: 'LOGOUT_REQUEST'
    }
}

function receiveLogout() {
    return {
        type: 'LOGOUT_SUCCESS',
    }
}

// Logs the user out
export function logoutUser() {
    return dispatch => {
        //add redirect
        dispatch(requestLogout())
        logOut()
        dispatch(receiveLogout())
        console.log("logged out")
        window.location.reload(false)
    }
}