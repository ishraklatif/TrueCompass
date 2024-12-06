import React from "react";
import {Card, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import headerImg from "../assets/img/pathao.png";
import headerImg2 from "../assets/img/shohoz.png";
import headerImg3 from "../assets/img/finlay.png";
import { FaStar } from "react-icons/fa";
import calendarIcon from "../assets/img/calendar_2693507.png";
import checkMarkIcon from "../assets/img/check-mark_5299048.png";
import dollarIcon from "../assets/img/dollar_11915788.png";
import reductionIcon from "../assets/img/reduction_6014151.png";
import img1 from "../assets/img/project-img1.jpg";
import img2 from "../assets/img/project-img2.webp";
import img3 from "../assets/img/project-img3.jpg";


function About() {
  const aboutSections = [
    {
      title: "Pathao",
      subtitle: "Tech Service",
      content: `True Compass Limited provided the best outsouring services with software developers.`,
      img: headerImg,
      rating: 5,
    },
    {
      title: "Shohoz",
      subtitle: "Tech Service",
      content: `True Compass surpassed expections providing outstanding set of engineers`,
      img: headerImg2,
      rating: 5,
    },
    {
      title: "Finlay",
      subtitle: "BPO Service",
      content: `True Compass Limited has the best marketing services that boosted sales significantly`,
      img: headerImg3,
      rating: 5,
    },
  ];

  const iconFeatures = [
    { src: calendarIcon, alt: "Track Record", label: "Track Record" },
    { src: checkMarkIcon, alt: "Proven Quality", label: "Proven Quality" },
    { src: dollarIcon, alt: "Cost Efficiency", label: "Cost Efficiency" },
    { src: reductionIcon, alt: "Process Optimization", label: "Process Optimization" },
  ];

  const projects = [
    {
      title: 'Pathao - Flexible Development Support',
      content: 'Pathao hired developers on flexible hourly rates from us to work on product development which reduced their operations cost by 70%.',
      link: '/services/ites',
      img: img1,
    },
    {
      title: 'Shohoz',
      content: 'True Compass surpassed expectations providing an outstanding set of engineers.',
      link: '/services/outs',
      img: img2,
    },
    {
      title: 'Finlay',
      content: 'True Compass Limited has the best marketing services that boosted sales significantly.',
      link: '/services/bpo',
      img: img3,
    },
  ];
  

  return (
    <div className="about-page">
      <Container className="custom-about-container">
        <h2 className="custom-about-title">Third Party Testimonials</h2>

        {/* Icons Section */}
        <Row className="icon-features-row">
          {iconFeatures.map((feature, index) => (
            <Col xs={6} md={3} key={index} className="icon-feature">
              <img src={feature.src} alt={feature.alt} className="feature-icon" />
              <p>{feature.label}</p>
            </Col>
          ))}
        </Row>

        {/* Testimonials Section */}
        {aboutSections.map((section, index) => (
          <Row className="custom-about-row" key={index}>
            <Col md={6} className="custom-about-text">
              <h2>{section.title}</h2>
              <h3>{section.subtitle}</h3>
              <p>{section.content}</p>
              <div className="rating">
                {Array(section.rating)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} color="gold" />
                  ))}
              </div>
            </Col>
            {section.img && (
              <Col md={6} className="custom-about-image">
                <img src={section.img} alt={section.subtitle} />
              </Col>
            )}
          </Row>
        ))}
      </Container>
      <Container className="custom-project-container">
  <h2>Projects</h2>
  <Row className="custom-project-row">
    {/* Pathao Project */}
    <Col md={6} className="custom-project-col">
      <Card as={Link} to="/services/ites" className="custom-card" style={{ backgroundImage: `url(${img1})` }}>
      </Card>
      <div className="project-details">
        <h3>Project Title: Pathao - Flexible Development Support</h3>
        <p><strong>Description:</strong></p>
        <p>
          Pathao hired developers on flexible hourly rates from us to work on product development, significantly reducing their operational costs by 70%.
        </p>
        <p><strong>Key Highlights:</strong></p>
        <ul>
          <li>Flexible hourly-based developer hiring model</li>
          <li>Enhanced efficiency in product development</li>
          <li>70% reduction in operational costs</li>
        </ul>
        <p><strong>Impact:</strong></p>
        <p>
          Our collaboration empowered Pathao to innovate faster and allocate resources more effectively, driving growth and cost efficiency in their operations.
        </p>
      </div>
    </Col>

    {/* Shohoz Project */}
    <Col md={6} className="custom-project-col">
      <Card as={Link} to="/services/outs" className="custom-card" style={{ backgroundImage: `url(${img2})` }}>
      </Card>
      <div className="project-details">
        <h3>Project Title: Shohoz - BRITS Train Ticketing Platform</h3>
        <p><strong>Description:</strong></p>
        <p>
          Shohoz entrusted us with the contract to build the backend and frontend for the BRITS train ticketing platform. This project is part of a prestigious 5-year tender awarded by the Railway Ministry to Shohoz, aimed at revolutionizing train ticketing in Bangladesh.
        </p>
        <p><strong>Key Highlights:</strong></p>
        <ul>
          <li>Development of a robust backend system for ticketing operations</li>
          <li>Design and implementation of a user-friendly frontend interface</li>
          <li>Integration of secure payment gateways and real-time booking features</li>
          <li>Compliance with Railway Ministry’s technical and regulatory requirements</li>
        </ul>
        <p><strong>Impact:</strong></p>
        <p>
          Our work on the BRITS platform empowered Shohoz to streamline train ticketing services, providing a seamless booking experience for millions of users. This collaboration reinforced Shohoz’s position as a trusted technology partner for large-scale government projects.
        </p>
      </div>
    </Col>

    {/* Finlay Project */}
    <Col md={6} className="custom-project-col">
      <Card as={Link} to="/services/bpo" className="custom-card" style={{ backgroundImage: `url(${img3})` }}>
      </Card>
      <div className="project-details">
        <h3>Project Title: Finlay - Comprehensive Digital Marketing Outsourcing</h3>
        <p><strong>Description:</strong></p>
        <p>
          Finlay entrusted us with their complete digital marketing operations, aiming to expand their online presence and drive significant business growth.
        </p>
        <p><strong>Key Highlights:</strong></p>
        <ul>
          <li>Creation of high-quality blog posts, infographics, and videos to educate and engage target audiences</li>
          <li>Development and execution of a content distribution strategy to increase reach and visibility</li>
          <li>Management of multi-platform social media campaigns to enhance brand engagement</li>
          <li>Optimization of search engine rankings through keyword research and on-page SEO techniques</li>
          <li>Implementation of email marketing campaigns to nurture leads and boost customer retention</li>
          <li>Advanced analytics and reporting to measure campaign performance and refine strategies</li>
        </ul>
        <p><strong>Impact:</strong></p>
        <p>
          Our digital marketing efforts resulted in Finlay achieving over 200% growth in online brand visibility, a 150% increase in digital sales, and higher customer engagement across multiple channels.
        </p>
      </div>
    </Col>
  </Row>
</Container>





    </div>
  );
}

export default About;
