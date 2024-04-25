import { Col, Container, Form, Row } from "react-bootstrap"

import fantasy from "../data/fantasy.json"
import SingleBook from "./SingleBook"
import { Component } from "react"

class BookList extends Component {
    state = {
        searchbar: ""
    };
    render( ) { 
        const filteredBooks = fantasy.filter(book =>
            book.title.toLowerCase().includes(this.state.searchbar.toLowerCase())
        );
return(
    <Container> 
    <Row className="justify-content-center my-5">
    <Col xs={12} md={4} className="text-center">
      <Form.Group>
        <Form.Control
          type="search"
          placeholder="Cerca un libro"
          value={this.state.searchbar}
          onChange={(e) => this.setState({ searchbar: e.target.value })}
        />
      </Form.Group>
    </Col>
  </Row>
  
        <Row>
            {filteredBooks.map((book)=> {
                return(<Col xs={12} md={4} key={book.asin}> 
                <SingleBook src={book.img} title={book.title}/></Col>)
            })}
        </Row>
    </Container>
        )
    }
}
export default BookList