import React from 'react'


//build a component that brings in the data base array of plants by id
//if there is no image then add a placeholder (default img maybe)
//connect to flexbox in css/html

export class DisplayPlant extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchPlant())
    }

    handleClick = () => {
        this.props.dispatch(fetchPlant())
    }

    render() {
        return (
            <>
                <ul>
                    {this.props.plant.map((plant) => (
                        <li key={plant.id}>
                            {/* <img src{plant.} */}
                        </li>
                    ))}
                    <button onclick={this.handleClick.}>
                            Plant Care & Information
                    </button>
                </ul>
            </>
        )

    }

}

