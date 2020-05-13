import React from 'react'

import Results from './Results'

import {searchPlants} from '../apis/plants'

class HomePage extends React.Component {
    state = {
        search: '',
        results: [],
        complete: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit!')
        searchPlants(this.state.search, this.state.complete).then(res => {
            this.setState({
                   search: '',
                results: res
            })
        })
    }

    toggleComplete = (event) => {
        this.setState({
            complete: this.state.complete ? false : true
        })
    }

    render() {
        return (
            <>
            <div id='intro'>
                {/* <h1 id='heading'>PlantHeads</h1> */}
                <img className='heading' src="images/logo.png" alt="logo"/>
                <h2>For people who have a plant for a head</h2>
                <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.search} placeholder='Search for a plant!' name='search' id='search' />
                <input type="submit" id='searchSubmit'/>
                <br />
                <label className='checkboxLabel' htmlFor='complete' >Only show plants with complete data</label>
                <input className='checkbox' type='checkbox' name='complete' onChange={this.toggleComplete}/>
                </form>
            </div>
            <Results results={this.state.results} />
            </>
        )
    }
}

export default HomePage