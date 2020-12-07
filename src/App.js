import React from 'react';
import './App.css';
import { Route, withRouter, Link } from 'react-router-dom'
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
import Nav from './Nav/Nav'

class App extends React.Component {
  constructor() {
    super()
    this.state={
      user: [],
      users: Users, 
      searchResults: []
    }
  }

  handleLogin = (event) => {
    event.preventDefault(); 
    const username = String(event.target.username.value);
    const password = String(event.target.password.value);
    // console.log(username, password) 
    if (username === 'jamesclifford7' && password === 'Password1') {
      this.setState({
        user: [...this.state.user, {
        id: 1,
        email: 'jamesclifforddev@gmail.com',
        name: 'James Clifford',
        username: 'jamesclifford7', 
        password: 'Password1', 
        instrument: 1, 
        city: 1, 
        instagram: '@Jamesclifford', 
        facebook: '', 
        twitter: '', 
        soundcloud: 'www.soundcloud.com', 
        bandcamp: '', 
        spotify: '', 
        bio: 'multi-instrumentalist looking to connect with others!'
        }]
      })
      this.props.history.push('/search')
    } else {
      alert('Oops! username or password do not exist')
    }
  }

  handleSearch = (event) => {
    event.preventDefault();
    const inst = parseInt(event.target.instrument.value);
    const city = parseInt(event.target.city.value);
    const results = this.state.users.filter(user => {
      if (user.instrument === inst && user.city === city) {
        return user
      } /* else {
        this.props.history.push('/noresults')
      } */
    })
    // this.state.searchResults = [];
    this.setState({
      searchResults: results
    })
    // this.props.history.push('/results')
  }

  backButton = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  }

  handleUpdateProfile = (event) => {
    event.preventDefault();
    /* username, password, name, city, instrument, instagram, facebook, twitter, soundcloud
    bandcamp, spotify, bio  */
    const newUsername = event.target.username.value; 
    const newPassword = event.target.password.value; 
    const newName = event.target.name.value; 
    const newCity = parseInt(event.target.city.value); 
    const newInstrument = parseInt(event.target.instrument.value); 
    const newInstagram = event.target.instagram.value; 
    const newFacebook = event.target.facebook.value; 
    const newTwitter = event.target.twitter.value; 
    const newSoundcloud = event.target.soundcloud.value; 
    const newBandcamp = event.target.bandcamp.value; 
    const newSpotify = event.target.spotify.value; 
    const newBio = event.target.bio.value;
    console.log(newInstrument)
    // this.state.user.splice(0, 1)
    
    const updatedUser = {
        // id: 1,
        email: 'jamesclifforddev@gmail.com',
        name: newName,
        username: newUsername, 
        password: newPassword, 
        instrument: newInstrument, 
        city: newCity, 
        instagram: newInstagram, 
        facebook: newFacebook, 
        twitter: newTwitter, 
        soundcloud: newSoundcloud, 
        bandcamp: newBandcamp, 
        spotify: newSpotify, 
        bio: newBio
    }
    this.setState({
      user: [...updatedUser]
    })
    this.props.history.push('/profile') 
  }

  handleAddUser = (event) => {
    event.preventDefault();
    const email = event.target.email.value; 
    const password = event.target.password.value; 
    // return console.log(email, password)
    const newUser = {
      id: '',
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
    }
    this.setState({
      user: newUser
    })
    this.props.history.push('/editprofile')
  }

  handleLogout = (event) => {
    event.preventDefault();
    console.log('handleLogout clicked!');
    this.setState({
      user: []
    })
    this.props.history.push('/')
  }

  render() {

    console.log(this.state.user) 

    const searchResults = this.state.searchResults;
    const users = this.state.users;
    const user = this.state.user;
    return (
      <div className="app">
        {/*
        <Route
        exact path='/'
        render={(props) => <Landing {...props}/>}
        /> */}
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
          handleUpdateProfile={this.handleUpdateProfile}/>
        )}
        />
        <Route 
        path='/search'
        render={(props) => (
          <Search {...props} 
          handleSearch={this.handleSearch}
          searchResults={searchResults}
          handleLogout={this.handleLogout} 
          user={user}/>
        )}
        />
        <Route 
        path='/results'
        render={(props) => {
          <Searchresults {...props} handleSearch={this.handleSearch} />
        }}
        />
        <Route
        path='/user/:id'
        render={(props) => (
          <User {...props} users={users} backButton={this.backButton} user={user} />
        )}
        />
        <Route 
        path='/profile'
        render={(props) => (
          <Profile {...props} user={user} />
        )}
        />
        <Route 
        path='/about'
        render={(props) => (
          <About {...props} user={user} />
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


