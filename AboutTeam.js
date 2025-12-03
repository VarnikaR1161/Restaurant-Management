import React from "react";

const AboutTeam = () => {
  const chefs = [
    { name: "Gordon Ramsay", role: "Head Chef", img: "team-1.jpg" },
    { name: "Christina Wilson", role: "Sous Chef", img: "team-2.jpg" },
    { name: "Massimo Bottura", role: "Pastry Chef", img: "team-3.jpg" },
    { name: "Dominique Crenn", role: "Executive Chef", img: "team-4.jpg" }
  ];

  return (
    <>
      <style>{`
        .section-title {
          font-size: 18px;
          color: #fea116;
          font-family: 'Pacifico', cursive;
        }
        .text-primary {
          color: #fea116 !important;
        }
        .fw-normal {
          font-weight: 400 !important;
        }
        .btn-primary {
          background-color: #fea116;
          border-color: #fea116;
        }
        .btn-primary:hover {
          background-color: #e69500;
          border-color: #e69500;
        }
        .btn-square {
          width: 36px;
          height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
        }
        .team-item {
          background: #fff;
          transition: 0.3s;
          border: 1px solid #f0f0f0;
          box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        }
        .team-item:hover {
          transform: translateY(-5px);
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

      {/* Main Section Wrapper */}
      <div className="py-5">

        {/* About Section */}
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-100 wow zoomIn" src="about-1.jpg" alt="about-1" />
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-75 wow zoomIn" src="about-2.jpg" alt="about-2" style={{ marginTop: "25%" }} />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid rounded w-75 wow zoomIn" src="about-3.jpg" alt="about-3" />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid rounded w-100 wow zoomIn" src="about-4.jpg" alt="about-4" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="section-title text-start text-primary fw-normal">About Us</h5>
              <h1 className="mb-4">
                Welcome to <i className="fa fa-utensils text-primary me-2"></i>Taco Street
              </h1>
              <p className="mb-4">
                Welcome to Restoran, where passion meets flavor! Nestled in the heart of the city,
                our restaurant is dedicated to offering an unforgettable dining experience through a 
                fusion of authentic recipes, fresh ingredients, and warm hospitality.
              </p>
              <p className="mb-4">
                Since our founding, we’ve believed that great food brings people together. 
                Our talented chefs craft each dish with care, blending tradition and innovation to delight your taste buds. 
                Whether you're enjoying a cozy dinner, a family celebration, or a casual lunch, Restoran is the perfect place
                to indulge in delicious meals and create lasting memories.
                Come hungry, leave happy — we can't wait to serve you!
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1 className="flex-shrink-0 display-5 text-primary mb-0">15</h1>
                    <div className="ps-4">
                      <p className="mb-0">Years of</p>
                      <h6 className="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1 className="flex-shrink-0 display-5 text-primary mb-0">50</h1>
                    <div className="ps-4">
                      <p className="mb-0">Popular</p>
                      <h6 className="text-uppercase mb-0">Master Chefs</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="container pt-5">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title text-primary fw-normal">Team Members</h5>
            <h1 className="mb-5">Our Master Chefs</h1>
          </div>
          <div className="row g-4">
            {chefs.map((chef, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.1 + index * 0.2}s`}
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <img
                      className="img-fluid"
                      src={chef.img}
                      alt={chef.name}
                    />
                  </div>
                  <h5 className="mb-0">{chef.name}</h5>
                  <small>{chef.role}</small>
                  <div className="d-flex justify-content-center mt-3">
                    <a className="btn btn-square btn-primary mx-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default AboutTeam;
