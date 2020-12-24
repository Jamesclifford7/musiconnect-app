import React from 'react'
import './User.css'
import avatar from '../Images/icon-user-default.png' 
import Nav from '../Nav/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons' 

class User extends React.Component {
    constructor() {
        super(); 
        this.state = {
            showEmail: false
        }
    }

    handleMessageButton = (event) => {
        event.preventDefault(); 
        this.setState({
            showEmail: true
        })
    }

    render() {
        return (
            <>
            {
                this.props.searchResults.map((user, id) => {
                    if (user.id === parseInt(this.props.match.params.id)) {
                        return <>
                        <header>
                        
                        <button onClick={event => this.props.handleClearSearch(event)}><h2>Musiconnect</h2></button>
                        <Nav user={this.props.user} handleClearSearch={this.props.handleClearSearch} handleLogout={this.props.handleLogout} />
                        
                        </header>
                        <main key={id}>
                            <section className="profile">
                                <div className="profile-container">
                                    <div className="profile-header">
                                        <div className="header-img-socials">
                                            <img src={user.img ? user.img : avatar} alt="avatar" />
                                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" alt="fb-icon"><FontAwesomeIcon icon={faFacebookF} /> </a>
                                            <a href="https://twitter.com/home" target="_blank" rel="noreferrer" alt="twitter-icon"><FontAwesomeIcon icon={faTwitter} /> </a>
                                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" alt="ig-icon"><FontAwesomeIcon icon={faInstagram} /> </a>
                                        </div>
                                        <h3>{user.username}</h3>
                                        <p>{user.name}</p>
                                        <p>{user.city}</p>
                                        <p>{user.instrument.join(', ')}</p>
                                        <div className="email-container">
                                            {
                                                !this.state.showEmail
                                                ? <button onClick={event => this.handleMessageButton(event)}>Message</button>
                                                : <p>{user.email}</p>
                                            }
                                        </div>
                                    </div>
                                    <div className="profile-info">
                                        <p>Music Links:</p> 
                                            {this.props.user.soundcloud ? <a href="https://www.soundcloud.com" target="_blank" rel="noreferrer">soundcloud</a> : null} <br /> 
                                            {this.props.user.bandcamp ? <a href="https://www.bandcamp.com" target="_blank" rel="noreferrer">bandcamp</a> : null} <br/>  
                                            {this.props.user.spotify ? <a href="https://www.spotify.com" target="_blank" rel="noreferrer">spotify</a> : null}
                                        
                                        <p>Bio: {user.bio}</p>
                                    </div>
                                    <div className="back-button">
                                    <button onClick={event => this.props.backButton(event)} type="button">Back to search</button> 
                                    </div>
                                </div>
                                
                            </section>
                        </main>
                        <footer>
                            <span>	&#169; Musiconnect 2020</span>
                        </footer>
                    </>
                        } else {
                            return null
                        }
                   
                })
                }
            </>
        )
    }
}



export default User