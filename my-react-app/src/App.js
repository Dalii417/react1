import './App.css';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';


function App() {
  return (
    <div className="App">
 
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
     


<br>
</br>
      



<div className="div-style"> <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
      <Button as="input" type="button" value="Input" />{' '}
      <Button as="input" type="submit" value="Submit" />{' '}
      <Button as="input" type="reset" value="Reset" />
</div>


 
      <Row>
        <Col >
          <Image className="imgs"  src="https://clubafricain.com/wp-content/uploads/2023/05/3L4A4585.jpg"  />
        </Col>
      
      </Row>
    
      

      <Stack className='h1' direction="horizontal" gap={2}>
      <Badge bg="primary">Primary</Badge>
      <Badge bg="secondary">Secondary</Badge>
        <Badge bg="success">Success</Badge>
         </Stack>



    </div>
  );
}

export default App;
