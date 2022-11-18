import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom"
import './registration-view.scss';

export function RegistrationView(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const [values, setValues] = useState({
    usernameErr: '',
    passwordErr: '',
    emailErr: '',
  });

  //Validation
  const validate = () => {
    let isReq = true;
    if (!username) {
      setValues({ ...values, usernameErr: "Username Required" });
      isReq = false;
    } else if (username.length < 5) {
      setValues({
        ...values, usernameErr: "Username must be 5 characters long",
      });
      isReq = false;
    }
    if (!password) {
      setValues({ ...values, passwordErr: "Password Required" });
      isReq = false;
    } else if (password.length < 6) {
      setValues({
        ...values, passwordErr: "Password must be 6 characters long",
      });
      isReq = false;
    }
    if (!email) {
      setValues({ ...values, emailErr: "Email Required" });
      isReq = false;
    } else if (email.indexOf("@") === -1) {
      setValues({ ...values, emailErr: "Email is invalid" });
      isReq = false;
    }
    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
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
        .catch(response => {
          console.error("response");
          alert('unable to register');
        });
    }
  };



  return (
    <Container style={{ width: 400 }}>
      <Row className="mt-5">
        <Col md={12}>
          <CardGroup>
            <Card
              style={{ marginTop: 50, marginBotton: 50 }}
              className="register">
              <Card.Body>
                <Card.Title>Please Register</Card.Title>
                <Form>
                  <h3>Sign Up</h3>
                  <p></p>
                  <Form.Group
                    controlId="formUsername"
                    className="reg-form-inputs">
                    <Form.Label> Username:</Form.Label>
                    <Form.Control
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
                    className="reg-form-inputs">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={e =>
                        setPassword(e.target.value)} />
                    {values.passwordErr &&
                      <p>{values.passwordErr}</p>
                    }

                  </Form.Group>

                  <Form.Group
                    controlId="formEmail"
                    className="reg-form-inputs">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)} />
                    {values.emailErr &&
                      <p>{values.emailErr}</p>
                    }
                  </Form.Group>

                  <Form.Group controlId="upodateBirthday">
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control
                      type="date"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      required
                    ></Form.Control>

                  </Form.Group>

                  <Button
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
    </Container>

  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
  }),
};

