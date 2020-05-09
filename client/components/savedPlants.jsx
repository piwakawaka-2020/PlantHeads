import React from 'react'
import App from './App'



//hard data guff_________________________________________________
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
    },
    { 
        className: 1,
        user_id: 11,
        scientific_name: 'AA',
        plants_id: 101,
        photoURL: 'www.photo.com',
        notes: ''
    },
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
    },
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
            <div className='savedPlantRoom'>
             <div className='headingDiv'>
              <div className='headingDiv-image'>
                 <h1>The Conservatory</h1>
                 <h2>Save your favourite plants here!</h2>
              </div>
             </div> 
                <div className='plant-container'>
                     {plants.map((plant) => (
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="flip-card-front-image"  src={"/images/potplantexample.PNG"} />
                            </div>
                        <div className="flip-card-back">
                            <h5>Aloe Vera</h5> 
                            <h5>{plant.scientific_name}</h5>
                            <p></p> 
                        </div>
                    </div>
                  </div>
                     ))}
                </div>  
        </div> 
         )
 
    //     {/* <div>
    //        <button onClick={this.handleClick}>
    //            Individual Plant Care & Information
    //        </button>
    //    </div> */} 
    //DO THIS AJ > 
    //OR AN ANCHOR TAG ON PLANT DIV WRAPPED WITH 'a' link
    // Han note keep classnames out of button (why?)
     
    }
}

export default SavedPlants

