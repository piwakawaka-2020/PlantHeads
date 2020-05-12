import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <>
            Oops, did you get ahead of yourself young sprout?
            Let's get you signed in first!
            <Link to='/login'>
                <button>Login</button>
            </Link>
        </>
    )
}

export default Page404