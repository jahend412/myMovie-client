<<<<<<< Updated upstream
=======
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';

import './registration-view.scss';
import e from 'express';

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  //Validation
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
    if (!email) {
      setEmailErr("Email Required");
      isReq = false;
    } else if (email.indexOf("@") === -1) {
      setEmailErr("Please enter correct email address");
      isReq = false;
    }
    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    props.Registration(username);
  };

  axios.post("https://mymoviedb-44.herokuapp.com/users", {
    username: username,
    password: password,
    Email: email,
    Birthday: birthday,
  })
    .then((response) => {
      const data = response.data;
      console.log(data);
      alert('Registration successful, please login!')
      window.open("/", "_self"); // the second argument '_self' is necessary so that the page will open in the current tab
    })
    .catch((e) => {
      console.log("error registering the user");
      alert('unable to register');
    });

  return (
    <Container style={{ width: 400 }}>
      <Row>
        <Col>
          <CardGroup>
            <Card
              style={{ marginTop: 50, marginBotton: 50 }}
              className="register">
              <Card.Body>
                <Card.Title>Please Register</Card.Title>
                <Form>
                  <Form.Group controlId="formUsername">
                    <Form.Label> Username:</Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      required
                      placeholder="Enter a username"
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required
                      placeholder="Your Password must have 5 or more characters"
                      minLength="5"
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email address"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBirthday">
                    <Form.Label> Birthday: </Form.Label>
                    <Form.Control
                      type="birthday"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      required
                      placeholder="DD-MM-YYYY"
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}>
                    Register
                  </Button>

                  <Button
                    type="button"
                    onClick={() => { props.onBackClick(null); }}>
                    Return to Login
                  </Button>

                </Form>
              </Card.Body>
            </Card>
          </CardGroup>

        </Col>
      </Row>
    </Container>

  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string,
  }),
};
>>>>>>> Stashed changes
