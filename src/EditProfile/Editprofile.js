import React from 'react'
import './Editprofile.css'
import avatar from '../Images/icon-user-default.png' 
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'

function Editprofile(props) {
    return (
        <>
            <header>
                <Link to='/search'><h2>Musiconnect</h2></Link>
                <Nav user={props.user} />
                {/*
                <nav>
                    <ul>
                        <li>About</li>
                        <li>Login</li>
                    </ul>
                </nav>
                */    }   
            </header>
            <main>
                <section className="profile">
                    <div className="form-container">
                        <img src={avatar} alt="avatar" /><br/>
                        <button>Change Profile Image</button>
                        <form onSubmit={event => props.handleUpdateProfile(event)}>
                            <label htmlFor="username">Username:</label>
                            <input id="username" type="text" /><br/>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" /><br/>
                            <label htmlFor="name">Name:</label>
                            <input id="name" type="text" /><br/>
                            <label htmlFor="city">City:</label>
                            <select id="city">
                                <option value="1">Los Angeles</option>
                                <option value="2">New York</option>
                                <option value="3">Nashville</option>
                                <option value="4">Austin</option>
                                <option value="5">Chicago</option>
                            </select><br/><br/>
                            <span>I am a:</span><br/>
                            <input type="radio" id="instrument" value="1" />
                            <label htmlFor="instrument">Guitarist</label><br/>
                            <input type="radio" id="instrument" value="2" />
                            <label htmlFor="instrument" >Bassist</label><br/>
                            <input type="radio" id="instrument" value="3" />
                            <label htmlFor="instrument">Drummer</label><br/>
                            <input type="radio" id="instrument" value="4" />
                            <label htmlFor="instrument" >Pianist/keyboards</label><br/>
                            <input type="radio" id="instrument" value="5" />
                            <label htmlFor="instrument" >Singer</label><br/>
                            <input type="radio" id="instrument" value="6" />
                            <label htmlFor="instrument" >Producer</label><br/><br/>
                            <span>Socials:</span><br/>
                            <label htmlFor="instagram">Instagram:</label>
                            <input id="instagram" type="text" /><br/>
                            <label htmlFor="facebook">Facebook:</label>
                            <input id="facebook" type="text" /><br/>
                            <label htmlFor="twitter">Twitter:</label>
                            <input id="twitter" type="text" /><br/><br/>
                            <span>Links to your music:</span><br/>
                            <label htmlFor="soundcloud">Soundcloud:</label>
                            <input id="soundcloud" type="text" /><br/>
                            <label htmlFor="bandcamp">Bandcamp:</label>
                            <input id="bandcamp" type="text" /><br/>
                            <label htmlFor="spotify">Spotify:</label>
                            <input id="spotify" type="text"/><br/><br/>
                            <label htmlFor="bio">Bio:</label><br/>
                            <textarea id="bio" ></textarea><br/>
                            <button type="submit">Save</button>
                        </form>
                    </div>
                </section>
            </main>
            <footer>
                <span>	&#169; Musiconnect 2020</span>
            </footer>
        </>
    )
}

export default Editprofile