import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Link, Redirect } from "react-router-dom";
import { Row, Col, Container } from 'react-bootstrap';
import { Menubar } from "../navbar/navbar";
import { LoginView } from "../login-view/login-view";
import { RegistrationView } from "../registration-view/registration-view";
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { ProfileView } from "../profile-view/profile-view";
import { UserUpdate } from "../profile-view/profile-view";
import { DirectorView } from "../director-view/director-view";
import { GenreView } from "../genre-view/genre-view";
import './main-view.scss';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      user: null,
    };
  }

  componentDidMount() {

    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  //Updates the 'user' property when a user logs in
  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  getMovies(token) {
    axios
      .get("https://mymoviedb-44.herokuapp.com/movies")
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }

  onRegistration(registered) {
    this.setState({
      registered,
    });
  }

  render() {
    const { movies, user } = this.state;

    return (
      <Router>
        <Menubar user={user} />
        <Container>
          <Row className="main-view justify-content-md-center">
            <Routes exact path="/" render={() => {
              //If there is no user, the LoginView is rendered.  
              //If there is a user logged in, the user details are passed as a prop to the Loginview
              if (!user)

                return
              <Col>
                <LoginView movies={movies}
                  onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
              // Before the movies have been loaded

              if (movies.length === 0) return <div className='main-view' />;

              return movies.map(m => (
                <Col md={3} key={m._id}>
                  <MovieCard movie={m} />
                </Col>
              ))
            }} />

            <Routes
              path='/register' render={() => {
                if (user) return <Redirect to='/' />;

                return <Col lg={8} md={8}>
                  <RegistrationView />
                </Col>
              }} />

            <Routes
              exact
              path='/movies/:id'
              render={({ match, history }) => {

                return
                <Col md={8}>
                  <MovieView
                    movie={movies.find((m) => m._id === match.params.id)}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              }}
            />

            <Routes
              path='/directors/:name'
              render={({ match, history }) => {
                if (!user)
                  return (
                    <Col>
                      <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                    </Col>
                  );
                if (movies.length === 0) return <div className='main-view' />;

                return (
                  <Col md={8}>
                    <DirectorView
                      directorMovies={movies.filter(
                        (movie) => movie.Director.Name === match.params.name
                      )}
                      director={movies.find(
                        (m) => m.Director.Name === match.params.name
                      )}
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />

            <Routes
              path='/genres/:name'
              render={({ match, history }) => {
                if (!user)
                  return (
                    <Col>
                      <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                    </Col>
                  );
                if (movies.length === 0) return <div className='main-view' />;

                return (
                  <Col md={8}>
                    <GenreView
                      genreMovies={movies.filter(
                        (movie) => movie.Genre.Name === match.params.name
                      )}
                      genre={movies.find(
                        (m) => m.Genre.Name === match.params.name
                      )}
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />

            <Routes
              exact
              path={`/users/${user}`}
              render={({ match, history }) => {
                if (!user) return <Redirect to='/' />;
                return (
                  <Col>
                    <ProfileView
                      movies={movies}
                      user={user}
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />
          </Row>
        </Container>
      </Router>
    );
  }
}

export default MainView;