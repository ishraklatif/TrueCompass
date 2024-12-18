import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import TrackVisibility from 'react-on-screen';

import bannerImage from '../assets/img/banner.webp'; // Import the banner image

export const Banner = React.memo(({ rotateTextArray, fixedHeading, showSubtext }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    if (!rotateTextArray || !rotateTextArray.length) return;

    const tick = () => {
      const i = loopNum % rotateTextArray.length;
      const fullText = rotateTextArray[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
        setDelta(500);
      }
    };

    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum, rotateTextArray]);

  return (
    <section className="banner" id="home" style={{ backgroundImage: `url(${bannerImage})` }}> {/* Set background image */}
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h3>True Compass</h3>
                  <h1>
                    {fixedHeading || (
                      <span className="txt-rotate">
                        <span className="wrap">{text}</span>
                      </span>
                    )}
                  </h1>
                  {showSubtext && (
                    <div className="banner-subtext">
                      <h1>FIND YOUR SERVICES AND GET IN CONTACT</h1>
                      <h3>Get your outsourcing services with best profile and skills</h3>
                      <ul className="services-list">
                        <LinkContainer to="/services/ites">
                            <li>IT Enabled Services (ITES)</li>
                        </LinkContainer>
                        <LinkContainer to="/services/bpo">
                            <li>BPO Services</li>
                        </LinkContainer>
                        <LinkContainer to="/services/outs">
                            <li>Outsourcing Services</li>
                        </LinkContainer>
                        <LinkContainer to="/services/prm">
                            <li>PR Management Services</li>
                        </LinkContainer>
                        <LinkContainer to="/services/tech">
                            <li>Tech Services</li>
                        </LinkContainer>
                      </ul>
                    </div>
                  )}
                  <LinkContainer to="/contact">
                    <button className="custom-contact-btn">Free Consultation</button>
                  </LinkContainer>
                </div>
              )}
            </TrackVisibility>
          </Col>
          {/* Right Content */}
          <Col xs={12} md={5} className="d-flex justify-content-end">
           
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default Banner;
