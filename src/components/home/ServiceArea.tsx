import React from "react";

export default function ServiceArea() {
  return (
    <>
      <section id="services" className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-2s">
                {/* <i className="ri-arrow-right-up-line"></i> */}
                <h5>01</h5>
                <h4>Content Creation</h4>
                <p>
                  Bringing cinematic expertise to every project. From concept
                  development to filming and post-production.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-4s">
                {/* <i className="ri-arrow-right-up-line"></i> */}
                <h5>02</h5>
                <h4>Cinematography</h4>
                <p>
                  {" "}
                  Creating cinematic compositions with expert lighting, camera
                  techniques, and storytelling.From films and commercials to
                  music videos and documentaries.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-6s">
                {/* <i className="ri-arrow-right-up-line"></i> */}
                <h5>03</h5>
                <h4>Filmmaking</h4>
                <p>
                I thrive in both independent and commercial productions, collaborating with diverse teams to bring creative ideas to life.
                </p>
              </div>
            </div>

            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-8s">
                {/* <i className="ri-arrow-right-up-line"></i> */}
                <h5>04</h5>
                <h4>Social Media Manegment</h4>
                <p>
                  Blend of strategic thinking and artistic finesse to craft a
                  visual identity that goes beyond aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
