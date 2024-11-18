import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import img1 from '../assets/img/BASIS-1.webp'; // Replace with actual image paths
import img2 from '../assets/img/BTRC-1.webp';
import img3 from '../assets/img/Bacco-1.webp';

const Certificate = () => {
  return (
    <Container fluid className="custom-certificate-container">
        <h2>Certified</h2>
      <Row className="justify-content-center">
        {/* Certificate 1 */}
        <Col md={4} sm={6} className="mb-4">
          <Card className="certificate-card">
            <Card.Img variant="top" src={img1} alt="Certification BASIS" className="certificate-img" />
            <Card.Body className="certificate-info">
              <Card.Title>BASIS</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        {/* Certificate 2 */}
        <Col md={4} sm={6} className="mb-4">
          <Card className="certificate-card">
            <Card.Img variant="top" src={img2} alt="Certification BTRC" className="certificate-img" />
            <Card.Body className="certificate-info">
              <Card.Title>BTRC</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        {/* Certificate 3 */}
        <Col md={4} sm={6} className="mb-4">
          <Card className="certificate-card">
            <Card.Img variant="top" src={img3} alt="Certification BACCO" className="certificate-img" />
            <Card.Body className="certificate-info">
              <Card.Title>BACCO</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Certificate;