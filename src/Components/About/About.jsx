import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <section className="about-section text-white py-5">
        <div className="container  py-5 d-flex flex-column justify-content-center align-items-center gap-3">
          <h1 className="text-center fw-bold">ABOUT COMPONENT</h1>
          <div className="lines-star d-flex justify-content-between align-items-center mt-3">
            <div className="left-line"></div>
            <i class="fa-solid fa-star mx-2 text-white"></i>
            <div className="right-line"></div>
          </div>
            <div className="d-flex justify-content-center align-items-center gap-5 px-5 ">
            <div className="col-md-6 px-4 ms-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization
              </p>
            </div>
            <div className="col-md-6 px-4 me-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
