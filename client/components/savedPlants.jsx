import React from 'react'
import App from './App'




class SavedPlants extends React.Component {
    state = {
        plants_id: '',
        photoURL: '',
        common_name: '',
        scientific_name: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        searchPlants(this.state.search).then(res => {
            
            this.setState({
                plants_id: '',
                photoURL: '',
                common_name: '',
                scientific_name: ''  
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
                     {plants.map((plant) => (
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="flip-card-front-image"  src={"saved_plant.photoURL"} />
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

