import React from 'react'
import "../App.css"
const Navbar = () => {
    return (
        <div>
            <div className="Nav">
                <div className="details">
                    <h1>Kalvium</h1>
                    <p>About us</p>
                    <p>Contact</p>
                    <p>Courses</p>
                </div>
                <div className="login">
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
