import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import img1 from "../assets/img/project-img1.png";
import img2 from "../assets/img/project-img2.png";
import img3 from "../assets/img/project-img3.png";
import img4 from "../assets/img/project-img4.png";
import img5 from "../assets/img/project-img5.png";
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    { title: 'ITES Service', link: '/services/ites', img: img1 },
    { title: 'Outsourcing Service', link: '/services/outs', img: img2 },
    { title: 'BPO Service', link: '/services/bpo', img: img3 },
    { title: 'Tech Service', link: '/services/tech', img: img4 },
    { title: 'PR Management', link: '/services/prm', img: img5 },
  ];

  return (
    
    <Container className="my-5">
      <h2>Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
           <Card as={Link} to={service.link}>
              <Card.Img variant="top" src={service.img} alt={service.title} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
