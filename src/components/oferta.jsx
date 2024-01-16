
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './oferta.css'; 

const Oferta = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1 className="section-title">Oferta Geodezyjna</h1>
          <div className="section-accent"></div>

          <p className="offer-text">
            Witamy w Jarosław Żywczak Geodezja, firmie geodezyjnej z siedzibą w malowniczym Chełmcu, województwo małopolskie. Jesteśmy dumni z oferowania kompleksowych usług geodezyjnych zarówno dla klientów indywidualnych, jak i firm.
          </p>

          <div className="offer-list">
            <p className="offer-list-item">Nasza Propozycja Zawiera M.in.:</p>
            <ul>
              <li className="offer-list-item">Mapy do Celów Projektowych</li>
              <li className="offer-list-item">Tyczenie Budynków, Sieci, Zagospodarowania Terenu</li>
              <li className="offer-list-item">Geodezyjna Inwentaryzacja Powykonawcza Budowli i Urządzeń Podziemnych</li>
              <li className="offer-list-item">Podziały Nieruchomości</li>
              <li className="offer-list-item">Wznowienia i Ustalania Granic</li>
              <li className="offer-list-item">Rozgraniczenia i Wskazania Granic Nieruchomości</li>
              <li className="offer-list-item">Badania Ksiąg Wieczystych</li>
              <li className="offer-list-item">Pomiary Powierzchni i Kubatur Lokali Mieszkalnych</li>
              <li className="offer-list-item">Pomiary Przemieszczeń i Odkształceń Obiektów Inżynierskich</li>
            </ul>
          </div>

          <p className="offer-text">
            Na podstawie uzyskanych wyników, sporządzamy kompletną dokumentację niezbędną do planowania inwestycji, zawsze z zachowaniem ustalonych terminów.
          </p>

          <div className="offer-list">
            <p className="offer-list-item">Oferujemy Również:</p>
            <ul>
              <li className="offer-list-item">Pomiary Elewacji Budynków</li>
              <li className="offer-list-item">Pomiary Objętości Mas Ziemnych (Hałd, Nasypów itp.)</li>
              <li className="offer-list-item">Szczegółowe Inwentaryzacje Architektoniczne Obiektów</li>
              <li className="offer-list-item">Ustawianie Geometryczne Maszyn</li>
              <li className="offer-list-item">Inne Pomiary Specjalistyczne</li>
              <li className="offer-list-item">Nadzór Geodezyjny</li>
            </ul>
          </div>

          <p className="offer-text">
            Nasi geodeci nie tylko wykonują prace, ale także służą profesjonalnym doradztwem. Wspieramy klientów w planowaniu inwestycji oraz wszelkich formalnościach związanych z geodezją.
          </p>

          <p className="offer-highlight">
            Firma Jarosław Żywczak Geodezja gwarantuje konkurencyjne ceny oraz terminowość realizacji projektów. Zapraszamy do kontaktu i skorzystania z naszych usług.
          </p>

          <div className="section-accent"></div>

        </Col>
      </Row>
    </Container>
  );
};

export default Oferta;
