import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Certificate from "../components/Certificate";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { TbBrandDiscord, TbEmergencyBed, TbBrandAdobe } from "react-icons/tb";
import { HiSpeakerphone } from "react-icons/hi";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineContactEmergency } from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl";

function PRM() {
  // Define the rotating text array for the Banner component
  const rotateTextArray = [
    "Brand Positioning & Messaging",
    "Reputation Management",
    "Crisis Communication",
    "Branding Strategy",
    "Social Media PR",
    "Content Creation & Storytelling",
    "Event PR & Promotions",
    "Crisis Management & Communication",
    "Internal Communication & Employee Engagement",
  ];

  const [hoveredTitle, setHoveredTitle] = useState("PR Management Services");

  // Define PRM services data
  const services = [
    {
      title: "Brand Positioning & Messaging",
      icon: <TbBrandDiscord size={50} />,
      hoverIcon: <TbBrandDiscord size={70} color="#ffffff" />,
      description: [
        "Craft compelling brand narratives.",
        "Define unique brand positioning.",
        "Ensure consistent messaging.",
      ],
    },
    {
      title: "Reputation Management",
      icon: <HiSpeakerphone size={50} />,
      hoverIcon: <HiSpeakerphone size={70} color="#ffffff" />,
      description: [
        "Monitor brand reputation.",
        "Address negative feedback effectively.",
        "Enhance public perception.",
      ],
    },
    {
      title: "Crisis Communication",
      icon: <TbEmergencyBed size={50} />,
      hoverIcon: <TbEmergencyBed size={70} color="#ffffff" />,
      description: [
        "Develop crisis management plans.",
        "Handle public relations during crises.",
        "Ensure brand integrity in tough times.",
      ],
    },
    {
      title: "Branding Strategy",
      icon: <TbBrandAdobe size={50} />,
      hoverIcon: <TbBrandAdobe size={70} color="#ffffff" />,
      description: [
        "Comprehensive branding strategies.",
        "Enhance brand visibility.",
        "Drive long-term brand growth.",
      ],
    },
    {
      title: "Social Media PR",
      icon: <IoShareSocialOutline size={50} />,
      hoverIcon: <IoShareSocialOutline size={70} color="#ffffff" />,
      description: [
        "Leverage social media platforms.",
        "Create engaging social campaigns.",
        "Manage social media crises.",
      ],
    },
    {
      title: "Content Creation & Storytelling",
      icon: <FaBookReader size={50} />,
      hoverIcon: <FaBookReader size={70} color="#ffffff" />,
      description: [
        "Produce captivating content.",
        "Tell engaging brand stories.",
        "Boost audience engagement.",
      ],
    },
    {
      title: "Event PR & Promotions",
      icon: <MdOutlineEmojiEvents size={50} />,
      hoverIcon: <MdOutlineEmojiEvents size={70} color="#ffffff" />,
      description: [
        "Organize high-impact events.",
        "Promote events through PR channels.",
        "Ensure event success and coverage.",
      ],
    },
    {
      title: "Crisis Management & Communication",
      icon: <MdOutlineContactEmergency size={50} />,
      hoverIcon: <MdOutlineContactEmergency size={70} color="#ffffff" />,
      description: [
        "Address emergencies effectively.",
        "Communicate with stakeholders during crises.",
        "Mitigate damage to brand reputation.",
      ],
    },
    {
      title: "Internal Communication & Employee Engagement",
      icon: <SlEnvolopeLetter size={50} />,
      hoverIcon: <SlEnvolopeLetter size={70} color="#ffffff" />,
      description: [
        "Enhance internal communication.",
        "Boost employee morale and engagement.",
        "Foster a positive work culture.",
      ],
    },
  ];

  return (
    <div className="prm-section">
      {/* Pass the rotating text array and fixed title to Banner */}
      <Banner rotateTextArray={rotateTextArray} fixedHeading="PR Management Services" />
      <Container className="prm-container my-5">
        <h2>Our PR Management Services</h2>
        <Row className="prm-row">
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card
                className="prm-card text-center"
                onMouseEnter={() => setHoveredTitle(service.title)}
                onMouseLeave={() => setHoveredTitle("PR Management Services")}
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
                  <Card.Title className="prm-card-title">{service.title}</Card.Title>
                  {hoveredTitle === service.title && (
                    <ul className="prm-card-description">
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

export default PRM;
