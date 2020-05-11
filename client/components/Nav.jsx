import React from 'react'

import {Link} from 'react-router-dom'

import {getUserTokenInfo} from '../utils/auth'

function Nav() {
  const user = getUserTokenInfo()
  return (
    <div id='navBar'>
        <h2 id='navHeading'><img id='icon' src='images/plantIcon.svg' />PlantHeads</h2>
        <ul>
            {user ? <></> : <Link to='/login'><li>Login</li></Link>}
            {user ? <></> : <Link to='/register'><li>Register</li></Link>}
            <Link to='/savedPlants'><li>Saved Plants</li></Link>
            <Link to='/listings'><li>Buy/Sell Plants</li></Link>
            <Link to='/'><li>Home</li></Link>
        </ul>
    </div>
  )
}
export default Nav