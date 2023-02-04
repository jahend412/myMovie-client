import React, { useState } from 'react';
import axios from 'axios';

import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export function UpdateView(props) {
  const { user } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [values, setValues] = useState({
    usernameErr: '',
    passwordErr: '',
    emailErr: '',
  });

  //  This will validate user input
  const validate = () => {
    let isReq = true;
    if (!username) {
      setValues({ ...values, usernameErr: 'Username required' });
      isReq = false;
    } else if (username.length < 2) {
      setValues({ ...values, usernameErr: 'Username must be at least 2 characters long' });
      isReq = false;
    }
    if (!password) {
      setValues({ ...values, passwordErr: 'Password required' });
      isReq = false;
    } else if (password.length < 6) {
      setValues({ ...values, passwordErr: 'Password must be at least 6 characters long' });
      isReq = false;
    }
    if (!email) {
      setValues({ ...values, emailErr: 'Email required' });
      isReq = false;
    } else if (email.indexOf('@') === -1) {
      setValues({ ...values, emailErr: 'Enter valid email' });
      isReq = false;
    }
    return isReq;
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      const token = localStorage.getItem('token');
      axios.put(`https://my-movie-api.herokuapp.com/users/${user.Username}`, {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
      },
        {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
          console.log(response.data);
          alert('Profile was successfully updated.');
          window.open(`/users/${user.Username}`, '_self');
        })
        .catch(error => {
          console.error(error);
          alert('Unable to update profile.');
        });
    }
  };


  return (
    <>
      <h2>Want to change some info?</h2>
      <Form>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            name="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>New Password:</Form.Label>
          <Form.Control
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="5"
            placeholder="Your password must have 5 or more characters"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email address"
          />
        </Form.Group>

        <Form.Group controlId="formBirthday">
          <Form.Label>Birthday:</Form.Label>
          <Form.Control
            type="date"
            value={birthday}
            onChange={e => setBirthday(e.target.value)}
            placeholder="DD-MM-YYYY"
          />
        </Form.Group>

        <Button
          className="mt-2"
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit({
              username,
              password,
              email,
              birthday,
            });
          }}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default UpdateView;