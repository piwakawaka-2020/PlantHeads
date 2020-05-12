import React from 'react'


//needs to be linked from the SingleComponent to send an email to the seller from the buyer
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
            <div className='contactSeller'>
                <form onSubmit={this.handleSubmit}>
                    <div className='contactSellerHeader'>
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
                        <textarea name="message" rows="10" cols="30" onChange={this.handleChange} />
                        <br/><br/>
                        <input type="submit" value="Send" />
                        <input type="reset" value="Reset" />
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}


export default EmailForm