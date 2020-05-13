import React from 'react'
import { connect } from 'react-redux'

class EmailForm extends React.Component {
    handleChange = e => {
        console.log(e.target.value)
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        alert('Email sent to Seller')
    }

    render() {
        return(
        <div className='email-boarder'>
            <div className='gif-plant-spin'>
            <iframe  src="https://giphy.com/embed/3oz8xFRCuL0yhR8y4g" width="449" height="500" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            </div>
            <div className='contact-seller'>
                <form onSubmit={this.handleSubmit}>
                    <div className='contact-seller-header'>
                        <h2>Contact Seller:</h2>
                    </div>
                    <div>
                        <p>
                        Name:<br/>
                        <input type="text" name="name" onChange={this.handleChange} />
                        <br/>
                        E-mail:<br/>
                        <input type="text" name="mail" onChange={this.handleChange} />
                        <br/>

                        Comment:<br/>
                        <textarea type="text" name="message" rows="10" cols="30" onChange={this.handleChange} />

                        Message:<br/>
                        <textarea name="message" rows="10" cols="30" onChange={this.handleChange} />

                        <br/><br/>
                        <input type="submit" value="Send" />
                        <input type="reset" value="Reset" />
                        </p>
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

export default connect(mapStateToProps) (EmailForm)