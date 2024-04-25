import { Button, Col, Container, Form, Row } from "react-bootstrap"

import fantasy from "../data/fantasy.json"
import history from "../data/history.json"
import scifi from "../data/scifi.json"
import romance from "../data/romance.json"
import SingleBook from "./SingleBook"
import { Component } from "react"

class BookList extends Component {
    state = {
        searchbar: "",
        categorySelected: fantasy
    };
    render( ) { 
        const filteredBooks = this.state.categorySelected.filter(book =>
            book.title.toLowerCase().includes(this.state.searchbar.toLowerCase())
        );
return(
    <Container> 
        <Button onClick={() => this.setState({ categorySelected: fantasy })}>Fantasy</Button>
        <Button onClick={() => this.setState({ categorySelected: history })}>History</Button>
        <Button onClick={() => this.setState({ categorySelected: scifi })}>Scifi</Button>
        <Button onClick={() => this.setState({ categorySelected: romance})}>Romance</Button>

      <Form.Group>
        <Form.Control
          type="search"
          placeholder="Cerca un libro"
          value={this.state.searchbar}
          onChange={(e) => this.setState({ searchbar: e.target.value })}
        />
      </Form.Group>
  
  
        <Row className="gy-3">
            {filteredBooks.map((singleBook)=> {
                return(<Col xs={12} md={4} key={singleBook.asin}> 
                <SingleBook book={singleBook}/></Col>)
            })}
        </Row>
    </Container>
        )
    }
}
export default BookList