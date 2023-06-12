import React from "react";
import "./css/footer.css";
import img from "./img/Strong India, Smart Business.png";
import img1 from "./img/image 21.png";
import vactor from "./img/Vector 2.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid gx-0 ">
        <div className="footer-box text-center">
          <h5 className="text-footer pt-5">MISSION CARE FOR EACH</h5>
          <img
            className="mt-2 img-fluid img-texts mb-4"
            src={img}
            alt="nayan"
          ></img>

          <div className="footer-grid mx-5 mt-3 text-center ">
            <div className=" img-tetx">
              {" "}
              <img
                className="img-fluid  img-india   "
                src={img1}
                alt="nayan"
              ></img>
            </div>
            <div className="p-div">
              {" "}
              <p className="w-100 footer-p-text">
                E-commerce business ideas are ready to blow up in India due to
                multiple factors positively influencing the market. With this,
                comes a lot of compliance and regulations that need to be
                followed. This company would provide those solutions to other
                e-commerce companies so they could operate legally.
              </p>
            </div>
          </div>

          <div className="copy-right">
            <img className="img-fluid" src={vactor} alt="nayan"></img>

            <ul className="d-flex gap-4  copy-right-ab ">
              <li> Care For Each </li>
              <li style={{ listStyle: "circle" }}> Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
