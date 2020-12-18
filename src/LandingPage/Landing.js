import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'

function Landing(props) {
    return (
        <>
            <header className="landing-header">
                <h2><Link to='/'>Musiconnect</Link></h2>
                <Nav user={props.user} />
            </header>
            <main>
                <section className="landing">
                    <h1>Connect with other musicians in your city</h1>
                    <p>Lennon needed McCartney, and Michael Jackson needed Quincy Jones. 
                        Whether you are looking to collaborate on the next <i>Thriller</i> or simply get together and jam, Musiconnect offers the premier platform for meeting other musicians.</p>
                </section>
        
                <section className="info">
                    <div className="flex-container">
                        <div className="flex-item">
                            <h2>Create a profile</h2>
                            <p>Are you a singer? Producer? Drummer? Fill out your profile so others can find you.</p>
                        </div>
                        <div className="flex-item">
                            <h2>Search</h2>
                            <p>Find like-minded musicians, for either playing big stages or informal jam sessions on the weekends.</p>
                        </div>
                        <div className="flex-item">
                            <h2>Connect</h2>
                            <p>Turn it up to 11!</p>
                        </div>    
                    </div>
                </section>

                <section className="signup">
                    <div className="flex-container">
                        <div className="flex-item-left">
                            <h2>Sign up</h2>
                        </div>
                        <div className="flex-item-right">
                            <div className="content">
                                <p>Your next show is right around the corner:</p>
                                <button><Link to='signup'>Sign Up</Link></button>
                            </div>
                        </div>
                    </div>
                </section>
            
            </main>
            <footer>
                <span>	&#169; Musiconnect 2020</span>
            </footer>
            
        </>
    )
}

export default Landing