import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

// Import props from App.js
function Hero(props) {
  return (
    <Jumbotron className="jumbotron-fluid pd-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-3">
          <Col md={8} sm={12}>
            { props.title && <h2 className="display-4 font-weight-bolder">{ props.title }</h2> }
            { props.subTitle && <h3 className="display-5 font-weight-light">{ props.subTitle }</h3> }
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
