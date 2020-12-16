import React from 'react'
import { Link } from 'react-router-dom'
import './Searchresults.css'
import avatar from '../Images/icon-user-default.png' 
import Nav from '../Nav/Nav'

class Searchresults extends React.Component {
    render() {
        console.log(this.props.searchValues)
        return (
            <>
                <header>
                    <button onClick={event => this.props.handleClearSearch(event)}><h2>Musiconnect</h2></button>
                    <Nav user={this.props.user} handleLogout={this.props.handleLogout} handleClearSearch={this.props.handleClearSearch} />
                </header>
                <main>
                    <div className="container">
                        <div className="search-container-results">
                            <h1>Search</h1>
                            <form onSubmit={event => this.props.handleSearch(event)}>
                                <label htmlFor="instrument">I am seeking a:</label>
                                    <select id="instrument" defaultValue={this.props.searchValues.length ? this.props.searchValues[0] : null} >
                                        <option value="guitarist">Guitarist</option>
                                        <option value="bassist">Bassist</option>
                                        <option value="drummer">Drummer</option>
                                        <option value="pianist/keyboards">Pianist/keyboards</option>
                                        <option value="singer">Singer</option>
                                        <option value="producer">Producer</option>
                                    </select><br/>
                                    
                                <label htmlFor="city">in:</label>
                                    <select id="city" defaultValue={this.props.searchValues.length ? this.props.searchValues[1] : null}>
                                        <option value="Los Angeles">Los Angeles</option>
                                        <option value="New York">New York</option>
                                        <option value="Nashville">Nashville</option>
                                        <option value="Austin">Austin</option>
                                        <option value="Chicago">Chicago</option>
                                    </select><br/><br/>
                                <button type="submit">Search</button>
                            </form>
                        </div>
                        <div className="search-results-container">
                                {
                                    this.props.searchResults.length
                                    ? this.props.searchResults.map((result, id) => {
                                        return <div className="result" key={id}>
                                            <img src={result.img ? result.img : avatar} alt="user" />
                                            <Link to={`/user/${result.id}`}><h2>{result.username}</h2></Link>
                                            <p>{result.name}</p>
                                            <p>{result.instrument.join(', ')}</p>
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
