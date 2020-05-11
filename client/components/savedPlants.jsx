import React from 'react'
import App from './App'
import { getAllSavedPlants } from '../apis/plants'



class SavedPlants extends React.Component {
    state = {
        plant: []
    }

    componentDidMount(){
        getAllSavedPlants()
        .then(plant => {
            this.setState({
                plant: plant
            })
        })
    }
    

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
                     {this.state.plant.map((plant) => (
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="flip-card-front-image"  src={plant.photoURL} />
                            </div>
                        <div className="flip-card-back">
                            <h5>{plant.common_name}</h5> 
                            <h5>{plant.scientific_name}</h5> 
                        </div>
                    </div>
                  </div>
                     ))}
                </div>  
        </div> 
         )
   }
}



    //     {/* <div>
    //        <button onClick={this.handleClick}>
    //            Individual Plant Care & Information
    //        </button>
    //    </div> */} 
    //DO THIS AJ > 
    //OR AN ANCHOR TAG ON PLANT DIV WRAPPED WITH 'a' link
    // Han note keep classnames out of button (why?)
    //Make button under each plant because anchor tag will stop card flip
     
    


export default SavedPlants 

