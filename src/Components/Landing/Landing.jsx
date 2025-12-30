import React from "react";
import logo from "../../assets/avataaars.svg";
import "./landing.css";
function Landing() {
  return (
    <>
      <div className="main-landing-page w-100 py-5 ">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center flex-column ">
            <img src={logo} alt="avatar-img" className="" />
            <h1 className="text-white mt-4 fw-bold">START FRAMEWORK</h1>
            <div className="lines-star d-flex justify-content-between align-items-center mt-3">
              <div className="left-line"></div>
              <i class="fa-solid fa-star mx-2 text-white"></i>
              <div className="right-line"></div>
            </div>
            <p className="text-white mt-4">Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
