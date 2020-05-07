import React from 'react'

function Nav() {
  return (
    <div id='navBar'>
        <h2 id='navHeading'><img id='icon' src='images/plantIcon.svg' />PlantHeads</h2>
        <ul>
            <li>Login</li>
            <li>Register</li>
            <li>Saved Plants</li>
            <li>Buy/Sell Plants</li>
            <li>Home</li>
        </ul>
    </div>
  )
}

export default Nav