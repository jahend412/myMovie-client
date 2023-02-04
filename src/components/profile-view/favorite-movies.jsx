import React, { Fragment } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import { Button, Card, Col } from 'react-bootstrap';

export function FavoriteMovieView(props) {

  const { movies, currentUser, token, favoriteMovies } = props;

  const userFavorites = movies.filter((movie) => {
    return favoriteMovies.includes(movie._id);
  });


  const handleMovieDelete = (movieId) => {
    axios.delete(`https://my-movie-api.herokuapp.com/users/${currentUser}/movies/${movieId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        console.log(response.data);
        alert(`${movieId} has been removed from your favorites!`);
        window.open(`/users/${currentUser}`, '_self');
      }).
      catch(error => console.error(error))
  }


  return (
    <Fragment>
      {favoriteMovies.length === 0 ? (
        <p>Add your Favorite movies to your list!</p>
      ) : (
        userFavorites.map((movie) => {
          return (
            <Col xs={12} sm={8} md={6} lg={4} >
              <Card>
                <Link to={`/movies/${movie._id}`}>
                  <Card.Img variant="top" src={`https://my-movie-api.herokuapp.com/${movie.ImagePath}`} />
                </Link>
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>{movie.Description}</Card.Text>
                  <Button className="button ml-3" variant="outline-danger" size="sm" onClick={() => { handleMovieDelete(movie._id) }} >Remove!</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })
      )
      }
    </Fragment>
  )
} 