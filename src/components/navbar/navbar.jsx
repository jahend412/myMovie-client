import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

import { setMovies, setUser } from '../../actions/actions';

//export function for use in main-view
export function Menu({ user }) {
  // signout method

  const onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  }

  // returns a token from Local storage
  const isAuth = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return false;
    }
  };

  //unordered list begins
  return (
    <Navbar
      className="main-nav"
      sticky="top"
      bg="dark"
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className="navbar-logo" href="/">
          My Movie
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {isAuth() && <Nav.Link href={`/users/${user}`}> {user} </Nav.Link>}
            {isAuth() && (
              <Button
                variant="link"
                onClick={() => {
                  { onLoggedOut }
                }}
              >
                Log Out
              </Button>
            )}
            {!isAuth() && <Nav.Link href="/">Sign-in</Nav.Link>}
            {!isAuth() && <Nav.Link href="/register">Sign-up</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}