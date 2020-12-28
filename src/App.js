import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom'; 
import Landing from './LandingPage/Landing'; 
import Signup from './Signup/Signup'; 
import Editprofile from './EditProfile/Editprofile'; 
import Createprofile from './CreateProfile/Createprofile'; 
import Search from './Search/Search'; 
import Searchresults from './SearchResults/Searchresults'; 
import User from './User/User'; 
import Profile from './Profile/Profile'; 
import About from './About/About'; 
import Login from './Login/Login'; 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      searchResults: [], 
      searchValues: [], 
      signupMessage: ''
    };
  };

  // Login handler

  handleLogin = (event) => {
    event.preventDefault(); 
    const username = String(event.target.username.value);
    const password = String(event.target.password.value);
      fetch('https://intense-thicket-43454.herokuapp.com/api/login', {
      method: "GET", 
      headers: {
        'content-type': 'application/json', 
        'username': `${username}`, 
        'password': `${password}`
      }
    })
    .then(res => {
      if(!res.ok) {
        throw new Error()
      }
      return res.json()
    })
    .then(resJson => {
      this.setState({
        user: resJson
      })
    })
    .then(() => {
      if (this.state.user.username && this.state.user.name && this.state.user.city && this.state.user.instrument.length) {
        this.props.history.push('/search')
      } else {
        this.props.history.push('/createprofile') 
      } 
    })
    .catch(error => this.setState({
      user: 'not found'
    }))
  };

  // Search handler

  handleSearch = (event) => {
    event.preventDefault();
    const inst = event.target.instrument.value;
    const city = event.target.city.value;
      fetch('https://intense-thicket-43454.herokuapp.com/api/search', {
      method: "GET", 
      headers: {
        'content-type': 'application/json', 
        'instrument': `${inst}`, 
        'city': `${city}`
      }
    })
    .then(res => {
      if (res.ok === false) {
        throw new Error()
      }
      return res.json()
    })
    .then(resJson => {
      const userIndex = resJson.findIndex(user => user.id === this.state.user.id)
      if (userIndex === -1) {
        return resJson
      } else if (userIndex !== -1) {
        resJson.splice(userIndex, 1); 
        return resJson
      }
    }) 
    .then(resJson => {
      this.setState({
        searchResults: resJson, 
        searchValues: [inst, city]
      })
    })
    .then(() => {
      this.props.history.push('/results')
    })
    .catch(error => this.setState({
      searchResults: [], 
      searchValues: [inst, city]
    }))
    .then(() => {
      this.props.history.push('/results')
    })
  };

  backButton = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  };

  // create profile handler

  handleCreateProfile = (event) => {
    event.preventDefault();
    const id = this.state.user.id;
    const newUsername = event.target.username.value; 
    const newName = event.target.name.value; 
    const newCity = parseInt(event.target.city.value); 
    const newInstagram = event.target.instagram.value; 
    const newFacebook = event.target.facebook.value; 
    const newTwitter = event.target.twitter.value; 
    const newSoundcloud = event.target.soundcloud.value; 
    const newBandcamp = event.target.bandcamp.value; 
    const newSpotify = event.target.spotify.value; 
    const newBio = event.target.bio.value;

    let newInstrument = [];
    
    // changed instrument values to string due to postgres issue
    const guitar = event.target.guitar.checked ? event.target.guitar.value : null; 
    const bass = event.target.bass.checked ? event.target.bass.value : null;
    const drums = event.target.drums.checked ? event.target.drums.value : null;
    const piano = event.target.piano.checked ? event.target.piano.value : null;
    const singer = event.target.singer.checked ? event.target.singer.value : null;
    const producer = event.target.producer.checked ? event.target.producer.value : null;
    
    
    if (guitar) {
      newInstrument.push(guitar)
    }; 

    if (bass) {
      newInstrument.push(bass)
    }; 

    if (drums) {
      newInstrument.push(drums)
    };

    if (piano) {
      newInstrument.push(piano)
    };

    if (singer) {
      newInstrument.push(singer)
    };

    if (producer) {
      newInstrument.push(producer)
    };

    if (!guitar && !bass && !drums && !piano && !singer && !producer) {
      alert('instrument is required')
    };

    const updatedUser = {
      id: this.state.user.id, 
      email: this.state.user.email, 
      instrument: newInstrument
    };

    if (!newUsername) {
      updatedUser.username = this.state.user.username
    } else {
      updatedUser.username = newUsername
    }; 

    if (!newName) {
      updatedUser.name = this.state.user.name
    } else {
      updatedUser.name = newName
    }; 

    if (!newCity) {
      updatedUser.city = this.state.user.city
    } else {
      updatedUser.city = newCity
    }; 

    
    if (!newInstrument) {
      updatedUser.instrument = this.state.user.instrument
    } else {
      updatedUser.instrument = newInstrument
    };  

    if (!newInstagram) {
      updatedUser.instagram = this.state.user.instagram
    } else {
      updatedUser.instagram = newInstagram
    }; 

    if (!newFacebook) {
      updatedUser.facebook = this.state.user.facebook
    } else {
      updatedUser.facebook = newFacebook
    }; 

    if (!newTwitter) {
      updatedUser.twitter = this.state.user.twitter
    } else {
      updatedUser.twitter = newTwitter
    };

    if (!newSoundcloud) {
      updatedUser.soundcloud = this.state.user.soundcloud
    } else {
      updatedUser.soundcloud = newSoundcloud
    };

    if (!newBandcamp) {
      updatedUser.bandcamp = this.state.user.bandcamp
    } else {
      updatedUser.bandcamp = newBandcamp
    };

    if (!newSpotify) {
      updatedUser.spotify = this.state.user.spotify
    } else {
      updatedUser.spotify = newSpotify
    };

    if (!newBio) {
      updatedUser.bio = this.state.user.bio
    } else {
      updatedUser.bio = newBio
    };

    fetch(`https://intense-thicket-43454.herokuapp.com/api/users/${id}`, {
      method: "PATCH", 
      body: JSON.stringify(updatedUser), 
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      console.log(res)
      if(!res.ok) {
        throw new Error('patch error')
      }
      return res.json()
    })
    .then(resJson => {
      console.log(resJson)
      this.setState({
        user: resJson
      }); 
      this.props.history.push('/search')
    })
    .catch(error => console.log(error))
  };

  // update profile handler

  handleUpdateProfile = (event) => {
    event.preventDefault();
    const id = this.state.user.id;
    const newPassword = event.target.password.value;
    const newName = event.target.name.value; 
    const newCity = parseInt(event.target.city.value); 
    const newInstagram = event.target.instagram.value; 
    const newFacebook = event.target.facebook.value; 
    const newTwitter = event.target.twitter.value; 
    const newSoundcloud = event.target.soundcloud.value; 
    const newBandcamp = event.target.bandcamp.value; 
    const newSpotify = event.target.spotify.value; 
    const newBio = event.target.bio.value;

    let newInstrument = [];
    
    // changed instrument values to string due to postgres issue
    const guitar = event.target.guitar.checked ? event.target.guitar.value : null;
    const bass = event.target.bass.checked ? event.target.bass.value : null;
    const drums = event.target.drums.checked ? event.target.drums.value : null;
    const piano = event.target.piano.checked ? event.target.piano.value : null;
    const singer = event.target.singer.checked ? event.target.singer.value : null;
    const producer = event.target.producer.checked ? event.target.producer.value : null;
    
    
    if (guitar) {
      newInstrument.push(guitar)
    }; 

    if (bass) {
      newInstrument.push(bass)
    }; 

    if (drums) {
      newInstrument.push(drums)
    };

    if (piano) {
      newInstrument.push(piano)
    };

    if (singer) {
      newInstrument.push(singer)
    };

    if (producer) {
      newInstrument.push(producer)
    };

    if (!guitar && !bass && !drums && !piano && !singer && !producer) {
      newInstrument = [...this.state.user.instrument]
    };

    const updatedUser = {
      id: this.state.user.id, 
      email: this.state.user.email, 
      username: this.state.username,
      instrument: newInstrument
    };

    if (!newPassword) {
      updatedUser.password = this.state.user.password
    } else if (newPassword.length > 6 && newPassword.match(/[A-Z]/) && newPassword.match(/\d+/g)) {
      updatedUser.password = newPassword
    } else {
      alert('password must be six characters long, include one uppercase letter, and one number')
    }; 

    if (!newName) {
      updatedUser.name = this.state.user.name
    } else {
      updatedUser.name = newName
    }; 

    if (!newCity) {
      updatedUser.city = this.state.user.city
    } else {
      updatedUser.city = newCity
    }; 

    
    if (!newInstrument) {
      updatedUser.instrument = this.state.user.instrument
    } else {
      updatedUser.instrument = newInstrument
    };  

    if (!newInstagram) {
      updatedUser.instagram = this.state.user.instagram
    } else {
      updatedUser.instagram = newInstagram
    }; 

    if (!newFacebook) {
      updatedUser.facebook = this.state.user.facebook
    } else {
      updatedUser.facebook = newFacebook
    }; 

    if (!newTwitter) {
      updatedUser.twitter = this.state.user.twitter
    } else {
      updatedUser.twitter = newTwitter
    };

    if (!newSoundcloud) {
      updatedUser.soundcloud = this.state.user.soundcloud
    } else {
      updatedUser.soundcloud = newSoundcloud
    };

    if (!newBandcamp) {
      updatedUser.bandcamp = this.state.user.bandcamp
    } else {
      updatedUser.bandcamp = newBandcamp
    };

    if (!newSpotify) {
      updatedUser.spotify = this.state.user.spotify
    } else {
      updatedUser.spotify = newSpotify
    };

    if (!newBio) {
      updatedUser.bio = this.state.user.bio
    } else {
      updatedUser.bio = newBio
    };

    fetch(`https://intense-thicket-43454.herokuapp.com/api/users/${id}`, {
      method: "PATCH", 
      body: JSON.stringify(updatedUser), 
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      console.log(res)
      if(!res.ok) {
        throw new Error('patch error')
      }
      return res.json()
    })
    .then(resJson => {
      console.log(resJson)
      this.setState({
        user: resJson
      }); 
      this.props.history.push('/search');
    })
    .catch(error => console.log(error))
  };

  // signup handler
 
  handleAddUser = (event) => {
    event.preventDefault();
    const email = String(event.target.email.value); 
    const password = String(event.target.password.value); 

    const newUser = {
      email: email,
      name: '',
      username: '', 
      password: password, 
      instrument: [], 
      city: 1, 
      instagram: '', 
      facebook: '', 
      twitter: '', 
      soundcloud: '', 
      bandcamp: '', 
      spotify: '', 
      bio: '', 
      img: ''
    };


    let hasError = false;
    fetch('https://intense-thicket-43454.herokuapp.com/api/users/', {
        method: "POST", 
        body: JSON.stringify(newUser), 
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
        console.log(res.body)
        if (!res.ok) {
          hasError = true; 
          return res.text()
        }
        return res.json()
      })
      .then(data => {
        if (hasError) {
          throw new Error(data)
        }
        this.setState({
          user: data
        }); 
        this.props.history.push('/createprofile'); 
      })
      .catch(error => {
        error = `${error}`.split(" ").splice(1, 7).join(" ");
        this.setState({
          signupMessage: `Oops! ${error}`
        }) 
      })
  };

  handleClearSearch = (event) => {
    event.preventDefault();
    this.setState({
      searchResults: [], 
      searchValues: []
    });
    this.props.history.push('/search');
  };

  handleLogout = (event) => {
    event.preventDefault();
    this.setState({
      user: {}, 
      searchResults: [], 
      searchValues: [], 
      signupMessage: ''
    });
    this.props.history.push('/');
  };

  // Delete account handler

  handleDelete = (event) => {
    event.preventDefault(); 
    const id = this.state.user.id; 

    fetch(`https://intense-thicket-43454.herokuapp.com/api/users/${id}`, {
      method: "DELETE", 
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('delete error')
      }
    })
    .then(() => {
      this.setState({
        user: []
      })
      this.props.history.push('/')
    })
    .catch(error => console.log(error))
  };

  render() {
    const searchResults = this.state.searchResults;
    const user = this.state.user;
    
    return (
      <div className="app">
        <Route
        exact path='/'
        render={(props) => (
          <Landing {...props} user={user} />
        )}
        />
        <Route
        path='/signup'
        render={(props) => (
          <Signup user={user} {...props} 
          handleAddUser={this.handleAddUser}
          signupMessage={this.state.signupMessage} />
        )}
        />
        <Route 
        path='/createprofile'
        render={(props) => (
          <Createprofile {...props}
          user={user} 
          handleCreateProfile={this.handleCreateProfile} />
        )} />
        <Route
        path='/editprofile'
        render={(props) => (
          <Editprofile {...props} 
          backButton={this.backButton} 
          user={user}
          handleUpdateProfile={this.handleUpdateProfile}
          handleLogout={this.handleLogout} 
          handleClearSearch={this.handleClearSearch} 
          handleDelete={this.handleDelete} />
        )}
        />
        <Route 
        path='/search'
        render={(props) => (
          <Search {...props} 
          handleSearch={this.handleSearch}
          searchResults={searchResults}
          handleLogout={this.handleLogout} 
          handleClearSearch={this.handleClearSearch}
          user={user}
          searchValues={this.state.searchValues}/>
        )}
        />
        <Route 
        path='/results'
        render={(props) => (
          <Searchresults {...props} 
          handleSearch={this.handleSearch} 
          handleClearSearch={this.handleClearSearch}
          handleLogout={this.handleLogout}
          searchResults={searchResults}
          user={user}
          searchValues={this.state.searchValues}/>
        )}
        />
        <Route
        path='/user/:id'
        render={(props) => (
          <User {...props}  
          backButton={this.backButton} 
          user={user} 
          handleLogout={this.handleLogout} 
          handleClearSearch={this.handleClearSearch}
          searchResults={this.state.searchResults} />
        )}
        />
        <Route 
        path='/profile'
        render={(props) => (
          <Profile {...props} user={user} 
          handleClearSearch={this.handleClearSearch} 
          handleLogout={this.handleLogout} />
        )}
        />
        <Route 
        path='/about'
        render={(props) => (
          <About {...props} user={user}
          handleLogout={this.handleLogout} 
          handleClearSearch={this.handleClearSearch} />
        )}
        />
        <Route 
        path='/login'
        render={(props) => (
          <Login {...props} user={user} handleLogin={this.handleLogin} />
        )}
        />
      </div>
    )
  }
}; 

export default withRouter(App);


