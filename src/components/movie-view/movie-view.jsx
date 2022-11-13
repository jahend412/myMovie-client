import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

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
        <div className="movie-poster">
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

        <div className="movie-genre">
          <span className="label">Genre: </span>
          <span className="value">{movie.Description}</span>
        </div>

        <button onClick={() => { onBackClick(null); }}>Back</button>

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