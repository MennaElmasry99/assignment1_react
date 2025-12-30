import React from "react";
import "./portfolio.css";
import portfolio1 from "../../assets/poert1.png";
import portfolio2 from "../../assets/port2.png";
import portfolio3 from "../../assets/port3.png";
function Portfolio() {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center fw-bold mt-4">PORTFOLIO COMPONENT</h2>
        <div className="lines d-flex justify-content-between align-items-center mt-3">
          <div className="left"></div>
          <i class="fa-solid fa-star mx-2"></i>
          <div className="right"></div>
        </div>

        <div className="row my-5 g-4">
          <div className="col-md-4 ">
            <div className="inner rounded-3 overflow-hidden  position-relative">
              <img src={portfolio1} alt="portfolio1" className="w-100" />
              <div className="layer text-center d-flex justify-content-center align-items-center position-absolute rounded-3 overflow-hidden top-0 bottom-0 start-0 end-0 w-100 ">
                <i class="fa-solid fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="inner rounded-3 overflow-hidden  position-relative">
              <img src={portfolio2} alt="portfolio2" className="w-100" />
              <div className="layer text-center d-flex justify-content-center align-items-center position-absolute rounded-3 overflow-hidden top-0 bottom-0 start-0 end-0 w-100 ">
                <i class="fa-solid fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="inner rounded-3 overflow-hidden  position-relative">
              <img src={portfolio3} alt="portfolio3" className="w-100" />
              <div className="layer text-center d-flex justify-content-center align-items-center position-absolute rounded-3 overflow-hidden top-0 bottom-0 start-0 end-0 w-100 ">
                <i class="fa-solid fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="inner rounded-3 overflow-hidden  position-relative">
              <img src={portfolio1} alt="portfolio1" className="w-100" />
              <div className="layer text-center d-flex justify-content-center align-items-center position-absolute rounded-3 overflow-hidden top-0 bottom-0 start-0 end-0 w-100 ">
                <i class="fa-solid fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="inner rounded-3 overflow-hidden  position-relative">
              <img src={portfolio2} alt="portfolio2" className="w-100" />
              <div className="layer text-center d-flex justify-content-center align-items-center position-absolute rounded-3 overflow-hidden top-0 bottom-0 start-0 end-0 w-100 ">
                <i class="fa-solid fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="inner rounded-3 overflow-hidden  position-relative">
              <img src={portfolio3} alt="portfolio3" className="w-100" />
              <div className="layer text-center d-flex justify-content-center align-items-center position-absolute rounded-3 overflow-hidden top-0 bottom-0 start-0 end-0 w-100 ">
                <i class="fa-solid fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
