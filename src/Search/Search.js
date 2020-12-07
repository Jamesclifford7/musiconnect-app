import React from 'react'
import './Search.css'
import avatar from '../Images/icon-user-default.png' 
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'

class Search extends React.Component {
    render() {

        return (
            <>
            <header>
                <Link to='/search'><h2>Musiconnect</h2></Link>
                <Nav user={this.props.user} handleLogout={this.props.handleLogout} />
            </header>
            <main>
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
                <div className="search-results-container">
                        {
                            this.props.searchResults.map((result, id) => {
                                if(!result) {
                                    alert('no results for this search') 
                                } else {
                                    return <div className="result" key={id}>
                                                <img src={avatar} alt="user" />
                                                <Link to={`/user/${result.id}`}><h2>{result.username}</h2></Link>
                                                <p>{result.name}</p>
                                                <p>{result.instrument}</p>
                                            </div>
                                }
                            })
                            } 
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

