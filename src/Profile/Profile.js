import React from 'react'
import './Profile.css'
import avatar from '../Images/icon-user-default.png' 
import { Link } from 'react-router-dom' 
import Nav from '../Nav/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                                {/* <FontAwesomeIcon icon={["fab", "facebook-f"]} /> */}
                                <a href="https://twitter.com/home" target="_blank" className="fa fa-twitter">T</a>
                                <a href="https://www.facebook.com/" target="_blank" className="fa fa-facebook">F</a>
                                <a href="https://www.instagram.com/" target="_blank" className="fa fa-instagram">I</a>
                            </div>
                            <h3>Username: {props.user.username}</h3>
                            <p>Name: {props.user.name}</p>
                            <p>City: {props.user.city}</p>
                            <p>Instrument(s): {props.user.instrument.join(', ')}</p>
                            <button><Link to='/editprofile'>Edit Profile</Link></button><br/>
                            {/* <button onClick={event => props.handleClearSearch(event)}>Search!</button> */}
                        </div>
                        <div className="profile-info">
                            <p>Music Links: <br/> 
                                        {props.user.soundcloud ? props.user.soundcloud : null} <br/> 
                                        {props.user.bandcamp ? props.user.bandcamp : null} <br/>  
                                        {props.user.spotify ? props.user.spotify : null}
                                    </p>
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

/*

<header>
    <h2>Musiconnect</h2>
    <Nav user={props.user}/>
</header>
<main>
    <section className="profile">
        <div className="profile-container">
            <div className="profile-header">
                <div className="header-img-socials">
                    <img src={avatar} alt="avatar" />
                    <a href="https://twitter.com/home" class="fa fa-twitter">T</a>
                    <a href="https://www.facebook.com/" class="fa fa-facebook">F</a>
                    <a href="https://www.instagram.com/" class="fa fa-instagram">I</a>
                </div>
                <h3>Username</h3>
                <p>Name</p>
                <p>City</p>
                <button><Link to='/editprofile'>Edit Profile</Link></button>
            </div>
            <div className="profile-info">
                <p>Instrument(s):</p>
                <p>Music Links:</p>
                <p>Bio:</p>
            </div>
        </div>
    </section>
</main>
<footer>
    <span>	&#169; Musiconnect 2020</span>
</footer>

*/