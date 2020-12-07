import React from 'react'
import './About.css'
import avatar from '../Images/icon-user-default.png' 
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'

function About(props) {
    return (
        <>
            <header>
                {
                    props.user.length === 1
                    ? <Link to='/search'><h2>Musiconnect</h2></Link>
                    : <Link to='/'><h2>Musiconnect</h2></Link>
                }
                <Nav user={props.user} />
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

/*

{
                props.user.length === 1
                ? <header>
                <h2>Musiconnect</h2>
                <nav>
                    <ul>
                        <Link to='/about'><li>About</li></Link>
                        
                        {/* <Link to='/profile'><li><img src={avatar} alt="avatar" /></li></Link> 
                        <li><button><img src={avatar} alt="avatar" /></button></li>
                    </ul>
                    <div className="dropdown-container">
                            <div className="dropdown">
                                <Link to='/profile'>Your Profile</Link><br/>
                                <Link to='/search'>Search</Link>
                            </div>    
                        </div>
                    
                </nav>
            </header>
            : <header>
            <h2>Musiconnect</h2>
            <nav>
                <ul>
                    <li>About</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
            }

*/