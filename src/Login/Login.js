import React from 'react'
import './Login.css'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'

function Login(props) {
    return (
        <>
            <header className="landing-header">
                <h2><Link to='/'>Musiconnect</Link></h2>
                <Nav user={props.user} />
            </header>
            <main>
                <div className="login-form">
                    <h1>Login</h1>
                    <form onSubmit={event => props.handleLogin(event)}>
                        <label htmlFor="username">Email or Username:</label>
                        <input id="username" type="text" required></input><br/>
                        <label htmlFor="password">Password:</label><br className="password-break" />
                        <input id="password" type="password" required ></input><br/>
                        <button type="submit">Log In</button>
                    </form>
                    <p>Demo username: ziggystardust7 <br/><br/>
                       Demo password: Heroes31 <br /><br />
                    </p>
                    {
                        props.user === 'not found'
                        ? <p>Oops! Username/password not found</p>
                        : null
                    }
                </div>
            </main>
            <footer>
                <span>	&#169; Musiconnect 2020</span>
            </footer>
        </>
    )
};

export default Login;