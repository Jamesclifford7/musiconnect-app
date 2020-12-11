import React from 'react'
import './User.css'
import avatar from '../Images/icon-user-default.png' 
import Nav from '../Nav/Nav'

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
                    if (user.id == parseInt(this.props.match.params.id)) {
                        return <>
                        <header>
                        
                        <button onClick={event => this.props.handleClearSearch(event)}><h2>Musiconnect</h2></button>
                        <Nav user={this.props.user} handleClearSearch={this.props.handleClearSearch} handleLogout={this.props.handleLogout} />
                        
                        </header>
                        <main>
                            <section className="profile" key={id}>
                                <div className="profile-container">
                                    <div className="profile-header">
                                        <div className="header-img-socials">
                                            <img src={user.img ? user.img : avatar} alt="avatar" />
                                            <a href="https://twitter.com/home" target="_blank" className="fa fa-twitter">T</a>
                                            <a href="https://www.facebook.com/" target="_blank" className="fa fa-facebook">F</a>
                                            <a href="https://www.instagram.com/" target="_blank" className="fa fa-instagram">I</a>
                                        </div>
                                        <h3>{user.username}</h3>
                                        <p>{user.name}</p>
                                        <p>{user.city}</p>
                                        <p>{user.instrument}</p>
                                        <div className="email-container">
                                            {
                                                !this.state.showEmail
                                                ? <button onClick={event => this.handleMessageButton(event)}>Message</button>
                                                : <p>{user.email}</p>
                                            }
                                        </div>
                                    </div>
                                    <div className="profile-info">
                                        <p>Music Links: <br/> 
                                            {user.soundcloud ? user.soundcloud : null} <br/> 
                                            {user.bandcamp ? user.bandcamp : null} <br/>  
                                            {user.spotify ? user.spotify : null}
                                        </p>
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
                        }
                   
                })
                }
            
            {            
            /*    this.props.users.map((user, id) => {
                    if (user.id === parseInt(this.props.match.params.id)) {
                        return <>
                        <header>
                        
                        <button onClick={event => this.props.handleClearSearch(event)}><h2>Musiconnect</h2></button>
                        <Nav user={this.props.user} handleClearSearch={this.props.handleClearSearch} handleLogout={this.props.handleLogout} />
                        
                    </header>
                    <main>
                        <section className="profile" key={id}>
                            <div className="profile-container">
                                <div className="profile-header">
                                    <div className="header-img-socials">
                                        <img src={avatar} alt="avatar" />
                                        <a href="https://twitter.com/home" target="_blank" className="fa fa-twitter">T</a>
                                        <a href="https://www.facebook.com/" target="_blank" className="fa fa-facebook">F</a>
                                        <a href="https://www.instagram.com/" target="_blank" className="fa fa-instagram">I</a>
                                    </div>
                                    <h3>{user.username}</h3>
                                    <p>{user.name}</p>
                                    <p>{user.city}</p>
                                    <p>{user.instrument}</p>
                                    <div className="email-container">
                                        {
                                            !this.state.showEmail
                                            ? <button onClick={event => this.handleMessageButton(event)}>Message</button>
                                            : <p>{user.email}</p>
                                        }
                                    </div>
                                </div>
                                <div className="profile-info">
                                    <p>Music Links: <br/> 
                                        {user.soundcloud ? user.soundcloud : null} <br/> 
                                        {user.bandcamp ? user.bandcamp : null} <br/>  
                                        {user.spotify ? user.spotify : null}
                                    </p>
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
                        }
                   
                })
            */    }
            </>
        )
    }
}

/*
function User(props) {
    return (
        <>
            {            
                props.users.map((user, id) => {
                    if (user.id === parseInt(props.match.params.id)) {
                        return <>
                        <header>
                        
                        <button onClick={event => props.handleClearSearch(event)}><h2>Musiconnect</h2></button>
                        <Nav user={props.user} handleClearSearch={props.handleClearSearch} handleLogout={props.handleLogout} />
                        
                    </header>
                    <main>
                        <section className="profile" key={id}>
                            <div className="profile-container">
                                <div className="profile-header">
                                    <div className="header-img-socials">
                                        <img src={avatar} alt="avatar" />
                                        <a href="https://twitter.com/home" className="fa fa-twitter">T</a>
                                        <a href="https://www.facebook.com/" className="fa fa-facebook">F</a>
                                        <a href="https://www.instagram.com/" className="fa fa-instagram">I</a>
                                    </div>
                                    <h3>{user.username}</h3>
                                    <p>{user.name}</p>
                                    <p>{user.city}</p>
                                    <p>{user.instrument}</p>
                                    <button>Message</button>
                                </div>
                                <div className="profile-info">
                                    <p>Music Links:</p>
                                    <p>Bio: {user.bio}</p>
                                </div>
                                <div className="back-button">
                                <button onClick={event => props.backButton(event)} type="button">Back to search</button> 
                                </div>
                            </div>
                            
                        </section>
                    </main>
                    <footer>
                        <span>	&#169; Musiconnect 2020</span>
                    </footer>
                    </>
                        }
                   
                })
                }
            
        </>
    )
}
*/

export default User