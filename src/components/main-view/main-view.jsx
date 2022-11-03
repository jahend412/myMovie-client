import React from 'react';
import axios from 'axios';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: '6324f5c59e4018735f66c112', Title: 'Shrek',
          Description: 'A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.',
          Genre: {
            Name: "Family",
            Description: "A children's film, or family film, is a film genre that contains children or relates to them in the context of home and family.",
          },
          Director: {
            Name: "Andrew Adamson",
            Bio: "Andrew Ralph Adamson is a New Zealand film director, producer, and screenwriter based in Los Angeles, where he directed the Academy Award-winning animated films Shrek and Shrek 2.",
            Birth: "12-1-1966",
            Death: ""
          },

          ImagePath: 'https://www.imdb.com/title/tt0126029/mediaviewer/rm955136512/?ref_=tt_ov_i'
        },
        {
          _id: '6324f31f9e4018735f66c110', Title: 'The Lion King',
          Description: "Disney's The Lion King is about a young lion named Simba, who is the crown prince of an African Savanna. When his father dies in an accident staged by his uncle, Simba is made to feel responsible for his father's death and must overcome his fear of taking responsibility as the rightful heir to the throne.",
          Genre: {
            Name: "Family",
            Description: "A children's film, or family film, is a film genre that contains children or relates to them in the context of home and family.",
          },
          Director: {
            Name: "Roger Allers",
            Bio: "Roger Charles Allers is an American film director, screenwriter, animator, storyboard artist, and playwright.",
            Birth: "6-29-1949",
            Death: ""
          },
          ImagePath: 'https://www.imdb.com/title/tt0110357/mediaviewer/rm3272938240/?ref_=tt_ov_i'
        },
        {
          _id: '6324f4cd9e4018735f66c111', Title: 'Pulp Fiction',
          Description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          Genre: {
            Name: "Comedy",
            Description: "Professional entertainment consisting of jokes and satirical sketches, intended to make an audience laugh.",
          },
          Director: {
            Name: "Quentin Taranino",
            Bio: "Quentin Taranino is an American filmmaker and actor. His films are characterized by frequent references to popular culture and film genres, nonlinear storylines, dark humor, stylized violence, extended dialogue, pervasive use of profanity, cameos and ensemble casts.",
            Birth: "3-27-1963",
            Death: ""
          },
          ImagePath: 'https://www.imdb.com/title/tt0110912/mediaviewer/rm1959546112/?ref_=tt_ov_i'
        },
        {
          _id: '632274ca513ba8d106234ef2', Title: 'Silence of the Lambs',
          Description: "A young FBI cadet must recieve the help of an incarcerated and manipulative cannibal killer.",
          Genre: {
            Name: "Thriller",
            Description: "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.",
          },
          Director: {
            Name: "Jonathan Demme",
            Bio: "Robert Jonathan Demme was an American director, producer, and screenwriter.",
            Birth: "2-22-1944",
            Death: "4-26-2017"
          },
          ImagePath: 'https://www.imdb.com/title/tt0102926/mediaviewer/rm3242988544/?ref_=tt_ov_i'
        },
        {
          _id: '6324fbb19e4018735f66c117', Title: 'Hook',
          Description: "When Captain James Hook kidnaps his children, an adult Peter Pan must return to Neverland and reclaim his youthful spirit in order to challenge his old enemy.",
          Genre: {
            Name: "Family",
            Description: "A children's film, or family film, is a film genre that contains children or relates to them in the context of home and family.",
          },
          Director: {
            Name: "Steven Spielberg",
            Bio: "One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world.",
            Birth: "12-18-1946",
            Death: ""
          },
          ImagePath: 'https://www.imdb.com/title/tt0102057/mediaviewer/rm1611475456/?ref_=tt_ov_i'
        },
        {
          _id: '6324f9319e4018735f66c115', Title: 'The Departed',
          Description: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
          Genre: {
            Name: "Thriller",
            Description: "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.",
          },
          Director: {
            Name: "Martin Scorsese",
            Bio: "Martin Charles Scorsese was born in Queens, New York City, to Catherine Scorsese (née Cappa) and Charles Scorsese, who both worked in Manhattan's garment district, and whose families both came from Palermo, Sicily.",
            Birth: "11-17-1942",
            Death: ""
          },
          ImagePath: 'https://www.imdb.com/title/tt0073195/mediaviewer/rm1449540864/?ref_=tt_ov_i'
        },
        {
          _id: '6324faeb9e4018735f66c116', Title: 'The Big Lebowski',
          Description: "Jeff 'The Dude' Lebowski, mistaken for a millionaire of the same name, seeks restitution for a rug ruined by debt collectors, enlisting his bowling buddies for help while trying to find the millionaire's missing wife.",
          Genre: {
            Name: "Comedy",
            Description: "Professional entertainment consisting of jokes and satirical sketches, intended to make an audience laugh.",
          },
          Director: {
            Name: "The Coen Brothers",
            Bio: "Joel Daniel Coen and Ethan Jesse Coen, collectively known as the Coen brothers are American filmmakers. Their films span many genres and styles.",
            Birth: "(Joel)11-29-1954, (Ethan)9-21-1957",
            Death: ""
          },
          ImagePath: 'https://www.imdb.com/title/tt0118715/mediaviewer/rm318364928/?ref_=tt_ov_i'
        },
        {
          _id: '6324f82e9e4018735f66c114', Title: 'Jaws',
          Description: "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
          Genre: {
            Name: "Horror",
            Description: "Fiction whose purpose is to create feelings of fear, dread, repulsion, and terror in the audience—in other words, it develops an atmosphere of horror.",
          },
          Director: {
            Name: "Steven Spielberg",
            Bio: "One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world.",
            Birth: "12-18-1946",
            Death: ""
          },
          ImagePath: 'https://www.imdb.com/title/tt0073195/mediaviewer/rm1449540864/?ref_=tt_ov_i'
        },
        {
          _id: '6323d2ba9e4018735f66c10f', Title: 'Star Wars',
          Description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
          Genre: {
            Name: "Science Fiction",
            Description: "Science fiction is storytelling with a focus on characters dealing with advances in technology, science, the future, and space.",
          },
          Director: {
            Name: "George Lucas",
            Bio: "George Lucas is an American film director, producer, screenwriter, and entrepreneur.  Lucas is best known for creating the Star Wars and Indiana Jones franchises and founding Lucasfilm, LucasArts, and Industrial Light & Magic.",
            Birth: "5-14-1944",
            Death: ""
          },
          ImagePath: 'https://www.imdb.com/title/tt0076759/mediaviewer/rm164871937/?ref_=tt_ov_i'
        },
        {
          _id: '6324f75a9e4018735f66c113', Title: 'Super Troopers',
          Description: "Five Vermont state troopers, avid pranksters with a knack for screwing up, try to save their jobs and out-do the local police department by solving a crime.",
          Genre: {
            Name: "Comedy",
            Description: "Professional entertainment consisting of jokes and satirical sketches, intended to make an audience laugh.",
          },
          Director: {
            Name: "Jay Chandrasekhar",
            Bio: "Jay Chandrasekhar was born in Chicago, Illinois, USA. He is a director and actor, known for Super Troopers (2001), Club Dread (2004) and Beerfest (2006).",
            Birth: "4-9-1968",
            Death: ""
          },
          ImagePath: 'https://www.imdb.com/title/tt0247745/mediaviewer/rm1909396480/?ref_=tt_ov_i'
        },

      ],
      selectedMovie: null
    }
  }

  componentDidMount() {
    axios.get('https://mymoviedb-44.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;


    if (movies.length === 0) return <div className="main-view" />;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
          ))
        }
      </div>
    );
  }
}

export default MainView;