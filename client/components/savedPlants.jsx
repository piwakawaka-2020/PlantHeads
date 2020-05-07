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
        notes: 'Im baby chicharrones lumbersexual ethical gluten-free. Yuccie occupy glossier godard VHS. YOLO kickstarter sriracha meggings. Letterpress stumptown woke keffiyeh kitsch la croix. Shoreditch narwhal selvage shabby chic tumeric try-hard. Wayfarers leggings bushwick, cloud bread fingerstache truffaut roof party hammock jean shorts craft beer ugh sustainable sartorial chia tbh.'
    },
    { 
        className: 3,
        user_id: 33,
        scientific_name: 'CC',
        plants_id: 103,
        photoURL: 'www.photo.com',
        notes: 'Knausgaard etsy mumblecore plaid vegan, lomo flexitarian fingerstache hoodie hexagon venmo try-hard single-origin coffee gochujang salvia. Tofu pabst poutine lumbersexual kogi gochujang selfies forage. Heirloom YOLO whatever af air plant jean shorts. Brooklyn salvia health goth next level scenester, cold-pressed fixie quinoa.'
    },
    { 
        className: 1,
        user_id: 11,
        scientific_name: 'AA',
        plants_id: 101,
        photoURL: 'www.photo.com',
        notes: 'Brunch next level hammock 90s. Affogato salvia shoreditch selvage authentic cliche fashion axe vape asymmetrical mumblecore swag hot chicken. Pok pok sriracha heirloom brooklyn succulents. Green juice skateboard mumblecore, polaroid keytar af pinterest single-origin coffee brunch flannel.'
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
            <div id= 'savedPlantContainer'>
                <div id='shelfTopLeft'></div>   
                <div id='shelfTopRight'></div>
                <div id='shelfBotLeft'></div>
                <div id='shelfBotRight'></div>
                <div id='TableBotleft'></div>
                <div id='TableBotRight'></div>
                <div id='Floor'></div>
                    <ul>
                        {plants.map((plant) => (
                            <li>{plant.className}</li>
                        ))} 
                    </ul>
                <div>
                        <button onclick={this.handleClick}>
                            Individual Plant Care & Information
                        </button>
                </div>
            </div>
        )

    }

}

export default SavedPlants

//className.user_id.scientific_name.plants_id
// className: {
//     user_id: {
//         scientific_name: {
//             plants_id: {

//             }

//         }
//     }
// }