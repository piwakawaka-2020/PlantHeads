import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserTokenInfo } from '../utils/auth'
import { logoutUser } from '../actions/logout'

class Nav extends React.Component {
  render() {
    const user = getUserTokenInfo()
    return (
      <div id='navBar'>
        <h2 id='navHeading'><img id='icon' src='images/plantIcon.svg' />PlantHeads</h2>
        <ul>
          {/* {user.length > 0 ? <></> : <Link to='/login'><li>Login</li></Link>}
            {user.length > 0 ? <></> : <Link to='/register'><li>Register</li></Link>} */}
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