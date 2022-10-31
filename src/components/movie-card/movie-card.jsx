import React from 'react';

import { MovieCard } from '../movie-card/movie-card';

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return <div className="movie-card">{movie.Title}</div>;
  }
}

