import React from 'react'
import Register from './Register'
import Login from './Login'

import PlantView from './plantview/PlantView'

import HomePage from './HomePage'
import Nav from './Nav'
import CreateListing from './CreateListing'
import SavedPlants from './SavedPlants'
import ListingView from './ListingView'
import SingleListing from './SingleListing'


import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => {

  //This should be fetched from the login session, currently having an error with login/register API
  const tempUser = {
    username:'bossManThomas',
    usersId:3,
    email:'thomas@bossMan.co.nz'
  }

  return (
    <>
      <Router>
        <Route path='/' component={Nav} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/plant/:plantId" component={PlantView} />
        <Route exact path="/savedPlants" component={SavedPlants} />
        {/* this route for CreateListing is accessed through PlantView */}
        <Route exact path="/createListing/:plantsId" render={(props) => <CreateListing {...props} {...tempUser} />} />
        {/* this CreateListing route accessed through the ListingView */}
        <Route exact path="/createListing" render={(props) => <CreateListing {...props} {...tempUser} />} />
        <Route exact path="/listings" component={ListingView} />
        <Route exact path="/singlelistings/:plantsId" render={(props) => <SingleListing {...props} {...tempUser} />} />
      </Router>
      </>
  )
}

export default App
