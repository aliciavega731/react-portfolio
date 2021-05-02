import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="fixed-bottom mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="pd-0" md={3} sm={12}>
            My React Portfolio
          </Col>
          <Col className="pd-0" md={1}>
            {" "}
            <a
              href="https://github.com/aliciavega731"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Col>
          <Col className="pd-0" md={1}>
            {" "}
            <a
              href="https://www.linkedin.com/in/alicia-vega-0b16b972/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Col>
          <Col className="pd-0" md={1}>
            {" "}
            <a
              href="https://www.instagram.com/aliciaavega/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </Col>
          <Col className="pd-0 d-flex justify-content-end" md={3}>
            2021
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
