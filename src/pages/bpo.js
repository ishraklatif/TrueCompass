import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { AiOutlineDatabase } from "react-icons/ai";
import { GrDocumentStore } from "react-icons/gr";
import { SiCashapp } from "react-icons/si";
import { GiHumanPyramid, GiHumanTarget, GiArchiveResearch } from "react-icons/gi";
import { TbDatabaseCog } from "react-icons/tb";
import { LuDatabaseBackup } from "react-icons/lu";
import { BsTelephoneForward } from "react-icons/bs";
import { FaUnity } from "react-icons/fa";
import { MdContentPasteSearch, MdOutlineConnectingAirports } from "react-icons/md";
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Certificate from '../components/Certificate';

function BPO() {
  // Define the rotating text array for the Banner component
  const rotateTextArray = [
    "Data Entry & Management",
    "Data Cleansing & Validation",
    "Data Mining & Analysis",
    "Document Digitization",
    "Finance & Accounting",
    "Back Office Support",
    "Telemarketing & Lead Generation",
    "IT & Technical Support",
    "HR & Recruitment Process Outsourcing (RPO)",
    "Content Moderating & Management",
    "Supply Chain Management",
    "Research & Analytics",
  ];

  const [hoveredTitle, setHoveredTitle] = useState("BPO Services");

  // Define the services data
  const services = [
    {
      title: "Data Entry & Management",
      icon: <TbDatabaseCog size={50} />,
      hoverIcon: <TbDatabaseCog size={70} color="#ffffff" />,
      description: [
        "Efficient data organization and management.",
        "Database updates and integrity checks.",
        "Custom data entry solutions.",
      ],
    },
    {
      title: "Data Cleansing & Validation",
      icon: <AiOutlineDatabase size={50} />,
      hoverIcon: <AiOutlineDatabase size={70} color="#ffffff" />,
      description: [
        "Ensure data accuracy and consistency.",
        "Remove redundant or outdated entries.",
        "Standardize large datasets.",
      ],
    },
    {
      title: "Data Mining & Analysis",
      icon: <LuDatabaseBackup size={50} />,
      hoverIcon: <LuDatabaseBackup size={70} color="#ffffff" />,
      description: [
        "Extract valuable insights from raw data.",
        "Market trends and customer behavior analysis.",
        "Custom analytics reporting.",
      ],
    },
    {
      title: "Document Digitization",
      icon: <GrDocumentStore size={50} />,
      hoverIcon: <GrDocumentStore size={70} color="#ffffff" />,
      description: [
        "Convert physical documents into digital formats.",
        "OCR-enabled scanning for searchable documents.",
        "Secure document storage and access.",
      ],
    },
    {
      title: "Finance & Accounting",
      icon: <SiCashapp size={50} />,
      hoverIcon: <SiCashapp size={70} color="#ffffff" />,
      description: [
        "Bookkeeping and financial statement preparation.",
        "Tax filing and compliance support.",
        "Budgeting and financial planning.",
      ],
    },
    {
      title: "Back Office Support",
      icon: <GiHumanPyramid size={50} />,
      hoverIcon: <GiHumanPyramid size={70} color="#ffffff" />,
      description: [
        "Administrative and operational tasks.",
        "Database management and report generation.",
        "Streamlined back-office processes.",
      ],
    },
    {
      title: "Telemarketing & Lead Generation",
      icon: <BsTelephoneForward size={50} />,
      hoverIcon: <BsTelephoneForward size={70} color="#ffffff" />,
      description: [
        "Effective outreach campaigns.",
        "Targeted lead generation strategies.",
        "Customer follow-ups and surveys.",
      ],
    },
    {
      title: "IT & Technical Support",
      icon: <FaUnity size={50} />,
      hoverIcon: <FaUnity size={70} color="#ffffff" />,
      description: [
        "Hardware and software troubleshooting.",
        "24/7 IT helpdesk services.",
        "System performance monitoring.",
      ],
    },
    {
      title: "HR & Recruitment Process Outsourcing (RPO)",
      icon: <GiHumanTarget size={50} />,
      hoverIcon: <GiHumanTarget size={70} color="#ffffff" />,
      description: [
        "End-to-end recruitment support.",
        "Employee onboarding and training.",
        "Performance appraisals and retention strategies.",
      ],
    },
    {
      title: "Content Moderating & Management",
      icon: <MdContentPasteSearch size={50} />,
      hoverIcon: <MdContentPasteSearch size={70} color="#ffffff" />,
      description: [
        "Ensure content compliance with guidelines.",
        "Manage user-generated content effectively.",
        "Real-time moderation and feedback.",
      ],
    },
    {
      title: "Supply Chain Management",
      icon: <MdOutlineConnectingAirports size={50} />,
      hoverIcon: <MdOutlineConnectingAirports size={70} color="#ffffff" />,
      description: [
        "Optimize logistics and delivery timelines.",
        "Vendor and inventory management.",
        "Real-time tracking and reporting.",
      ],
    },
    {
      title: "Research & Analytics",
      icon: <GiArchiveResearch size={50} />,
      hoverIcon: <GiArchiveResearch size={70} color="#ffffff" />,
      description: [
        "In-depth market research.",
        "Custom analytics dashboards.",
        "Competitive benchmarking.",
      ],
    },
  ];

  return (
    <div className="bpo-section">
      {/* Pass the rotating text array and a fixed title to Banner */}
      <Banner rotateTextArray={rotateTextArray} fixedHeading="BPO Services" />
      <Container className="bpo-container my-5">
        <h2>Our BPO Services</h2>
        <Row className="bpo-row">
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card
                className="bpo-card text-center"
                onMouseEnter={() => setHoveredTitle(service.title)}
                onMouseLeave={() => setHoveredTitle("BPO Services")}
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
                  <Card.Title className="bpo-card-title">{service.title}</Card.Title>
                  {hoveredTitle === service.title && (
                    <ul className="bpo-card-description">
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

export default BPO;
