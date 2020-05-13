import React from 'react'
import { createListing } from '../apis/listings'
import { getPlant } from '../apis/plants'
import { connect } from 'react-redux'

class CreateListing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      plantsId: this.props.match.params.plantsId,
      scientificName: '',
      commonName: ''
    }
  }

  handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }

  handlePhoto = e => {
    this.getBase64(e.target.files[0],
      (base64) => {
        this.setState({
          photoFile: base64
        })
    })
  }

  getBase64 = (file, callback) =>{
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      callback(reader.result)
    }
    reader.onerror = function (err) {
      console.log(err)
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    createListing({
      usersId: this.props.id,
      plantsId: this.state.plantsId,
      scientificName: this.state.scientificName,
      commonName: this.state.commonName,
      cost: this.state.cost,
      type: this.state.type,
      careTips: this.state.careTips,
      photoFile: this.state.photoFile
    })
      .then((newListing) => {
        this.props.history.push('/listings/' + newListing.id)
      })

      .catch((err) => {
        console.error(err)
        this.props.history.push('/listings/')
      })
  }

  componentDidMount () {
    if ( typeof this.state.plantsId !== 'undefined') {
      getPlant(this.state.plantsId)
      .then((plant) => {
        this.setState({
          scientificName: plant.scientific_name,
          commonName: plant.common_name,
        })
      })
    }
  }

  render() {
    return (
      <div className='page-boarder'>
        <div className='mainCreateListingContainer'>
        <form onSubmit={this.handleSubmit}>
          <div className='postListingHeader'>
            <h1><img className='hiddenOddish' src="/images/oddishtrans.png" /> To Give A Plant To Another Loving Family</h1>
          </div>
          <div>
              <p className='postListInfo'>We invite our fellow #plantHeads sellers to list your plants with us. Rather than listing via commercially operated websites, sell your plants with PlantHeads and help grow our community</p>
              <br/>
              <p className='postListInfo'>MUST SHARE IT! MUST SELL IT.</p>
              <br/>
              <p className='pickupInfo'>Please Read! Buyer Must Pickup</p>
          </div>
          <br/>
          <div className='createListingContainer'>
            <p>Upload a Photo Below</p>
            <input type="file" name="photoFile" className='createListingSubmit' onChange={this.handlePhoto}/>
          </div>
          <br/>


          <div className='userInput'>

            <div className='createListingInputStructure'>
              <p className='abitOfpadding'>Botanical Name:</p>
              <input type="text" name="scientificName" className='createListingInput' value={this.state.scientificName} onChange={this.handleChange}/>
              <p className='abitOfpadding'>Common Name:</p>
              <input type="text" name="commonName" className='createListingInput' value={this.state.commonName} onChange={this.handleChange}/>
            </div>

            <div className='createListingInputStructure'>
              <p className='abitOfpadding'>Type of Plant:</p>
              <input type="text" name="type" className='createListingInput' onChange={this.handleChange}/>
              <p className='abitOfpadding'>Price:</p>
              <input type="text" name="cost" className='createListingInput' onChange={this.handleChange}/>
            </div>
          </div>

          <div className='careTipsInput'>
            <p className='abitMorepadding'> Share Your Care Tips:</p>
            <textarea name="careTips" className='createListingInput' rows="10" cols="30" onChange={this.handleChange} />
          </div>
          <br/>
          <div>
          </div>
          <br/>
          <div className='submitListing'>
            <input type="submit" value="Submit" className='createListingSubmit' /> 
          </div>      
        </form>
        </div>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.auth.user
  }
}

export default connect(mapStateToProps) (CreateListing)