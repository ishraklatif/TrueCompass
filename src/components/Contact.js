import React, { useRef, useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser'; // Import Email.js library

function Contact() {
  const formRef = useRef(); // Create a reference for the form
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const serviceID = 'service_ebrfkek'; // Correct Service ID
    const templateID = 'template_txljoqx'; // Correct Template ID
    const userID = 'cywBmKX-pyPTfprYB'; // Correct Public Key
  
    console.log("Form Data: ", {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    });
  
    emailjs
      .sendForm(serviceID, templateID, e.target, userID) // Send the form data
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          setIsSubmitted(true);
          e.target.reset(); // Reset the form
        },
        (error) => {
          console.error('Failed to send email:', error);
          setError('An error occurred. Please try again later.');
        }
      );
  };

  return (
    <Container className="contact-section my-5">
      <h2>Contact Us</h2>
      {isSubmitted && <Alert variant="success">Your message has been sent successfully!</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form ref={formRef} onSubmit={handleSubmit}> {/* Attach formRef */}
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={3}
            required
            placeholder="Write your message"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
