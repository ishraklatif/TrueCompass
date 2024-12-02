import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import TrackVisibility from 'react-on-screen';
import portfolioImage from '../assets/img/portfolio.jpg'; // Ensure the path is correct

// Memoized Banner Component
export const Banner = React.memo(({ rotateTextArray, fixedHeading, showSubtext }) => {
  const period = 2000;

  // State Management for Rotating Text
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // Memoized Computed Text
  const computedText = useMemo(() => rotateTextArray[loopNum % rotateTextArray.length], [loopNum, rotateTextArray]);

  // Optimized useEffect for Rotating Text
  useEffect(() => {
    const tick = () => {
      const updatedText = isDeleting
        ? computedText.substring(0, text.length - 1)
        : computedText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === computedText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
        setDelta(500);
      }
    };

    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [text, isDeleting, computedText, delta]);

  // Render Component
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility partialVisibility>
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
                      <ul>
                        <li>IT Enabled Services (ITES)</li>
                        <li>BPO Services</li>
                        <li>Outsourcing Services</li>
                        <li>PR Management Services</li>
                        <li>Tech Services</li>
                      </ul>
                    </div>
                  )}
                  <LinkContainer to="/about">
                    <img
                      src={portfolioImage}
                      alt="Portfolio Highlights"
                      className="portfolio-display"
                    />
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <button className="banner-contact-btn">Contact Us</button>
                  </LinkContainer>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default Banner;
