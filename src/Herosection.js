import React from "react";
import "./css/herosection.css";
import img from "./img/image 13.png";
import img1 from "./img/Develop Your Business with Care For Each.png";
import { NavLink } from "react-router-dom";

// import img2 from "./img/image 20.png";

const Herosection = () => {
  return (
    <>
      <div className="container-fluid  gx-0">
        {/* hero section */}
        <div className="back-color w-100 ">
          <div className="hero-box">
            <div className="w-40 px-2">
              <img className="img-fluid img-size" src={img} alt="nayan"></img>
              <h1 className="mt-3 w-100 care-fore">CARE FOR EACH</h1>
            </div>
            <div className="w-40 text-end px-2">
              <img
                className="img-fluid img-size2 "
                src={img1}
                alt="nayan"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid gx-0">
        <div className="img---box  w-100">
          <div className="d-flex flex-column login----box text-center p-3 mx-3">
            <div>
              <div className="text-center">
                <h2>Login</h2>
              </div>
              <div className="d-flex flex-column mt-2 ">
                <input
                  className="mt-2 form-control mx-2 mt-2 "
                  type="email mt-2"
                  placeholder="Email Id"
                ></input>
                <input
                  className="mt-2 form-control mx-2 my-2"
                  type="password mt-2"
                  placeholder="Password"
                ></input>
              </div>
              <div className="mb-2">
                <NavLink to="/dashbord">
                  <button className="btn btn-primary mt-2 w-100 mx-2 my-2">
                    Log in
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
