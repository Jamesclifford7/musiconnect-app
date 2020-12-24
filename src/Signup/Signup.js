import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'

function Signup(props) {
    return (
        <>
            <header className="landing-header">
                <h2><Link to='/'>Musiconnect</Link></h2>
                <Nav user={props.user} />
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
                    {
                        props.signupMessage
                        ? <p>{props.signupMessage}</p>
                        : null
                    }
                </div>
            </main>
            <footer>
                <span>	&#169; Musiconnect 2020</span>
            </footer>
        </>
    )
} 

export default Signup