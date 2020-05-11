import React from 'react'

import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div id='navBar'>
        <h2 id='navHeading'><img id='icon' src='images/plantIcon.svg' />PlantHeads</h2>
        <ul>
            <Link to='/login'><li>Login</li></Link>
            <Link to='/register'><li>Register</li></Link>
            <Link to='/savedPlants'><li>Saved Plants</li></Link>
            <Link to='/listings'><li>Buy/Sell Plants</li></Link>
            <Link to='/'><li>Home</li></Link>
        </ul>
    </div>
  )
}
export default Nav