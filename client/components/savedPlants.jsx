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
         
            <div className='container'>
                <div className='plant-container'>
                     {plants.map((plant) => (
                    <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="flip-card-front-image"  src={"/images/potplantexample.PNG"} />
                        </div>
                        <div className="flip-card-back">
                            <h5>{plant.scientific_name}</h5> 
                            <h5>Asphodeloideae</h5>
                            <p></p> 
                        </div>
                    </div>
                  </div>
                     ))}
                </div>  
        </div> 
         )

//create a row of four plants this repeats and needs an index 
//array.map((item, i) => 
//item is the element and index is i
//greater than 3 less than seven
//in between curly braces in react 


    //     {/* <div>
    //        <button onClick={this.handleClick}>
    //            Individual Plant Care & Information
    //        </button>
    //    </div>                */}

        


    // return (<div>
    //     <ul>
    //         {/* {plants.map((plant) => ( */}
    //             <div className="flip-card">
    //             <div className="flip-card-inner">
    //                 <div className="flip-card-front">
    //                     <img src={plant.photoURL} />
    //                 </div>
    //                 <div className="flip-card-back">
    //                     <h5>{plant.scientific_name}</h5> 
    //                     <h5>Asphodeloideae</h5>
    //                     <p></p> 
    //                 </div>
    //             </div>
    //         </div>
    //         ))} 
    //     </ul>
    // </div> 
    //  )










        
        // return (
        //     <div id='savedPlantRoom'>
        //         <h1 className='heading'>Your Favourite Plants</h1>
        //         <div id='row'> 
        //              <div className="flip-card">
        //                     <div className="flip-card-inner">
        //                         <div className="flip-card-front">
        //                             <div className="flip-card-front-image"></div> 
        //                             {/* <img src={image} /> */}
        //                         </div>
        //                         <div className="flip-card-back">
        //                             <h5>Aloe</h5> 
        //                             <h5>Asphodeloideae</h5>
        //                             <p></p> 
        //                         </div>
        //                     </div>
        //                 </div>
        //             <div className="shelf-row">
        //                 <div className="flip-card">
        //                     <div className="flip-card-inner">
        //                         <div className="flip-card-front">
        //                             <div className="flip-card-front-image"></div>  
        //                         </div>
        //                         <div className="flip-card-back">
        //                             <h1>Plant</h1> 
        //                             <p></p> 
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flip-card">
        //                     <div className="flip-card-inner">
        //                         <div className="flip-card-front">
        //                             <div className="flip-card-front-image"></div>  
        //                         </div>
        //                         <div className="flip-card-back">
        //                             <h1>Plant</h1> 
        //                             <p></p> 
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="shelf-row">
        //                 <div className="flip-card">
        //                     <div className="flip-card-inner">
        //                         <div className="flip-card-front">
        //                             <div className="flip-card-front-image"></div>  
        //                         </div>
        //                         <div className="flip-card-back">
        //                             <h1>Plant</h1> 
        //                             <p></p> 
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flip-card">
        //                     <div className="flip-card-inner">
        //                         <div className="flip-card-front">
        //                             <div className="flip-card-front-image"></div>  
        //                         </div>
        //                         <div className="flip-card-back">
        //                             <h1>Plant</h1> 
        //                             <p></p> 
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flip-card">
        //                     <div className="flip-card-inner">
        //                         <div className="flip-card-front">
        //                             <div className="flip-card-front-image"></div>  
        //                         </div>
        //                         <div className="flip-card-back">
        //                             <h1>Plant</h1> 
        //                             <p></p> 
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="shelf-row">
        //                 <div className="flip-card">
        //                     <div className="flip-card-inner">
        //                         <div className="flip-card-front">
        //                             <div className="flip-card-front-image"></div>  
        //                         </div>
        //                         <div className="flip-card-back">
        //                             <h1>Plant</h1> 
        //                             <p></p> 
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flip-card">
        //                     <div className="flip-card-inner">
        //                         <div className="flip-card-front">
        //                             <div className="flip-card-front-image"></div>  
        //                         </div>
        //                         <div className="flip-card-back">
        //                             <h1>Plant</h1> 
        //                             <p></p> 
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flip-card">
        //                     <div className="flip-card-inner">
        //                         <div className="flip-card-front">
        //                             <div className="flip-card-front-image"></div>  
        //                         </div>
        //                         <div className="flip-card-back">
        //                             <h1>Plant</h1> 
        //                             <p></p> 
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flip-card">
        //                     <div className="flip-card-inner">
        //                         <div className="flip-card-front">
        //                             <div className="flip-card-front-image"></div>  
        //                         </div>
        //                         <div className="flip-card-back">
        //                             <h1>Plant</h1> 
        //                             <p></p> 
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>   
        //         </div>
        //     </div>  
        // )
    }
}

export default SavedPlants

