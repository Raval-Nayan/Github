import React from "react";

import img from "./img/image 13.png";
import img1 from "./img/Develop Your Business with Care For Each.png";
import { NavLink } from "react-router-dom";
import "./css/herosection.css";

// import img2 from "./img/image 20.png";

const Herosection = () => {
  return (
    <>
      <div className="container-fluid  gx-0">
        {/* hero section */}
        <div className="back-color w-100 ">
          <div className="hero-box">
            <div className="w-40 px-2 care-for">
              <img className="img-fluid img-size" src={img} alt="nayan"></img>
              <h1 className="mt-3 w-100 care-for-each  text--hero">
                CARE FOR EACH
              </h1>
            </div>
            <div
              className="w-40 d-flex align-items-center"
              style={{ justifyContent: "end" }}
            >
              <img
                className="img-fluid care-imgess "
                src={img1}
                alt="nayan"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid gx-0">
        <div className="img---box  ">
          <div className="d-flex flex-column login----box text-center p-3 ">
            <div className="">
              <h2 className="text-center login-text">Login</h2>

              <div className="d-flex flex-column  ">
                <input
                  className="form-control input "
                  type="email mt-2"
                  placeholder="Email Id"
                ></input>
                <div className="eye-passwords">
                  <input
                    className="mt-md-2 form-control input"
                    type="password mt-2"
                    placeholder="Password"
                  ></input>
                  <i class="fa-solid fa-eye-slash eye-absulate"></i>
                </div>
              </div>

              <NavLink to="/dashbord" className="nav-link">
                <button className="btn btn-primary  w-100 login-button">
                  Log in
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
