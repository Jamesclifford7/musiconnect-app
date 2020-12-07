import React from 'react'
import './Signup.css'

function Signup(props) {
    return (
        <>
            <header>
                <h2>Musiconnect</h2>
                <nav>
                    <ul>
                        <li>About</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className="signup-form">
                    <h1>Sign Up</h1>
                    <form onSubmit={event => props.handleAddUser(event)}>
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="text"></input><br/>
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password"></input><br/>
                        <p>*Password must include one number and be at least 6 characters long</p>
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