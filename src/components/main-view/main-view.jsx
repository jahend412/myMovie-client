// imports react into the file
import React from "react";
import axios from "axios";
//import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { setMovies, setUser } from '../../actions/actions';
import { connect } from 'react-redux';

import { MoviesList } from '../movies-list/movies-list';
import { LoginView } from "../login-view/login-view";
import { RegistrationView } from "../registration-view/registration-view";
//import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { Menu } from "../navbar/navbar";
import { ProfileView } from "../profile-view/profile-view";
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';

import './main-view.scss';

// export makes the new component usable by others, the class indicates that the component is a class component and not a function while MainView is the new components name . extends React.component uses generic react component template and creates the MainView Component
export class MainView extends React.Component {
  constructor() {
    // React uses this constructor method to create the component
    super(); // it means call the constructor of the parent class i.e the class called after the extends keyword (React.Component)
    this.state = {
      // the MainView state is initialized
      // movies: [],
      // selectedMovie: null,
      // user: null,
    };
  }

  // Get Token
  /* componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user")
      });
      this.getMovies(accessToken);
    }
  }
*/

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  onRegister(registered) {
    this.setState([
      registered
    ]);
  }

  onLoggedIn(authData) {
    /*  console.log(authData);
      this.setState({
        user: authData.user.Username
      });*/

    //localStorage.setItem('token', authData.token);
    //localStorage.setItem('user', authData.user.Username);
    const { setUser } = this.props;
    setUser(authData);
    this.getMovies(authData.token);
  }

  //Get Movies
  getMovies(token) {
    axios
      .get("https://my-movie-api.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        this.props.setMovies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //  allows user to log out
  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.props.setUser('');
  }

  render() {
    let { movies, user } = this.props;

    return (
      <Router>
        <Menu user={user} />
        <Row className="main-view justify-content-md-center">


          <Route exact path="/" render={() => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view"></div>

            return <MoviesList movies={movies} />;
          }} />


          <Route  // Register Route
            path="/register"
            render={() => {
              if (user) return <Redirect to="/" />;
              return (
                <Col>
                  <RegistrationView />
                </Col>
              );
            }}
          />

          <Route  // Movies Route
            path="/movies/:movieId"
            render={({ match, history }) => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );

              if (movies?.length) return <div className="main-view" />;
              return (
                <Col md={8}>
                  <MovieView
                    movie={movies.find((m) => m._id === match.params.movieId)}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />

          <Route  //Director Route
            exact path='/director/:name'
            render={({ match, history }) => {
              if (!user)
                return (
                  <Col>
                    <LoginView
                      onLoggedIn={(user) => this.onLoggedIn(user)}
                    />
                  </Col>
                );


              if (movies?.length) return <div className="main-view" />;
              return (
                <Col md={8}>
                  <DirectorView
                    director={
                      movies.find((m) => m.Director.Name === match.params.name)
                        .Director
                    }
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />

          <Route
            path="/genre/:name"
            render={({ match, history }) => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );

              if (movies?.length) return <div className="main-view" />;
              return (
                <Col md={8}>
                  <GenreView
                    genre={
                      movies.find((m) => m.Genre.Name === match.params.name)
                        .Genre
                    }
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />

          <Route
            path={`/users/${user}`}
            render={({ match, history }) => {
              if (!user) return <Redirect to="/" />;
              return (
                <Col>
                  <ProfileView
                    history={history}
                    movies={movies}
                    user={user}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />

          <Route
            path={`/user-update/${user}`}
            render={({ match, history }) => {
              if (!user) return <Redirect to="/" />;
              return (
                <Col>
                  <UserUpdate
                    user={user}
                    onBackClick={() => history.goBack()}
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

let mapStateToProps = props => {
  return {
    movies: props.movies,
    user: props.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => {
      dispatch(setUser(user))
    },
    setMovies: (movies) => {
      dispatch(setMovies(movies))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);




