import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';
import axios from "axios";
import { Link } from "react-router-dom";



export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // declare a hook for each input
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  //validate user inputs
  const validate = () => {
    let isReq = true;

    if (!username) {
      setUsernameErr("Username Required");
      isReq = false;
    } else if (username.length < 2) {
      setUsernameErr("Username must have at least 2 characters");
      isReq = false;
    }
    if (!password) {
      setPasswordErr("Password Required");
      isReq = false;
    } else if (password.length < 6) {
      setPasswordErr("Password must have at least 6 characters");
      isReq = false;
    }
    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    const isReq = validate();
    if (isReq) {
      axios.post('https://mymoviedb-44.herokuapp.com/login', {
        username: username,
        password: password,
      })
        .then((response) => {
          const data = response.data;
          props.onLoggedIn(data);
        })
        .catch((e) => {
          console.log(e, "no such user");
        });
    }
  };

  return (
    <Container
      className="login-view" lg={4}
    >
      <Row>
        <Col className="d flex justify-content-center">
          <CardGroup className='login-signup'>
            <Card>
              <Card.Body>
                <Card.Title className='text-center'>Login</Card.Title>
                <Form>
                  <Form.Group controlId='formUsername' className='mb-3'>
                    <Form.Label>Username:</Form.Label>

                    <Form.Control
                      type="text"
                      value={username}
                      onChange={(e) =>
                        setUsername(e.target.value)}
                      placeholder="Enter a username"
                      required
                    />
                    {usernameErr && <p className='alert alert-danger'>{usernameErr}</p>}
                  </Form.Group>

                  <Form.Group controlId="formPassword" className='mb-3'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter a password"
                    />
                    {passwordErr && <p>{passwordErr}</p>}
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Button variant="info" type="submit" onClick={handleSubmit}>
                      Submit
                    </Button>
                    <Link to="/register" className="ml-2 registerLink">
                      Register
                    </Link>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>

  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
};