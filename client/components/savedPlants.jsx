import React from 'react'
import App from './App'

//build a component that brings in the data base array of plants by className
//if there is no image then add a placeholder (default img maybe)
//connect to flexbox in css/html


const plants = [
    { 
        className: 1,
        user_id: 11,
        scientific_name: 'AA',
        plants_id: 101,
        photoURL: 'www.photo.com',
        notes: 'Botanical Lorem ipsum'
    }, 
    { 
        className: 2,
        user_id: 22,
        scientific_name: 'BB',
        plants_id: 102,
        photoURL: 'www.photo.com',
        notes: ''
    },
    { 
        className: 3,
        user_id: 33,
        scientific_name: 'CC',
        plants_id: 103,
        photoURL: 'www.photo.com',
        notes: ''
    },
    { 
        className: 1,
        user_id: 11,
        scientific_name: 'AA',
        plants_id: 101,
        photoURL: 'www.photo.com',
        notes: ''
    }
]


class SavedPlants extends React.Component {

    // componentDidMount() {
    //     this.props.dispatch(fetchPlant())
    // }

    // handleClick = () => {
    //     this.props.dispatch(fetchPlant())
    // }

    render() {
        return (
            <div id='savedPlantRoom'>
                {/* <div id='shelfTopLeft'></div>   
                <div id='shelfTopRight'></div>
                <div id='shelfBotLeft'></div>
                <div id='shelfBotRight'></div>
                <div id='TableBotleft'></div>
                <div id='TableBotRight'></div>
                <div id='Floor'></div> */}
                <div>
                    <ul>
                        {plants.map((plant) => (
                            <li>{plant.className}</li>
                        ))} 
                    </ul>
                </div> 
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <div className="flip-card-front-image"></div>  
                        </div>
                        <div className="flip-card-back">
                            <h1>Plant</h1> 
                            <p></p> 
                            </div>
                        </div>
                    </div>
                     <div>
                        <button onClick={this.handleClick}>
                            Individual Plant Care & Information
                        </button>
                    </div>               
            </div>
        )
    }
}

export default SavedPlants

