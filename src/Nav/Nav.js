import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../Images/icon-user-default.png' 

class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            showMenu: false
        }
    }

    toggleMenu = (event) => {
        event.preventDefault();
        this.setState(prevState =>({
            showMenu: !prevState.showMenu
        }))
    } 

    render() {
        if (this.props.user.email) {
            return <nav>
                        <ul>
                            <li className="about-link"><Link to='/about'>About</Link></li>
                            <li className="avatar"><button onClick={event => this.toggleMenu(event)}><img src={this.props.user.img ? this.props.user.img : avatar} alt="avatar" /></button></li>
                            {
                            this.state.showMenu
                            ? <div className="dropdown-container">
                                <div className="triangle"></div>
                                <div className="dropdown">
                                    <Link to='/profile'>Your Profile</Link><br/>
                                    <button onClick={event => this.props.handleClearSearch(event)}>Search</button><br/>
                                    <button onClick={event => this.props.handleLogout(event)}>Logout</button>
                                </div>    
                            </div>
                            : null
                        }
                        </ul>
                    </nav>
        } else {
            return <nav>
                        <ul>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/login'>Login</Link></li>  
                        </ul>
                    </nav>
        }
            

    }
}

export default Nav