

import { Component } from 'react';
import Card from 'react-bootstrap/Card';

class SingleBook extends Component  {
  state = {
    selected: false,
  }
  render() { 
    return(
        <Card   onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? '2px solid red' : '1px solid black' }}>
        <Card.Img className='imgHeight' variant="top" src={this.props.src} />
        <Card.Body className='cardHeight'>
          <Card.Title>{this.props.title}</Card.Title>
     
         
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook 