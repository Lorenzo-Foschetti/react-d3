

import { Component } from 'react';
import { Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

class SingleBook extends Component  {
  state = {
    selected: false,
  }
  render() { 
    return(
        <Card  onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? '2px solid red' : '1px solid black' }}>
        <Card.Img className='imgHeight' variant="top" src={this.props.book.img} />
        <Card.Body className='cardHeight'>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Badge className='bg-primary mb-0 '><Card.Title>{this.props.book.price}$</Card.Title></Badge>
     
         
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook 