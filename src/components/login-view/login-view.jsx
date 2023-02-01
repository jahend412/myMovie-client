import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

import axios from "axios";

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
    const isReq = validate();
    if (isReq) {
      e.preventDefault();
      axios.post('https://my-movie-api.herokuapp.com/login', {
        Username: username,
        Password: password
      })
        .then(response => {
          const data = response.data;
          props.onLoggedIn(data);
        })
        .catch(e => {
          console.log('no such user')
        });
    }
    console.log(username, password);
  };

  return (
    <Container
      className="py-5 h-100"
    >
      <Row
        className="d-flex justify-content-center align-items-center h-100"
      >
        <Col
          className="justify-content-center m-2"
        >
          <CardGroup>
            <Card
              className="bg-dark text-white"
              style={{ borderRadius: '20px' }}
            >
              <Card.Body
                className="p-5 text-center"
              >
                <Card.Title
                  className='mb-4'
                >
                  Login
                </Card.Title>
                <Form>
                  <h3>Sign In</h3>
                  <p></p>
                  <Form.Group
                    controlId='formUsername'
                    className='mb-3'>
                    <Form.Label
                      className="text-left"
                    >Username:</Form.Label>

                    <Form.Control
                      className="bg dark text-white"
                      type="text"
                      value={username}
                      onChange={(e) =>
                        setUsername(e.target.value)}
                      placeholder="Enter your Username"
                    />
                    {usernameErr &&
                      <p>{values.usernameErr}</p>
                    }
                  </Form.Group>

                  <Form.Group
                    controlId="formPassword"
                    className='mb-3'
                  >
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      className="bg-dark text-white"
                      type="password"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)}
                      placeholder="Enter your Password"
                    />
                    {passwordErr && <p>{passwordErr}</p>}
                  </Form.Group>

                  <br></br>

                  <Button
                    className="mb-5"
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}>
                    Log in
                  </Button>
                  <p></p>
                  <p>Need to Register <Link to={'/register'}>Sign up </Link> here</p>

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