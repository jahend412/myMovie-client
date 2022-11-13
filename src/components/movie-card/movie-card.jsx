import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< Updated upstream
=======
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
>>>>>>> Stashed changes

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
<<<<<<< Updated upstream
      <div onClick={() => onMovieClick(movie)} className="movie-card">{movie.Title}</div>
=======
      <Card>
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title> {movie.Title}</Card.Title>
          <Card.Text> {movie.Description}</Card.Text>
          <Link to={'/movies/${movie.id}'}>
            <Button variant="link">Open</Button>
          </Link>
        </Card.Body>
      </Card>
>>>>>>> Stashed changes
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func,
};