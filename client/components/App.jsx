import React from 'react'
import Register from './Register'
import Login from './Login'

import PlantView from './PlantView'

import HomePage from './HomePage'
import Nav from './Nav'
import CreateListing from './CreateListing'

const App = () => {
  return (
    <>
    <Nav />
    {/* <Register />
    <Login /> */}
    {/* <HomePage /> */}
    <CreateListing 
      user='bossManThomas' 
      usersId={3}
      plantsId={132811}
      contact='0221237654' 
      email='thomas@bossMan.co.nz'
      scientificName='Pothos Aurea'
      commonName='Devils Ivy'/>

      {/* details under createListing hardcoded to have results*/}
      {/* need to request this as props for the actual caller of CreateListing Component*/}
    
    </>
  )
}

export default App
