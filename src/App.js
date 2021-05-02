import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      title: "Alicia's Portfolio",
      // Array of objects
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: "Don't stop learning",
        subTitle: "Keep making cool things",
        text: "Check out things I've made"
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Connect with me",
      },
    }
  }

  render () {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Alicia Vega</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className='ml-auto'>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/Contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>
        </Container>
      </Router>
    );
  
  }
}

export default App;
