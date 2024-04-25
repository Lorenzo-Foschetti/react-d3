import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MyNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      
          <Nav className="me-auto">
            <Nav.Link className='text-info' href="#home">Home</Nav.Link>
            <Nav.Link className='text-info' href="#link">About</Nav.Link>
            <Nav.Link className='text-info' href="#link">Browse</Nav.Link>
           
          </Nav>
   
      </Container>
    </Navbar>
  );
}

export default MyNav;