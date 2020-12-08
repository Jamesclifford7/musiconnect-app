import React from 'react'
import './User.css'
import { Link } from 'react-router-dom'
import avatar from '../Images/icon-user-default.png' 
import Nav from '../Nav/Nav'

function User(props) {
    return (
        <>
            {            
                props.users.map((user, id) => {
                    if (user.id === parseInt(props.match.params.id)) {
                        return <>
                        <header>
                        {/* <Link to='/search'><h2>Musiconnect</h2></Link> */}
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

export default User