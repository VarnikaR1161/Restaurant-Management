import React from "react";

const Contact = () => {
  return (
    <div className="contact-section py-5">
      <style>{`
        .contact-section {
          font-family: Arial, sans-serif;
        }
        .section-title {
          font-size: 18px;
          font-weight: normal;
          margin-bottom: 10px;
          color: #FEA116;
          font-family: 'Pacifico', cursive;
        }
        .text-primary {
          color: #FEA116 !important;
        }
        .fw-normal {
          font-weight: 400 !important;
        }
        .ff-secondary {
          font-family: 'Pacifico', cursive;
        }
        .form-control,
        .btn {
          border-radius: 10px;
        }
        .form-floating label {
          color: #6c757d;
        }
        .btn-primary {
          background-color: #FEA116;
          border-color: #FEA116;
        }
        .btn-primary:hover {
          background-color: #e68a00;
          border-color: #e68a00;
        }
        .wow {
          animation: fadeInUp 1s ease-in-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title text-center text-primary fw-normal">
            Contact Us
          </h5>
          <h1 className="mb-5">Contact For Any Query</h1>
        </div>
        <div className="row g-4">
          <div className="col-12">
            <div className="row gy-4">
              <div className="col-md-4">
                <h5 className="section-title text-start text-primary fw-normal">Booking</h5>
                <p><i className="fa fa-envelope-open text-primary me-2"></i>book@example.com</p>
              </div>
              <div className="col-md-4">
                <h5 className="section-title text-start text-primary fw-normal">General</h5>
                <p><i className="fa fa-envelope-open text-primary me-2"></i>info@example.com</p>
              </div>
              <div className="col-md-4">
                <h5 className="section-title text-start text-primary fw-normal">Technical</h5>
                <p><i className="fa fa-envelope-open text-primary me-2"></i>tech@example.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
            <iframe
              className="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameBorder="0"
              style={{ minHeight: "350px", border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"
            ></iframe>
          </div>
          <div className="col-md-6">
            <div className="wow fadeInUp" data-wow-delay="0.2s">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "150px" }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
