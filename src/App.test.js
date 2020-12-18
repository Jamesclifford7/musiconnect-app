import { render, screen } from '@testing-library/react';
import App from './App';
import Landing from './LandingPage/Landing'
import Search from './Search/Search'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'

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

it('Landing page renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><App><Landing /></App></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
})

it('Search page renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<BrowserRouter><App><Search /></App></BrowserRouter>, div)

  ReactDOM.unmountComponentAtNode(div)
})