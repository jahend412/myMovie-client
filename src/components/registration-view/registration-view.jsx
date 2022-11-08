import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';

import './registration-view.scss';
import axios from 'axios';


export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    props.Registration(username);

  };

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
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
                      placeholder="Your Password must have 8 or more characters"
                      minLength="8"
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

                  <Button type="submit" onClick={handleSubmit}>Register</Button>
                  <Button type="button" onClick={() => { props.onBackClick(null); }}>Return to Login</Button>
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
  onRegistration: PropTypes.func.isRequired,
};

