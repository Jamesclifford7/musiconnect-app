import React from 'react'
import './User.css'
import { Link } from 'react-router-dom'
import avatar from '../Images/icon-user-default.png' 
import Nav from '../Nav/Nav'

function User(props) {
    // console.log(props)

    return (
        <>
            { 
            
            
                props.users.map((user, id) => {
                    if (user.id === parseInt(props.match.params.id)) {
                        return <>
                        <header>
                        <Link to='/search'><h2>Musiconnect</h2></Link>
                        <Nav user={props.user} />
                        
                    </header>
                    <main>
                        <section className="profile" key={id}>
                            <div className="profile-container">
                                <div className="profile-header">
                                    <div className="header-img-socials">
                                        <img src={avatar} alt="avatar" />
                                        <a href="https://twitter.com/home" class="fa fa-twitter">T</a>
                                        <a href="https://www.facebook.com/" class="fa fa-facebook">F</a>
                                        <a href="https://www.instagram.com/" class="fa fa-instagram">I</a>
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

/*

            <header>
                <h2>Musiconnect</h2>
                <nav>
                    <ul>
                        <li>About</li>
                        <li><img src={avatar} alt="avatar" /></li> 
                    </ul>
                </nav>
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
                            <button>Message</button>
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