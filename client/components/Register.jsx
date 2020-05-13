import React from 'react'
import { connect } from 'react-redux'
import { register } from '../apis/auth'

class Register extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        confirmedPassword: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        const password = this.state.password
        const confirmedPassword = this.state.confirmedPassword

        if (password !== confirmedPassword) {
            alert("Your passwords don't match")
        } else {

            register(this.state)

            this.setState({
                first_name: '',
                last_name: '',
                username: '',
                email: '',
                password: '',
                confirmedPassword: ''
            })
            console.log('registered')
            this.props.history.push('/login')
        }
        // registerUser(this.state)

    }

    render() {
        return (
            <div className="register-style">
                <form id='registerForm' onSubmit={this.handleSubmit}>
                    <label>
                        <h2>Register</h2>
                    <br/>
                    <input placeholder='First Name' type="text" name="first_name" onChange={this.handleChange}/>
                    <input placeholder='Last Name' type="text" name="last_name" onChange={this.handleChange}/>
                    <br/>
                    <br />
                        <input placeholder='Username' type="text" name="username" onChange={this.handleChange} />
                        <br />
                    <br />
                        <input placeholder='Email' type="email" name='email' onChange={this.handleChange} />
                        <br />
                    <br />
                        <input placeholder='Password' type="password" name="password" onChange={this.handleChange} />
                        <br />
                    <br />
                        <input placeholder='Confirm Password' type="password" name="confirmedPassword" onChange={this.handleChange} />

                    </label>
                    <br />
                    <input className='greenHover' type="submit" value='Register' />
                </form>
            </div>
        )
    }
}

export default connect()(Register)