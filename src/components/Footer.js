import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img1 from '../assets/img/BASIS-1.webp';
import img2 from '../assets/img/BTRC-1.webp';
import img3 from '../assets/img/Bacco-1.webp';

function Footer() {
  return (
    <footer>
      <Container fluid className="footer-container text-light py-4">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="footer-left mb-3">
            <p><strong>Address:</strong> BTA Tower (14th Floor), 29 Kemal Ataturk Avenue, C/A Road No. 17, Dhaka 1213</p>
            <p><strong>Phone:</strong> +880-1670232908</p>
            <p><strong>Email:</strong> <a href="mailto:truecompassbd@gmail.com" className="text-light">truecompassbd@gmail.com</a></p>
            <div className="social-icons mt-3">
              <a href="#facebook" className="text-light me-3"><FaFacebookSquare size={25} /></a>
              <a href="#twitter" className="text-light me-3"><RiTwitterXFill size={25} /></a>
              <a href="#instagram" className="text-light"><FaInstagram size={25} /></a>
            </div>
          </div>
          <div className="footer-right text-center">
            <p>© 2024 True Compass Ltd. All rights reserved.</p>
            <Link to="/terms">
              <Button variant="outline-light" className="mt-2">Terms & Conditions</Button>
            </Link>
            <div className="footer-logos text-center mt-4">
          <img src={img1} alt="BASIS Logo" className="footer-logo" />
          <img src={img2} alt="BTRC Logo" className="footer-logo" />
          <img src={img3} alt="BACCO Logo" className="footer-logo" />
        </div>
          </div>
        </div>
        
      </Container>
    </footer>
  );
}

export default Footer;
