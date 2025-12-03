import React from 'react';
import './Footer.css'; // Optional: for custom styles
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { BiArrowToTop } from 'react-icons/bi';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          {/* Company Section */}
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
            <a className="btn btn-link" href="/AboutTeam">About Us</a>
            <a className="btn btn-link" href="/Contact">Contact Us</a>
            <a className="btn btn-link" href="/Service">Services</a>
            <a className="btn btn-link" href="#">Privacy Policy</a>
            <a className="btn btn-link" href="#">Terms & Condition</a>
          </div>

          {/* Contact Section */}
<div className="col-lg-3 col-md-6" style={{ color: "#e9eff4ff" }}>
  <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
  <p className="mb-2" style={{ color: 'white' }}>
    <FaMapMarkerAlt className="me-3" />
    123 Street, New York, USA
  </p>
  <p className="mb-2" style={{ color: 'white' }}>
    <FaPhoneAlt className="me-3" />
    +012 345 67890
  </p>
  <p className="mb-2" style={{ color: 'white' }}>
    <FaEnvelope className="me-3" />
    info@example.com
  </p>
  <div className="d-flex pt-2">
    <a className="btn btn-outline-dark btn-social me-2" href="#"><FaTwitter /></a>
    <a className="btn btn-outline-dark btn-social me-2" href="#"><FaFacebookF /></a>
    <a className="btn btn-outline-dark btn-social me-2" href="#"><FaYoutube /></a>
    <a className="btn btn-outline-dark btn-social" href="#"><FaLinkedinIn /></a>
  </div>
</div>


          <div className="col-lg-3 col-md-6">
  <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
    Opening Hours
  </h4>
  <div>
    <h5 style={{ color: 'white' }}>Monday - Saturday</h5>
    <p style={{ color: 'white' }}>09AM - 09PM</p>
    <h5 style={{ color: 'white' }}>Sunday</h5>
    <p style={{ color: 'white' }}>10AM - 08PM</p>
  </div>
</div>


          {/* Newsletter */}
          {/* <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
          </div> */}
        </div>
      </div>

      {/* Copyright */}
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0" style={{ color: "#eef3f7ff"}}>
              &copy @ All Right Reserved.
              <br />
              {/* Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
              <br /><br />
              Distributed By <a className="border-bottom" href="https://themewagon.com" target="_blank" rel="noreferrer">ThemeWagon</a> */}
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="#">Home</a>
                <a href="#">Cookies</a>
                <a href="#">Help</a>
                <a href="#">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <BiArrowToTop />
      </a>
    </div>
  );
};

export default Footer;
