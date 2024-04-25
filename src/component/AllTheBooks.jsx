
import { Row, Col  } from "react-bootstrap";
import library from "../data/horror.json";



import Card from 'react-bootstrap/Card';

const AllTheBooks= () => {
return(
    <Row className="container-fluid">
        {library.map(book => {

       
  return (
    <Col className="g-3 col-6 col-md-4 col-lg-2" key={book.asin}> 
    <Card >
      <Card.Img className=" imgHeight" variant="top" src={book.img} />
      <Card.Body className="cardHeight">
        <Card.Title>{book.title}</Card.Title>
        
       
      </Card.Body>
    </Card>
    </Col>
  ) })}  </Row>);
}

export default AllTheBooks;


