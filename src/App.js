import './App.css';
import{Form,Row,Button,Col} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      
   <div id="boxx">
     <h1>Welcome</h1>
    <Form>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
   </Form.Group>


  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Tunisie</option>
        <option>France</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label> Postal code</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="i accept the rules" />
  </Form.Group>

  <Button variant="primary" type="submit">
  Sign Up
  </Button>
  <div id="icons">
     <i class="fab fa-facebook-square"></i>
     <i class="fab fa-twitter-square"></i>
     <i class="fab fa-instagram"></i>
     </div>
  
  </Form>
   
  </div>

    </div>
   
  );
}

export default App;
