import React, { useState } from 'react';

import axios from 'axios';

import { Button, Col, Container, Row } from 'react-bootstrap';

import { FavoriteMovieView } from './favorite-movie-view';
import { UpdateView } from './update-user';
import { UserInfo } from './user-info';

export function ProfileView(props) {
  const [user] = useState(props.user.user);
  const [movies] = useState(props.movies);
  const [favoriteMovies] = useState(props.user.user.FavoriteMovies);
  const token = props.user.token;

  const handleDelete = () => {
    axios.delete(`https://my-movie-api.herokuapp.com/users/${user.Username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        alert(`The account ${user.Username} was successfully deleted.`)
        localStorage.clear();
        window.open('/register', '_self');
      }).
      catch(error => console.error(error))
  }

  return (
    <Container>
      <Row>
        <Col>
          <UserInfo name={user.Username} password={user.Password} email={user.Email} birthday={user.Birthday} />
        </Col>
        <Col>
          <UpdateView user={user} />
        </Col>
      </Row>
      <Row className="mt-3">
        <FavoriteMovieView movies={movies} favoriteMovies={favoriteMovies} currentUser={user.Username} token={token} />
      </Row>
      <Button className="d-block mt-5" variant="danger" onClick={handleDelete}>Delete profile</Button>
    </Container>
  )
} 