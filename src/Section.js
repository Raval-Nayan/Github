import React from "react";
import "./css/section.css";
import img1 from "./img/image 14.png";
import img2 from "./img/image_2023_05_09T06_19_57_214Z 2.png";
import img3 from "./img/image 15.png";
import img4 from "./img/image 2.png";
import img5 from "./img/image_2023_05_09T06_19_57_214Z 3.png";
import img6 from "./img/image 1.png";
import img7 from "./img/image_2023_05_09T06_19_57_214Z 4.png";
import img8 from "./img/image 17.png";
import img9 from "./img/image 18.png";
import img10 from "./img/image_2023_05_09T06_19_57_214Z 2 (1).png";
import img11 from "./img/image 3.png";
import img12 from "./img/image 19.png";
import { NavLink } from "react-router-dom";

const Section = () => {
  return (
    <div className="container-fluid full-w-box gx-0">
      <div className="container center-w-box gx-0 ">
        <div className="grid-boxs">
          {/* box1 */}
          <div className="boxs-style ">
            <div className="d-flex ">
              <img className="me-2 img-fluid" src={img1} alt="nayan"></img>
              <NavLink to="/order">
                {" "}
                <h5 className="mt-4 text-section">Order</h5>
              </NavLink>
            </div>
          </div>

          {/* box2 */}
          <div className="boxs-style">
            <div className="d-flex">
              <img className="me-2 img-fluid" src={img2} alt="nayan"></img>
              <h5 className="mt-4 text-section">Attendance</h5>
            </div>
          </div>

          {/* box3 */}
          <div className="boxs-style">
            <div className="d-flex">
              <img className="me-2 img-fluid" src={img3} alt="nayan"></img>
              <h5 className="mt-4 text-section">Employee</h5>
            </div>
          </div>

          {/* box-4 */}
          <div className="boxs-style">
            <div className="d-flex">
              <img className="me-2 img-fluid" src={img4} alt="nayan"></img>
              <h5 className="mt-4 text-section">Visitor</h5>
            </div>
          </div>

          {/* box5 */}
          <div className="boxs-style">
            <div className="d-flex">
              <img className="me-2 img-fluid" src={img5} alt="nayan"></img>
              <h5 className="mt-4 text-section">Ginnie Box</h5>
            </div>
          </div>

          {/* box6 */}
          <div className="boxs-style">
            <div className="d-flex">
              <img className="me-2 img-fluid" src={img6} alt="nayan"></img>
              <h5 className="mt-4 text-section">Product</h5>
            </div>
          </div>

          {/* box7 */}
          <div className="boxs-style">
            <div className="d-flex">
              <img className="me-2 img-fluid" src={img7} alt="nayan"></img>
              <h5 className="mt-4 text-section">Leave Request</h5>
            </div>
          </div>

          {/* box8 */}
          <div className="boxs-style">
            <div className="d-flex">
              <img className="me-2 img-fluid" src={img8} alt="nayan"></img>
              <h5 className="mt-4 text-section">Category</h5>
            </div>
          </div>

          {/* box9 */}
          <div className="boxs-style">
            <div className="d-flex">
              <img className="me-2 img-fluid" src={img9} alt="nayan"></img>
              <h5 className="mt-4 text-section">Sub Category</h5>
            </div>
          </div>

          {/* box10 */}
          <div className="boxs-style">
            <div className="d-flex">
              <img className="me-2 img-fluid" src={img10} alt="nayan"></img>
              <h5 className="mt-4 text-section">Message</h5>
            </div>
          </div>

          {/* box11 */}
          <div className="boxs-style">
            <div className="d-flex">
              <img className="me-2 img-fluid" src={img11} alt="nayan"></img>
              <h5 className="mt-4 text-section">Complaint</h5>
            </div>
          </div>

          {/* box12 */}
          <div className="boxs-style">
            <div className="d-flex">
              <img className="me-2 img-fluid" src={img12} alt="nayan"></img>
              <h5 className="mt-4 text-section">Report</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
