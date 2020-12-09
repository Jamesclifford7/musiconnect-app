import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import Landing from './LandingPage/Landing'
import Signup from './Signup/Signup'
import Editprofile from './EditProfile/Editprofile'
import Search from './Search/Search'
import Searchresults from './SearchResults/Searchresults'
import User from './User/User'
import Profile from './Profile/Profile'
import About from './About/About'
import Noresults from './NoResults/Noresults'
import Login from './Login/Login'
import Users from './STORE/Users'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {},
      users: Users, 
      searchResults: []
    }
  }

  handleLogin = (event) => {
    event.preventDefault(); 
    const username = String(event.target.username.value);
    const password = String(event.target.password.value);
    this.state.users.map(user => {
      if (username === user.username && password === user.password) {
        this.setState({
          user: user
        });
        this.props.history.push('/search')
      } else {
        alert('this user does not exist')
      }
    })
  }

  handleSearch = (event) => {
    event.preventDefault();
    const inst = parseInt(event.target.instrument.value);
    const city = parseInt(event.target.city.value);
    const results = this.state.users.filter(user => {
      for (let i = 0; i < user.instrument.length; i++) {
        if (user.instrument[i] === inst && user.city === city) {
          return user
        }
      }
      /*
      if (user.instrument === inst && user.city === city) {
        return user
      } */
    })
    this.setState({
      searchResults: results
    }) 
    this.props.history.push('/results')
  }

  backButton = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  }

  handleUpdateProfile = (event) => {
    event.preventDefault();
    const newUsername = event.target.username.value; 
    const newPassword = event.target.password.value; 
    const newName = event.target.name.value; 
    const newCity = parseInt(event.target.city.value); 
    // const newInstrument = parseInt(event.target.instrument.value); 
    // const newInstrument = [parseInt(event.target.guitar.value), parseInt(event.target.bass.value), parseInt(event.target.drums.value), parseInt(event.target.piano.value), parseInt(event.target.singer.value), parseInt(event.target.producer.value)]
    const newInstagram = event.target.instagram.value; 
    const newFacebook = event.target.facebook.value; 
    const newTwitter = event.target.twitter.value; 
    const newSoundcloud = event.target.soundcloud.value; 
    const newBandcamp = event.target.bandcamp.value; 
    const newSpotify = event.target.spotify.value; 
    const newBio = event.target.bio.value;

    let newInstrument = [];
    
    const guitar = event.target.guitar.checked ? parseInt(event.target.guitar.value) : null
    const bass = event.target.bass.checked ? parseInt(event.target.bass.value) : null
    const drums = event.target.drums.checked ? parseInt(event.target.drums.value) : null
    const piano = event.target.piano.checked ? parseInt(event.target.piano.value) : null
    const singer = event.target.singer.checked ? parseInt(event.target.singer.value) : null
    const producer = event.target.producer.checked ? parseInt(event.target.producer.value) : null
    
    
    if (guitar) {
      newInstrument.push(guitar)
    } 

    if (bass) {
      newInstrument.push(bass)
    } 

    if (drums) {
      newInstrument.push(drums)
    }

    if (piano) {
      newInstrument.push(piano)
    }

    if (singer) {
      newInstrument.push(singer)
    }

    if (producer) {
      newInstrument.push(producer)
    }

    if (!guitar && !bass && !drums && !piano && !singer && !producer) {
      newInstrument = [...this.state.user.instrument]
    }
    
    console.log(newInstrument);

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

    /*
    if (!newInstrument) {
      updatedUser.instrument = this.state.user.instrument
    } else {
      updatedUser.instrument = newInstrument
    };  */

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

    // console.log(updatedUser);
    
    this.setState({
      user: updatedUser
    })
    this.props.history.push('/profile') 
  }
 
  handleAddUser = (event) => {
    event.preventDefault();
    const email = event.target.email.value; 
    const password = event.target.password.value; 
    if (password.length < 6 && !password.match(/[A-Z]/) && !password.match(/\d+/g)) {
      alert('password must be at least six characters long, include one uppercase letter, and one number')
    } else {
      const newUser = {
        id: 11,
        email: email,
        name: '',
        username: '', 
        password: password, 
        instrument: '', 
        city: '', 
        instagram: '', 
        facebook: '', 
        twitter: '', 
        soundcloud: '', 
        bandcamp: '', 
        spotify: '', 
        bio: ''
      };
      this.setState({
        user: newUser
      });
      this.props.history.push('/editprofile')
    }
  }

  handleClearSearch = (event) => {
    event.preventDefault();
    this.setState({
      searchResults: []
    });
    this.props.history.push('/search')
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.setState({
      user: []
    })
    this.props.history.push('/')
  }

  render() {
    // console.log(this.state.user)
    const searchResults = this.state.searchResults;
    const users = this.state.users;
    const user = this.state.user;
    return (
      <div className="app">
        <Route
        exact path='/'
        component={Landing}
        />
        <Route
        path='/signup'
        render={(props) => (
          <Signup {...props} handleAddUser={this.handleAddUser} />
        )}
        />
        <Route
        path='/editprofile'
        render={(props) => (
          <Editprofile {...props} 
          backButton={this.backButton} 
          user={user}
          handleUpdateProfile={this.handleUpdateProfile}
          handleLogout={this.handleLogout} 
          handleClearSearch={this.handleClearSearch} />
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
          user={user}/>
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
          user={user}/>
        )}
        />
        <Route
        path='/user/:id'
        render={(props) => (
          <User {...props} users={users} 
          backButton={this.backButton} 
          user={user} 
          handleLogout={this.handleLogout} 
          handleClearSearch={this.handleClearSearch} />
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
        path='/noresults'
        component={Noresults}
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
}

export default withRouter(App);


