import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <div id='pageNotFound'>
            <h1>Oops, did you get ahead of yourself young sprout?</h1>
            <h2> Let's get you signed in first!</h2>
            <br/>
            <Link to='/login'>
                <button className='greenHover'>Login</button>
            </Link>
            <div>
                <img className='bellsprout' src="https://pbs.twimg.com/media/EV1AeH_XQAAeMB2.jpg" />
            </div>
        </div>
    )
}

export default Page404