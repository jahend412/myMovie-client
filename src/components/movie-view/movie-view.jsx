import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from 'react-redux';

import "./movie-view.scss";

export class MovieView extends React.Component {
  addMovieToFavorites(e) {
    const { movie } = this.props;
    const username = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    e.preventDefault();
    axios
      .post(
        `https://mymoviedb-44.herokuapp.com/users/${username}/movies/${movie._id}`,
        { username: localStorage.getItem("user") },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response);
        alert("movie added");
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster d-flex justify-content-center mb-3">
          <img src={movie.ImagePath} />
        </div>

        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>

        <div className="movie-director">
          <span className="label">Director: </span>
          <span className="value">{movie.Title}</span>
        </div>

        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>

        <Link to={`/genres/${movie.Genre.Name}`}>
          <Button variant='link'>Genre</Button>
        </Link>
        <Link to={`/directors/${movie.Director.Name}`}>
          <Button variant='link'>Director</Button>
        </Link>

        <Button variant='success' onClick={(e) => this.addMovieToFavorites(e)}>
          Add to favorites
        </Button>

        <Button onClick={() => { onBackClick(); }}>Back</Button>

      </div>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    user: state.user
  };
};

export default connect(mapStateToProps)(MovieView);