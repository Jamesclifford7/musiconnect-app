import React from 'react'
import './Search.css'
import avatar from '../Images/icon-user-default.png' 
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Searchresults from '../SearchResults/Searchresults'

class Search extends React.Component {
    render() {
        console.log(this.props.user)
        return (
            <>
            <header>
                { /* <Link to='/search'><h2>Musiconnect</h2></Link> */ }
                { /* <h2><button onClick={this.props.handleClearSearch}>Musiconnect</button></h2> */}
                <button onClick={event => this.props.handleClearSearch(event)}><h2>Musiconnect</h2></button>
                <Nav user={this.props.user} handleLogout={this.props.handleLogout} handleClearSearch={this.props.handleClearSearch} />
            </header>
            <main>
                <div className="container">
                    <div className="search-container">
                        <h1>Search</h1>
                        <form onSubmit={event => this.props.handleSearch(event)}>
                            <label htmlFor="instrument">I am seeking a:</label>
                                <select id="instrument">
                                    <option value="1">Guitarist</option>
                                    <option value="2">Bassist</option>
                                    <option value="3">Drummer</option>
                                    <option value="4">Pianist/keyboards</option>
                                    <option value="5">Singer</option>
                                    <option value="6">Producer</option>
                                </select><br/>

                            <label htmlFor="city">in:</label>
                                <select id="city">
                                    <option value="1">Los Angeles</option>
                                    <option value="2">New York</option>
                                    <option value="3">Nashville</option>
                                    <option value="4">Austin</option>
                                    <option value="5">Chicago</option>
                                </select><br/><br/>
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </main>
            <footer>
                <span>	&#169; Musiconnect 2020</span>
            </footer> 
        </>
        )
    }
}

export default Search

