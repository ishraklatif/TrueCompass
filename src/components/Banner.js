import React, { useEffect, useState, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = React.memo(() => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  // Define the toRotate array with useMemo for performance optimization
  const toRotate = useMemo(() => [
    "IT Enabled Services (ITES)", 
    "Outsourcing Services", 
    "BPO Services", 
    "Tech Services", 
    "PR Management"
  ], []);

  useEffect(() => {
    if (!toRotate.length) return;

    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
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
  }, [text, delta, isDeleting, loopNum, toRotate]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? 'animate__animated animate__fadeIn' : ''}
                >
                  <h3>True Compass</h3>
                  <h1>
                    <span
                      className="txt-rotate"
                      data-period="1000"
                      data-rotate={JSON.stringify(toRotate)}
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
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
