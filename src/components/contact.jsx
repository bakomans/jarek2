// components/Contact.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './Contact.css'; // Importuj plik stylów

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dodaj kod obsługi wysyłki formularza, np. wywołanie API
    console.log('Form data:', formData);
    // Resetuj formularz po wysłaniu
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  const phoneNumber = '600 164 230';

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber);
    alert('Phone number copied to clipboard!');
  };

  return (
    <Container className="container-contact">
      <Row className="mt-5">
        <Col>
          <h1>Skontaktuj sie z Nami juz dziś !</h1>
          <p>
            Staramy sie na bierząco być z Państwem, jeśli z jakiegoś powodu wasza wiadomość do nas nie dotarła, proszę zadzwonić na numer podany poniżej 
          </p>
          <Button onClick={handleCopyToClipboard} variant="primary">
            Numer Telefonu: {phoneNumber}
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>Twoje Imie</Form.Label>
              <Form.Control
                type="text"
                placeholder="Wpisz swoje imię"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Nazwisko</Form.Label>
              <Form.Control
                type="text"
                placeholder="Wpisz swoje Nazwisko"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Adres E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Wpisz swoj adres E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Twoja Wiadomość</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Twoja wiadomość"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Wyślij
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
