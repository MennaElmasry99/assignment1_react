import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer className=" w-100 text-white ">
        <div className="big-footer py-5">
          <div className="container py-4">
            <div className="row">
              <div className="col-md-4 px-4 text-center">
                <h5>LOCATION</h5>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
              <div className="col-md-4 px-4 text-center">
                <h5>AROUND THE WEB</h5>
                <ul className="social-icons d-flex  align-items-center mt-4 list-unstyled gap-3 justify-content-center">
                  <li><a href="#" className="text-white border border-1 p-2 rounded-circle"><i class="fa-brands fa-facebook"></i></a>
                  </li>
                 <li> <a
                    href="#"
                    className="text-white border border-1 p-2 rounded-circle"
                  >
                    <i class="fa-brands fa-twitter"></i>
                  </a></li>
                 <li> <a
                    href="#"
                    className="text-white border border-1 p-2 rounded-circle"
                  >
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a></li>
                  <li><a
                    href="#"
                    className="text-white border border-1 p-2 rounded-circle"
                  >
                    <i class="fa-solid fa-globe"></i>
                  </a>
                  </li>
                </ul>
              </div>
                <div className="col-md-4 px-4 text-center">
                <h5>ABOUT FREELANCER</h5>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
        <div className="small-footer text-center py-2">
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
