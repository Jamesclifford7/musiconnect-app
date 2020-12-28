import React from 'react'
import './Editprofile.css'
import avatar from '../Images/icon-user-default.png' 
import Nav from '../Nav/Nav'

class Editprofile extends React.Component {
    constructor() {
        super();
        this.state = {
            showDelete: false
        };
    };

    renderDelete = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            showDelete: !prevState.showDelete
        }));
    };

    render() {
        return (
            <>
            { 
            this.props.user.email
            ? <>
            <header>
                
                {
                    (!this.props.user.username || !this.props.user.name || !this.props.user.city)
                    ? <h2>Musiconnect</h2>
                    : <><button onClick={event => this.props.handleClearSearch(event)}><h2>Musiconnect</h2></button>
                    <Nav user={this.props.user} handleLogout={this.props.handleLogout} handleClearSearch={this.props.handleClearSearch} /></>
                }
            </header>
            <main>
                <section className="profile">
                    <div className="form-container">
                        <h1>Edit Your Profile</h1>
                        <img src={avatar} alt="avatar" /><br/>
                        <button>Change Profile Image</button>
                        <form onSubmit={event => this.props.handleUpdateProfile(event)}>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" /><br/>
                            <label htmlFor="name">Name:</label>
                            {
                                (this.props.user.name)
                                ? <> <input id="name" type="text" /><br/></>
                                : <> <input id="name" type="text" required /><br/></>
                            }
                            <label htmlFor="city">City:</label>
                            {
                                (this.props.user.city)
                                ? <><select id="city">
                                    <option value="" disabled defaultValue>Select</option>
                                    <option value="1">Los Angeles</option>
                                    <option value="2">New York</option>
                                    <option value="3">Nashville</option>
                                    <option value="4">Austin</option>
                                    <option value="5">Chicago</option>
                                </select><br/><br/></>
                                : <><select id="city" required>
                                    <option value="" disabled defaultValue>Select</option>
                                    <option value="1">Los Angeles</option>
                                    <option value="2">New York</option>
                                    <option value="3">Nashville</option>
                                    <option value="4">Austin</option>
                                    <option value="5">Chicago</option>
                                </select><br/><br/></>
                            }
                            <span>I am a:</span><br/>
            
                            <div>
                                <input type="checkbox" id="guitar" value="guitarist" name="instrument" />
                                <label htmlFor="guitar">Guitarist</label><br/>
                                <input type="checkbox" id="bass" value="bassist" name="instrument" />
                                <label htmlFor="bass" >Bassist</label><br/>
                                <input type="checkbox" id="drums" value="drummer" name="instrument" />
                                <label htmlFor="drums">Drummer</label><br/>
                                <input type="checkbox" id="piano" value="pianist/keyboards" name="instrument" />
                                <label htmlFor="piano" >Pianist/keyboards</label><br/>
                                <input type="checkbox" id="singer" value="singer" name="instrument" />
                                <label htmlFor="singer" >Singer</label><br/>
                                <input type="checkbox" id="producer" value="producer" name="instrument" />
                                <label htmlFor="producer" >Producer</label><br/><br/>
                            </div>
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
                        {
                            (!this.props.user.username || !this.props.user.name || !this.props.user.city)
                            ? null
                            : <button className="render-delete-button" onClick={event => this.renderDelete(event)}>Delete My Account</button>
                        }
                    </div>
                    <div className="delete-container">
                        {
                            this.state.showDelete
                            ? <><h3>Are you sure?</h3>
                            <button onClick={event => this.props.handleDelete(event)}>Yes</button></>
                            : null
                        }
                    </div>
                </section>
            </main>
            <footer>
                <span>	&#169; Musiconnect 2020</span>
            </footer>
            </>
            : <h1>Page not found</h1>
            }
        </>
        )
    }
};

export default Editprofile;