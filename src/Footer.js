import React from "react";
import "./css/footer.css";
import img from "./img/Strong India, Smart Business.png";
import img1 from "./img/image 21.png";
import vactor from "./img/Vector 2.png";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid gx-0 "
        style={{ backgroundColor: "#F8F8F8" }}
      >
        <div className="footer-box text-center">
          <h5 className="text-footer pt-5">MISSION CARE FOR EACH</h5>
          <img
            className="mt-2 img-fluid img-texts mb-4"
            src={img}
            alt="nayan"
          ></img>

          <div className="row gx-0 ms-md-4 mb-5  mt-3">
            <div className="col-md-3 col-12 ms-md-3 me-md-3  ">
              <img className="img-fluid  img-india " src={img1} alt="nayan" />
            </div>
            <div className="col-md-8 col-12 ">
              <p className=" ">
                E-commerce business ideas are ready to blow up in India due to
                multiple factors positively influencing the market. With this,
                comes a lot of compliance and regulations that need to be
                followed. This company would provide those solutions to other
                e-commerce companies so they could operate legally.
              </p>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <ul className="d-flex gap-4  copy-right-ab ">
            <li> Care For Each </li>
            <li style={{ listStyle: "circle" }}> Privacy Policy</li>
          </ul>

          <img className="img-fluid" src={vactor} alt="nayan"></img>
        </div>
      </div>
    </>
  );
};

export default Footer;
