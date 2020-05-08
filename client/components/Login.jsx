import React from 'react'
import {login, logOut} from '../apis/auth'

class Login extends React.Component{

    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        login(this.state)

        this.setState({
            username: '',
            password: ''
        })

    }

    render(){
        return(
            <>
            <form onSubmit = {this.handleSubmit}>
                <label>
                    <h2>Login</h2>
                    <input type="text" name="username" placeholder='Username' onChange={this.handleChange}/>
                    <input type="text" name="password" placeholder='Password' onChange={this.handleChange}/>
                </label>
                <input type="submit" value='Log in'/>
                <button onClick={() => logOut()} >LogOut</button>
            </form>
            </>
        )
    }
}

export default Login