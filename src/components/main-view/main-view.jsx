import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Row, Col, Container } from 'react-bootstrap';
import { Menu } from "../navbar/navbar";
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

  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie,
    });
  }

  //Updates the 'user' property when a user logs in
  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  getMovies(token) {
    axios
      .get('https://mymoviedb-44.herokuapp.com/movies', {
        headers: { Authorization: 'Bearer${token}' }
      })
      .then((response) => {
        // Assign the result to the state
        this.setState({
          movies: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onRegistration(register) {
    this.setState({
      register,
    });
  }

  render() {
    const { movies, user } = this.state;

    return (
      <Router>
        <Menu user={user} onLogOut={() => this.onLoggedOut()} />

        <Row className="main-view justify-content-md-center">

          <Route exact path="/"
            render={() => {
              if (!user)

                return
              <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
              // Before the movies have been loaded

              if (movies.length === 0) return <div className='main-view' />;

              return movies.map(m => (
                <Col md={8} key={m._id}>
                  <MovieCard movie={m} />
                </Col>
              ))
            }} />

          <Route
            path='/register'
            render={() => {
              if (user) return <Redirect to='/' />;

              return <Col>
                <RegistrationView
                  onLoggedIn={(user) => this.onLoggedIn(user)}
                />
              </Col>
            }}
          />

          <Route
            path={'/users/:user'}
            render={({ match, history }) => {
              if (!user) return <Redirect to="/" />
              return (
                <Col>
                  <ProfileView
                    movies={movies}
                    user={user}
                    onBackClick={() => history.goBack()} />
                </Col>
              );
            }} />

          <Route
            path={'/user-update/:user'}
            render={({ match, history }) => {
              if (!user) return <Redirect to="/" />
              return (
                <Col>
                  <UserUpdate
                    user={user}
                    onBackClick={() => history.goBack()} />
                </Col>
              );
            }} />

          <Route
            exact
            path='/movies/:id'
            render={({ match, history }) => {

              return (
                <Col md={8}>
                  <MovieView
                    movie={movies.find((m) => m._id === match.params.id)}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />

          <Route
            path='/director/:id'
            render={({ match, history }) => {

              return (
                <Col>
                  <DirectorView
                    movie={movies.find(m => m.id === match.params.id)}
                    onBackClick={() => history.goBack()} />
                </Col>
              );
            }}
          />



          <Route
            path="/genres/:name"
            render={({ match, history }) => {
              /* If there is no user, the LoginView is rendered. If there is a user logged in, 
       the user details are passed as a prop to the LoginView */
              if (!user)
                return (
                  <Col>
                    <LoginView
                      movies={movies}
                      onLoggedIn={(user) => this.onLoggedIn(user)}
                    />
                  </Col>
                );
              // Before the movies have been loaded
              if (movies.length === 0) return <div className="main-view" />;

              return (
                <Col md={8}>
                  <GenreView
                    movies={movies.filter((m) => m.Genre.Name === match.params.name
                    )}
                    genre={movies.find((m) => m.Genre.Name === match.params.name).Genre
                    }
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />

          <Route
            exact
            path="/profile"
            render={({ history }) => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return (
                <Col md={12} className="px-0">
                  <ProfileView
                    movies={this.state.movies}
                    onBackClick={() => history.goBack()}
                    onDeletedUser={() => this.onLoggedOut()}
                    onUpdatedUser={(newUserInfo) =>
                      this.onDeletedUser(newUserInfo)
                    }
                  />
                </Col>
              );
            }}
          />
        </Row>

      </Router>
    );
  }
}

MainView.protoTypes = {};

export default MainView;