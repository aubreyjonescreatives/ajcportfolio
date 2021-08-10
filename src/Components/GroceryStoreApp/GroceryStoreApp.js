import React from 'react';
import { Row, Col, Nav} from 'react-bootstrap';
import NavBar2 from '../NavBar/NavBar2'
import Cover from '../../images/videovoyagers/Cover Sheet.jpg';
import theChallenge from '../../images/videovoyagers/Cover Sheet-5.jpg';
import Cover2 from '../../images/videovoyagers/Cover Sheet-1.jpg';
import ca from '../../images/videovoyagers/Frame 5.jpg';
import ca2 from '../../images/videovoyagers/Cover Sheet-2.jpg';




function GroceryStoreApp() {
  return (
  <>
  <NavBar2 />
  <Row>
  <Col>
  <figure className="DNImage"><img src={Cover}/></figure>
  </Col>
  <Col>
  <figure className="DNImage"><img src={theChallenge}/></figure>
  </Col>
  </Row>
  <Row>
  <Col>
  <figure className="DNImage"><img src={Cover2}/></figure>
  </Col>
  <Col>
  <figure className="DNImage"><img src={ca}/></figure>
  </Col>
  <Col>
  <figure className="DNImage"><img src={ca2}/></figure>
  </Col>
  </Row>



  </>
  );
}

export default GroceryStoreApp;
