import React from 'react';
//import './genre-view.scss'
import { Card, Button } from 'react-bootstrap';

export class GenreView extends React.Component {

  render() {
    const { genre, onBackClick } = this.props;

    return (

      <Card text='dark' className="genreCard">
        <Card.Body>
          <Card.Title>{genre.Name}</Card.Title>
          <Card.Text>{genre.Description}</Card.Text>
          <Button variant='danger' onClick={() => { onBackClick() }}>Back</Button>
        </Card.Body>
      </Card>
    )
  }

} 