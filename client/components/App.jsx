import React from 'react'
import SavedPlants from './SavedPlants'

import Register from './Register'
import Login from './Login'

import PlantView from './PlantView'

import HomePage from './HomePage'
import Nav from './Nav'

const App = () => {
  return (
    <>
    <Nav />
    {/* <Register />
    <Login /> */}
    <HomePage />
    <SavedPlants/>
    </>
  )
}

export default App
