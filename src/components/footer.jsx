// components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'; // Importuj plik stylów

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <h3>Jarosław Żywczak Geodezja</h3>
            <p>ul. Zielona 19N, 33-395 Chełmiec małopolskie</p>
          </Col>
          <Col>
            <h5>NIP</h5>
            <p>7341619081</p>
          </Col>
          <Col>
            <h5>Telefon</h5>
            <p>600 164 230</p>
          </Col>
          <Col>
            <h5>Email</h5>
            <p>jaroslaw.zywczak@gmail.com</p>
          </Col>
          <Col>
            <h5>Media społecznościowe</h5>
            <a href="http://facebook.com/325029177657387" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p>&copy; Jarosław Żywczak</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
