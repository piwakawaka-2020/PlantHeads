import React from 'react'
import Register from './Register'
import Login from './Login'

import PlantView from './plantview/PlantView'

import HomePage from './HomePage'
import Nav from './Nav'
import CreateListing from './CreateListing'

import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
      <Route path='/' component={Nav} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/plant/:plantId" component={PlantView} />
      <Route exact path="/createListing" component={CreateListing} />
    </Router>
    </>
  )
}

export default App
