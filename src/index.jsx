<<<<<<< Updated upstream
import React from 'react';
import Container from 'react-bootstrap/Container';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
<<<<<<< Updated upstream
import moviesApp from './reducers/reducers';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';
import Container from "react-bootstrap/Container";
=======
=======
import { createRoot } from "react-dom/client";

import { MainView } from "./components/main-view/main-view";
import Container from "react-bootstrap/Container";
>>>>>>> Stashed changes

import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> Stashed changes

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

// Main component (will eventually use all the others)
<<<<<<< Updated upstream
class MyMovieApplication extends React.Component {
=======
<<<<<<< Updated upstream
class MyFlixApplication extends React.Component {
>>>>>>> Stashed changes
  render() {
    return (
      <Provider store={store}>
        <Container>
          <MainView />
        </Container>
      </Provider>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyMovieApplication), container);

<<<<<<< Updated upstream
=======
//ReactDOM.render(React.createElement(MyFlixApplication), container);
root.render(React.createElement(MyFlixApplication))
=======
const MyMovieApplication = () => {
  return (
    <Container>
      <MainView />
    </Container>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyMovieApplication />);
>>>>>>> Stashed changes
>>>>>>> Stashed changes
