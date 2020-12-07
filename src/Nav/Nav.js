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
        // console.log(this.props.user)
        if (this.props.user.length === 1) {
            return <nav>
                        <ul>
                            <Link to='/about'><li>About</li></Link>
                            <li><button onClick={event => this.toggleMenu(event)}><img src={avatar} alt="avatar" /></button></li>
                        </ul>
                        {
                            this.state.showMenu
                            ? <div className="dropdown-container">
                                <div className="dropdown">
                                    <Link to='/profile'>Your Profile</Link><br/>
                                    <Link to='/search'>Search</Link><br/>
                                    <button onClick={event => this.props.handleLogout(event)}>Logout</button>
                                </div>    
                            </div>
                            : null
                        }

                    </nav>
        } else {
            return <nav>
                        <ul>
                            <Link to='/about'><li>About</li></Link>
                            <Link to='/login'><li>Login</li></Link>
                        </ul>
                    </nav>
        }
            

    }
}

export default Nav

/*

<nav>
                    <ul>
                        <Link to='/about'><li>About</li></Link>
                        
                        {/* <Link to='/profile'><li><img src={avatar} alt="avatar" /></li></Link>
                        <li><button onClick={event => this.toggleMenu(event)}><img src={avatar} alt="avatar" /></button></li>
                    </ul>
                    {
                        this.state.showMenu
                        ? <div className="dropdown-container">
                            <div className="dropdown">
                                <Link to='/profile'>Your Profile</Link><br/>
                                <Link to='/search'>Search</Link>
                            </div>    
                        </div>
                        : null
                    }
        
                </nav>

*/