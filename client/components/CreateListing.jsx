import React from 'react'


class CreateListing extends React.Component {
  componentDidMount(){
    this.state = {
        user: 'test user',
        contact: '0271231234',
        email: 'email@email.com'
    }
    //the state will be set using user session, need to complete the Login component to call login endpoint


  }

  handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value,
      })
  }

  handleSubmit = event => {
    event.preventDefault()
    //Call API here, needs to complete API to call the routes from backend
    alert("Submitted!")
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Create Listing</h1>
        <p>Upload Picture</p>
        <input type="file" name="image"/>.
        <p>Price:</p>
        <input type="text" name="cost"/>
        <p>Type:</p>
        <input type="text" name="type"/>
        <p>Your care tips:</p>
        <input type="text" name="tips"/>
        <p>Shipping options:</p>
        <p>Buyer must pickup</p>
        <p>Name: {this.state.user}</p>
        <p>Contact: {this.state.contact}</p>
        <p>Email: {this.state.email}</p>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreateListing