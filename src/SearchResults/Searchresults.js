import React from 'react'
import { Link } from 'react-router-dom'
import './Searchresults.css'
import avatar from '../Images/icon-user-default.png' 
import Nav from '../Nav/Nav'

class Searchresults extends React.Component {
    render() {
        console.log(this.props.searchResults)
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
                        <div className="search-results-container">
                                {
                                    
                                    
                                    this.props.searchResults.length
                                    ? this.props.searchResults.map((result, id) => {
                                        return <div className="result" key={id}>
                                            <img src={avatar} alt="user" />
                                            <Link to={`/user/${result.id}`}><h2>{result.username}</h2></Link>
                                            <p>{result.name}</p>
                                            <p>{result.instrument}</p>
                                        </div>    
                                    })
                                    : <div>
                                        <p>Oops! your search yielded no results.</p>
                                    </div>
                                } 
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


export default Searchresults
