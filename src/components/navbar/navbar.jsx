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

  const token = user.token

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
            {!!token && (
              <Link to={`/users/${user.user.Username}`}>{user.user.Username}</Link>
            )}
            {!!token && (
              <Button
                variant="link"
                onClick={() => {
                  { onLoggedOut }
                }}
              >
                Log Out
              </Button>
            )}
            {!!token && <Nav.Link href="/">Sign-in</Nav.Link>}
            {!!token && <Nav.Link href="/register">Sign-up</Nav.Link>}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}