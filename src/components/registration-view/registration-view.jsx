import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom"
import './registration-view.scss';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const [values, setValues] = useState({
    usernameErr: '',
    passwordErr: '',
    birthdayErr: '',
    emailErr: '',
  });

  //Validation
  const validate = () => {
    let isReq = true;
    setValues((prev) => {
      return {
        usernameErr: '',
        passwordErr: '',
        birthdayErr: '',
        emailErr: '',
      };
    });

    //username
    if (!username) {
      setValues((prevValues) => {
        return { ...prevValues, usernameErr: 'Username is required.' };
      });
      isReq = false;
    } else if (username.length < 6) {
      setValues((prevValues) => {
        return {
          ...prevValues,
          usernameErr: 'Username must be at least 6 characters long!',
        };
      });
    }

    //password
    if (!password) {
      setValues((prevValues) => {
        return { ...prevValues, passwordErr: 'Password is required.' };
      });
      isReq = false;
    } else if (password.length < 6) {
      setValues((prevValues) => {
        return {
          ...prevValues,
          passwordErr: 'Password must be at least 6 characters long!',
        };
      });
      isReq = false;
    }

    //email
    if (!email) {
      setValues({
        prevValues,
        emailErr: 'Email is required.',
      });
      isReq = false;
    } else if (email.indexOf('@') === -1) {
      setValues((prevValues) => {
        return { ...prevValues, emailErr: 'Enter a valid email address.' };
      });
      isReg = false;
    }

    //birthday
    if (!birthday) {
      setValues((prevValues) => {
        return { ...prevValues, birthdayErr: 'Enter a valid date.' };
      });
      isReq = false;
    }
    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      axios
        .post("https://mymoviedb-44.herokuapp.com/users", {
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthday,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          alert('Registration successful, please login!')
          window.open("/", "_self"); // the second argument '_self' is necessary so that the page will open in the current tab
        })
        .catch(response => {
          console.error("response");
          alert('unable to register');
        });
    }
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
                  className="mb-4 text-black"
                >
                  Please Register
                </Card.Title>
                <Form>
                  <h3>Sign Up</h3>
                  <p></p>
                  <Form.Group
                    controlId="formUsername"
                    className="mb-3"
                  >
                    <Form.Label
                      className="text-left"
                    >
                      Username:
                    </Form.Label>
                    <Form.Control
                      className="bg-dark text-white"
                      type="text"
                      value={username}
                      onChange={e =>
                        setUsername(e.target.value)}
                      placeholder="Enter your Username"

                    />
                    {values.usernameErr &&
                      <p>{values.usernameErr}</p>
                    }
                  </Form.Group>

                  <Form.Group
                    controlId="formPassword"
                    className="mb-3">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      className="bg-dark text-white"
                      type="password"
                      value={password}
                      onChange={e =>
                        setPassword(e.target.value)}
                      placeholder="Enter your Password"
                    />
                    {values.passwordErr && (
                      <p>{values.passwordErr}</p>
                    )}

                  </Form.Group>

                  <Form.Group
                    controlId="formEmail"
                    className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      className="bg-dark text-white"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Enter a valid email"
                    />
                    {values.emailErr && (
                      <p>{values.emailErr}</p>
                    )}
                  </Form.Group>

                  <Form.Group
                    className="mb-1"
                    controlId="formBirthday">
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control
                      className="bg-dark text-white"
                      type="date"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      placeholder="MM/DD/YYYY"
                    ></Form.Control>
                  </Form.Group>

                  <br></br>

                  <Button
                    className="mb-5"
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}>
                    Register
                  </Button>
                  <p></p>
                  <p>Already registered <Link to={'/'}>Sign in</Link> here</p>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container >
  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string.isRequired,
  }),
};

