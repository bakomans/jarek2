// components/Home.jsx
import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './home.css'; 

const Home = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1 className="welcome-text">Jarosław Żywczak Geodezja</h1>
          <p className="subtitle">Profesjonalne usługi geodezyjne dostosowane do Twoich potrzeb.</p>

        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/gHjnpE_krLU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card className="info-card">
            <Card.Body>
              <Card.Title className="card-title">Pełna obsługa geodezyjna w przystępnej cenie</Card.Title>
              <Card.Text>
                Geodezja
                <br />
                ul. Zielona 19N, 33-395 Chełmiec małopolskie
              </Card.Text>
            </Card.Body>
            <ListGroup variant="flush" className="mb-4">
              <ListGroup.Item variant="info" className="font-italic text-info font-weight-bold">
                Godziny otwarcia
              </ListGroup.Item>
              <ListGroup.Item className="font-weight-bold">Poniedziałek: 08:00 - 18:00</ListGroup.Item>
              <ListGroup.Item className="font-weight-bold">Wtorek: 08:00 - 18:00</ListGroup.Item>
              <ListGroup.Item className="font-weight-bold">Środa: 08:00 - 18:00</ListGroup.Item>
              <ListGroup.Item className="font-weight-bold">Czwartek: 08:00 - 18:00</ListGroup.Item>
              <ListGroup.Item className="font-weight-bold">Piątek: 08:00 - 18:00</ListGroup.Item>
              <ListGroup.Item className="font-weight-bold">Sobota: 08:00 - 15:00</ListGroup.Item>
              <ListGroup.Item className="font-weight-bold">Niedziela: Zamknięte</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
    </Container>
  );
};

export default Home;
