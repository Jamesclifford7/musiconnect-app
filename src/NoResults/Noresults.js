import React from 'react'
import './Noresults.css'
import avatar from '../Images/icon-user-default.png' 

function Noresults() {
    return (
        <>
            <header>
                <h2>Musiconnect</h2>
                <nav>
                    <ul>
                        <li>About</li>
                        {/* <!-- <li>Login</li> --> */}
                        <li><img src={avatar} alt="avatar" /></li> 
                    </ul>
                </nav>
            </header>
            <main>
                <div className="search-container">
                    <h1>Search</h1>
                    <form>
                        <label htmlFor="instrument">I am seeking a:</label>
                            <select id="instrument">
                                <option value="guitarist">Guitarist</option>
                                <option value="bassist">Bassist</option>
                                <option value="drummer">Drummer</option>
                                <option value="pianist/keyboards">Pianist/keyboards</option>
                                <option value="singer">Singer</option>
                                <option value="producer">Producer</option>
                            </select><br/>

                        <label htmlFor="city">in:</label>
                            <select id="city">
                                <option value="losangeles">Los Angeles</option>
                                <option value="newyork">New York</option>
                                <option value="nashville">Nashville</option>
                                <option value="austin">Austin</option>
                                <option value="chicago">Chicago</option>
                            </select><br/><br/>
                            <button type="submit">Search</button>
                    </form>
                </div>
                <div className="no-results-container">
                    <h4>Oops! Your search yielded no results</h4>
                </div>
            </main>
            <footer>
                <span>	&#169; Musiconnect 2020</span>
            </footer>
        </>
    )
}

export default Noresults