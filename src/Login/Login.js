import React from 'react'
import './Login.css'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'

function Login(props) {
    console.log(props.user)
    return (
        <>
            <header>
                <Link to='/'><h2>Musiconnect</h2></Link>
                <Nav user={props.user} />
            </header>
            <main>
                <div className="login-form">
                    <h1>Login</h1>
                    <form onSubmit={event => props.handleLogin(event)}>
                        <label htmlFor="username">Username:</label>
                        <input id="username" type="text" required></input><br/>
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" required ></input><br/>
                        <button type="submit">Log In</button>
                    </form>
                </div>
                <div className="error-container">
                    {
                        props.user === 'not found'
                        ? console.log('username/password does not exist')
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

export default Login