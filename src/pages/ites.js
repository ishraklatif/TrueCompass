import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { AiOutlineCustomerService, AiOutlineDatabase } from "react-icons/ai";
import { FaRegIdCard } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import { GiHumanPyramid } from "react-icons/gi";
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Certificate from '../components/Certificate';

function ITES() {
  const [hoveredTitle, setHoveredTitle] = useState("IT Enabled Services (ITES)");

  const rotateTextArray = [
    "Customer Support (Call Centers)",
    "Data Entry & Processing",
    "Payroll Management",
    "Telemarketing",
    "Finance & Accounting Services",
    "HR Services",
  ];

  const services = [
    {
      title: 'Customer Support (Call Centers)',
      icon: <AiOutlineCustomerService size={50} />,
      hoverIcon: <AiOutlineCustomerService size={70} color="#ffffff" />,
      description: [
        'Efficient, 24/7 customer service. We handle inquiries via phone, email, and chat, ensuring prompt and professional responses.',
      ],
    },
    {
      title: 'Data Entry & Processing',
      icon: <AiOutlineDatabase size={50} />,
      hoverIcon: <AiOutlineDatabase size={70} color="#ffffff" />,
      description: [
        'Streamline your data management. Our team organizes, processes, and secures large datasets, helping you make informed decisions.',
      ],
    },
    {
      title: 'Payroll Management',
      icon: <FaRegIdCard size={50} />,
      hoverIcon: <FaRegIdCard size={70} color="#ffffff" />,
      description: [
        'Simplify payroll. From processing salaries to managing benefits, we take care of it all, so you can focus on growing your business.',
      ],
    },
    {
      title: 'Telemarketing',
      icon: <MdWifiCalling3 size={50} />,
      hoverIcon: <MdWifiCalling3 size={70} color="#ffffff" />,
      description: [
        'Boost your sales. Our dedicated telemarketing team effectively promotes your products and services to increase conversions.',
      ],
    },
    {
      title: 'Finance & Accounting Services',
      icon: <SiCashapp size={50} />,
      hoverIcon: <SiCashapp size={70} color="#ffffff" />,
      description: [
        'Keep your finances in check. We manage bookkeeping, audits, and compliance, so you don’t have to.',
      ],
    },
    {
      title: 'HR Services',
      icon: <GiHumanPyramid size={50} />,
      hoverIcon: <GiHumanPyramid size={70} color="#ffffff" />,
      description: [
        'Build a strong team. We handle recruitment, training, and performance management, ensuring you get the best talent.',
      ],
    },
  ];

  return (
    <div className="ites-section">
      {/* Pass the rotateTextArray and fixedHeading to the Banner component */}
      <Banner
        rotateTextArray={rotateTextArray}
        fixedHeading="IT Enabled Services (ITES)"
      />
      <Container className="ites-container my-5">
        <h2>ITES Services</h2>
        <Row className="ites-row">
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card
                className="ites-card text-center"
                onMouseEnter={() => setHoveredTitle(service.title)}
                onMouseLeave={() => setHoveredTitle("IT Enabled Services (ITES)")}
              >
                <Card.Body>
                  <div
                    style={{
                      color: hoveredTitle === service.title ? "#ffffff" : "#000000",
                      fontSize: "50px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {hoveredTitle === service.title ? service.hoverIcon : service.icon}
                  </div>
                  <Card.Title className="ites-card-title">{service.title}</Card.Title>
                  {hoveredTitle === service.title && (
                    <ul className="ites-card-description">
                      {service.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Certificate />
      <Contact />
    </div>
  );
}

export default ITES;
