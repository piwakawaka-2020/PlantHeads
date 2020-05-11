import React from 'react'
import { connect } from 'react-redux'
import {logoutUser} from '../actions/logout'


const Logout = (props) =>{
    return(
        <button onClick = {() => props.dispatch(logoutUser())}>Logout</button>
    )
}

export default connect()(Logout)