import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import "../../src/App.css";

function contactForm() {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="disabledTextInput"
            placeholder="first and last name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Your email</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="your email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Drop me a note</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="your message" />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default contactForm;
