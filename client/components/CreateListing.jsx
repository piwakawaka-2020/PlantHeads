import React from 'react'
import { createListing } from '../apis/listings'

class CreateListing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      usersId: this.props.usersId,
      plantsId: this.props.plantsId,
      contact: this.props.contact,
      email: this.props.email,
      scientificName: this.props.scientificName,
      commonName: this.props.commonName
    }
  }

  handleChange = e => {
    console.log(e.target.name)
    console.log(e.target.value)
      this.setState({
        [e.target.name]: e.target.value
      })
  }

  handleSubmit = event => {
    event.preventDefault()

    createListing({
      usersId: this.state.usersId,
      plantsId: this.state.plantsId,
      scientificName: this.state.scientificName,
      commonName: this.state.commonName,
      cost: this.state.cost
    })
      .then((newListing) => {
        //route the page to the ListingDetailsComponent(single listing view)
        alert("New Listing Added" + newListing)
      })
      .catch((err) => {
        alert("Cannot Add this listing " + err.message)
      })
  }
//Questions for BossMan:
//Type,
//Tips,
//Image Upload(stretch)

//Do we need to add this as another column on our database on the listing table?

//Do we have the contact, first name and last name on the users table or just the username?
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Create Listing</h1>
        <p>Upload Picture</p>
        <input type="file" name="image"/>
        <p>Price:</p>
        <input type="text" name="cost" onChange={this.handleChange}/>
        <p>Type:</p>
        <input type="text" name="type" onChange={this.handleChange}/>
        <p>Your care tips:</p>
        <input type="text" name="tips" onChange={this.handleChange}/>
        <p>Buyer must pickup</p>
        <p></p>
        <p>Name: {this.state.user}</p>
        <p>Contact: {this.state.contact}</p>
        <p>Email: {this.state.email}</p>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default CreateListing