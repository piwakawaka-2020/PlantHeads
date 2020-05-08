import React from 'react'

import Results from './Results'

import {searchPlants} from '../apis/plants'

class HomePage extends React.Component {
    state = {
        search: '',
        results: []
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit!')
        // searchPlants().then(res => {
        //     this.setState({
                //    search: '',
        //         results: res
        //     })
        // })
        this.setState({
            search: '',
            results: searchPlants()
        })
    }

    render() {
        return (
            <>
            <div id='intro'>
                <h1 id='heading'>PlantHeads</h1>
                <h2>For people who have a plant for a head</h2>
                <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.search} placeholder='Search for a plant!' name='search' id='search' />
                <input type="submit" id='searchSubmit'/>
                </form>
            </div>
            <Results results={this.state.results} />
            </>
        )
    }
}

export default HomePage