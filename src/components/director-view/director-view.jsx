import React from "react";
import { Form, Button, Card, CardGroup, Container, Col, Row, } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import { connect } from 'react-redux';

export class DirectorView extends React.Component {
  render() {
    const { director, onBackClick, directorMovies } = this.props;

    return (
      <div>
        <Container className='director-view'>
          <Row>
            <Col className='label'>Director: </Col>
            <Col className='value'>{director.Director.Name}</Col>
          </Row>
          <Row>
            <Col className='label'>Bio: </Col>
            <Col className='value'>{director.Director.Bio}</Col>
          </Row>
          <Row>
            <Col className='label'>Birth: </Col>
            <Col className='value'>{director.Director.Birth}</Col>
          </Row>
          {/* If statement - if death is  0 dont show else show */}
          {director.Director.Death > 0 && (
            <Row>
              <Col className='label'>Death: </Col>
              <Col className='value'>{director.Director.Death}</Col>
            </Row>
          )}
          <Row>
            <Col className='label'>Other {director.Director.Name} films: </Col>
            <Col className='value'>
              {directorMovies.map((movie) => (
                <MovieCard key={movie._id} movie={movie}>
                  {movie.Title}
                </MovieCard>
              ))}
            </Col>
          </Row>
          <Button
            className='mt-4'
            onClick={() => {
              onBackClick();
            }}>
            Back
          </Button>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    user: state.user
  };
};

export default connect(mapStateToProps)(DirectorView);