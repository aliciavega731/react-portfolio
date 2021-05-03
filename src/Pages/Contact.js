// Code adapted from Module activity and additional online resources (Glove on Youtube)
import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import Hero from "../Components/Hero";

function Contact(props) {
  return (
    <div fluid="md">
    <Hero title={props.title} />
    <Form>
      <Form.Row>
        <Col>
          <Form.Label>First name</Form.Label>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Last name" />
        </Col>
      </Form.Row>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Send email.
      </Button>
    </Form>
    </div>
  );
}

export default Contact;
