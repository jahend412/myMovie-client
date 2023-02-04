import React from 'react';
//import './director-view.scss';
import { Card, Button } from 'react-bootstrap';

export class DirectorView extends React.Component {


  render() {
    const { director, onBackClick } = this.props;

    return (
      <Card text='dark' className="directorCard">
        <Card.Body>
          <Card.Title className="directorTitle">{director.Name}</Card.Title>
          <Card.Text> Year Born/Died: {director.Birth}-{director.Death}</Card.Text>
          <Card.Text> Biography: {director.Bio}</Card.Text>
          <Button variant='danger' onClick={() => { onBackClick() }}>Back</Button>
        </Card.Body>
      </Card>
    )
  }
} 