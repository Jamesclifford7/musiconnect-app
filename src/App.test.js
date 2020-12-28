import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App';
import Landing from './LandingPage/Landing'
import Search from './Search/Search'
import About from './About/About'
import Createprofile from './CreateProfile/Createprofile'
import Editprofile from './EditProfile/Editprofile'
import Login from './Login/Login'
import Nav from './Nav/Nav'
import Profile from './Profile/Profile'
import Searchresults from './SearchResults/Searchresults'
import Signup from './Signup/Signup'
import User from './User/User'

/*
test('renders learn react link', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

it('App renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
})

it('About page renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><App><About /></App></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
})

it('Create profile page renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><App><Createprofile /></App></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
})

it('Editprofile page renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><App><Editprofile /></App></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
})

it('Landing page renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><App><Landing /></App></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
})

it('Login page renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><App><Login /></App></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
})

it('Nav bar renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><App><Nav /></App></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
})

it('Profile page renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><App><Profile /></App></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
})

it('Search page renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><App><Search /></App></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
})

it('Search results page renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><App><Searchresults /></App></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
})

it('Signup renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><App><Signup /></App></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
})

it('User page renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><App><User /></App></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
})