import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'

function About(props) {
    return (
        <>
            <header className={props.user.email ? "" : "landing-header"}>
                {
                    props.user.email
                    ? <button onClick={event => props.handleClearSearch(event)}><h2>Musiconnect</h2></button>
                    : <h2><Link to='/'>Musiconnect</Link></h2>
                }
                
                <Nav user={props.user} handleClearSearch={props.handleClearSearch} handleLogout={props.handleLogout} />
            </header>
            
            <main>
                <div className="about-container">
                    <h1>About</h1>
                    <p>Musiconnect was founded with a simple premise in mind: help you find and connect with other like-minded musicians in your city. Our platform is built by musicians for musicians, so we understand the struggle of meeting the right people to play with. Regardless of whether you are just starting out or looking to headline Glastonbury, our service is designed to create a community for musicians of all instruments, backgrounds, and walks of life.</p>
                </div>
            </main>
            <footer>
                <span>	&#169; Musiconnect 2020</span>
            </footer>
        </>
    )
}

export default About