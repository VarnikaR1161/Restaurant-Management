import React from "react";

const Services = () => {
  const services = [
    {
      icon: "fa-user-tie",
      title: "Master Chefs",
      delay: "0.1s",
    },
    {
      icon: "fa-utensils",
      title: "Quality Food",
      delay: "0.3s",
    },
    {
      icon: "fa-cart-plus",
      title: "Online Order",
      delay: "0.5s",
    },
    {
      icon: "fa-headset",
      title: "24/7 Service",
      delay: "0.7s",
    },
    
  ];

  return (
    <>
      {/* Inline Style for Orange Color */}
      <style>
        {`
          .text-orange {
            color: orange !important;
          }
        `}
      </style>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-orange fw-normal">
              Our Services
            </h5>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay={service.delay}
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i
                      className={`fa fa-3x ${service.icon} text-orange mb-4`}
                    ></i>
                    <h5>{service.title}</h5>
                    <p>
                      We offer the best quality in this category, ensuring
                      customer satisfaction and a great experience every time.
                    </p>
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

export default Services;
