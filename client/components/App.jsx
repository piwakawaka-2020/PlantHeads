import React from 'react'
import Register from './Register'
import Login from './Login'

import PlantView from './plantview/PlantView'

import HomePage from './HomePage'
import Nav from './Nav'
import CreateListing from './CreateListing'
import SavedPlants from './SavedPlants'
import ListingView from './ListingView'
import { connect } from 'react-redux'

import { HashRouter as Router, Route } from 'react-router-dom'
import Page404 from './Page404'

class App extends React.Component{
  render(){
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
        {this.props.auth.isAuthenticated ? 
        <Route exact path="/savedPlants" component={SavedPlants} />
        : <Route exact path="/savedPlants" component={Page404} /> }
        {/* this route for CreateListing is accessed through PlantView */}
        <Route exact path="/createListing/:plantsId" render={(props) => <CreateListing {...props} {...tempUser} />} />
        {/* this CreateListing route accessed through the ListingView */}
        <Route exact path="/createListing" render={(props) => <CreateListing {...props} {...tempUser} />} />
        <Route exact path="/listings" component={ListingView} />
      </Router>
      </>
  )
  }
}

const mapStateToProps = state =>{
  return{
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App)
