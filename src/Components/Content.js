import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Content is what is doing in the About page

function Content (props) {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col md={8}>{props.children}</Col>
      </Row>
    </Container>
  );
}

export default Content;
