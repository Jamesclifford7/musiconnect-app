import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'


function Signup(props) {
    return (
        <>
            <header>
            <Link to='/'><h2>Musiconnect</h2></Link>
                <nav>
                    <ul>
                        <Link to='/about'><li>About</li></Link>
                        <Link to='/login'><li>Login</li></Link>
                        {/* <li><img src="images/icon-user-default.png" alt="avatar" width="25" height="25" /></li> */}
                    </ul>
                </nav>
            </header>
            <main>
                <div className="signup-form">
                    <h1>Sign Up</h1>
                    <form onSubmit={event => props.handleAddUser(event)}>
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="text" required></input><br/>
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" required></input><br/>
                        <p>*Password must be at least 6 characters long, include one uppercase letter, and one number</p>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </main>
            <footer>
                <span>	&#169; Musiconnect 2020</span>
            </footer>
        </>
    )
} 

export default Signup