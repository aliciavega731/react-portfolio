import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
