import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/logout'

class Nav extends React.Component {
  
  render() {
    return (
      <div id='navBar'>
        <h2 id='navHeading'><img id='icon' src='images/plantIcon.svg' /><img src="images/logo.png" alt=""/></h2>
        <ul>

            {this.props.auth.isAuthenticated ? 
            <>
            <Link to='/'><li onClick={() => this.props.logout()}>Logout</li></Link>
            <Link to='/savedPlants'><li>Saved Plants</li></Link>
            </>
            :
            <>
              <Link to='/login'><li>Login</li></Link>
              <Link to='/register'><li>Register</li></Link>
            </>
          }
          <Link to='/listings'><li>Buy/Sell Plants</li></Link>
          <Link to='/'><li>Home</li></Link>
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)