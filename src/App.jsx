// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from './components/nav';
import Home from './components/home';
import Oferta from './components/oferta';
import Contact from './components/contact';
import Footer from './components/footer'; 

const App = () => (
  <Router>
    <Nav />
    <Container>
      <Row>
        <Col>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/oferta" element={<Oferta />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Col>
      </Row>
    </Container>
    <Footer />
  </Router>
);

export default App;
