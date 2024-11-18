import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/website-design.jpg";
import headerImg2 from "../assets/img/OIP.jpeg";

function About() {
  const aboutSections = [
    {
      title: "True Compass",
      subtitle: "Empowering Enterprises with ITES Excellence",
      content: `Helinix Limited provides enterprises with customized IT outsourcing services and comprehensive ITES solutions, ranging from sophisticated tech advances to flawless business process outsourcing (BPO) services. As a tech services provider, we offer the know-how and resources required for companies to prosper in the rapidly changing digital landscape, guaranteeing productivity and expansion while concentrating on the key elements that determine your success.`,
      img: null,
    },
    {
      title: "Why Us?",
      subtitle: "Customized Solutions",
      content: `We provide enterprises with customized IT and outsourced solutions, ranging from sophisticated tech developments to flawless BPO services. We offer the know-how and resources required for companies to prosper in the rapidly changing digital landscape, guaranteeing productivity and expansion while concentrating on the key elements that determine your success.`,
      img: headerImg,
    },
    {
      title: "Why Us?",
      subtitle: "We Reach Globally",
      content: `For Helinix Limited, “Global Reach” refers to providing outsourcing and IT solutions all over the world while guaranteeing smooth service across regions. This enables companies to grow, gain access to worldwide knowledge, and prosper outside of their local markets.`,
      img: headerImg2,
    },
  ];

  return (
    <div className="about-page">
      <Container className="custom-about-container">
        <h2 className="custom-about-title">About Us</h2>
        {aboutSections.map((section, index) => (
          <Row
            key={index}
            className={`custom-about-row ${
              index % 2 === 0 ? "" : "custom-about-row-reverse"
            }`}
          >
            <Col md={6} className="custom-about-text">
              <h2>{section.title}</h2>
              <h3>{section.subtitle}</h3>
              <p>{section.content}</p>
            </Col>
            {section.img && (
              <Col md={6} className="custom-about-image">
                <img src={section.img} alt={section.subtitle} />
              </Col>
            )}
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default About;
