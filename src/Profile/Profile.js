import React from 'react'
import './Profile.css'
import avatar from '../Images/icon-user-default.png' 
import { Link } from 'react-router-dom' 
import Nav from '../Nav/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* import { library } from '@fortawesome/fontawesome-svg-core' */
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons' 

function Profile(props) {
    return (
        <>
            <header>
                <button onClick={event => props.handleClearSearch(event)}><h2>Musiconnect</h2></button>
                <Nav user={props.user} handleClearSearch={props.handleClearSearch} handleLogout={props.handleLogout} />
            </header>
            <main>
                <section className="profile">
                    <div className="profile-container">
                        <div className="profile-header">
                            <div className="header-img-socials">
                                <img src={props.user.img ? props.user.img : avatar} alt="avatar" />
                                <a href="https://www.facebook.com/" target="_blank" ><FontAwesomeIcon icon={faFacebookF} /> </a>
                                <a href="https://twitter.com/home" target="_blank" ><FontAwesomeIcon icon={faTwitter} /> </a>
                                <a href="https://www.instagram.com/" target="_blank" ><FontAwesomeIcon icon={faInstagram} /> </a>
                            </div>
                            <h3>Username: {props.user.username}</h3>
                            <p>Name: {props.user.name}</p>
                            <p>City: {props.user.city}</p>
                            <p>Instrument(s): {props.user.instrument.join(', ')}</p>
                            <button><Link to='/editprofile'>Edit Profile</Link></button><br/>
                            {/* <button onClick={event => props.handleClearSearch(event)}>Search!</button> */}
                        </div>
                        <div className="profile-info">
                            <p>Music Links:</p>
                                        {props.user.soundcloud ? <a href="https://www.soundcloud.com" target="_blank">soundcloud</a> : null} <br/> 
                                        {props.user.bandcamp ? <a href="https://www.bandcamp.com" target="_blank">bandcamp</a> : null} <br/>  
                                        {props.user.spotify ? <a href="https://www.spotify.com" target="_blank">spotify</a> : null}
                            <p>Bio: {props.user.bio}</p>
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

export default Profile