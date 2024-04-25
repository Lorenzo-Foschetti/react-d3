import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

function MyAlert() {
  return (
    <Container> 
    <Alert variant="success">
      <Alert.Heading>YOU'RE WELCOME!</Alert.Heading>
    
      
     
    </Alert>
    <h1 className='text-info text-center'>My book's page</h1>
    </Container>
  );
}

export default MyAlert;