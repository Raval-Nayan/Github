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
            <NavLink to="/order" className="nav-link">
              <div className="section-item-flex">
                <div className="width-part">
                  <img className="img-fluid" src={img1} alt="nayan"></img>{" "}
                </div>
                <div className="width-part">
                  <h5 className=" text-section">Order</h5>
                </div>
              </div>
            </NavLink>
          </div>

          {/* box2 */}
          <div className="boxs-style">
            <NavLink to="/attendance" className="nav-link">
              <div className="section-item-flex">
                <div className="width-part">
                  <img className=" img-fluid" src={img2} alt="nayan"></img>{" "}
                </div>
                <div className="width-part">
                  <h5 className="  text-section">Attendance</h5>
                </div>
              </div>
            </NavLink>
          </div>

          {/* box3 */}

          <div className="boxs-style">
            <NavLink to="/employee" className="nav-link">
              <div className="section-item-flex mt-2">
                <div className="width-part">
                  <img className=" img-fluid " src={img3} alt="nayan"></img>{" "}
                </div>
                <div className="width-part">
                  <h5 className=" text-section">Employee</h5>
                </div>
              </div>
            </NavLink>
          </div>

          {/* box-4 */}
          <NavLink to="/visitor" className="nav-link">
            <div className="boxs-style">
              <div className="section-item-flex">
                <div className="width-part">
                  <img className="img-fluid" src={img4} alt="nayan"></img>
                </div>
                <div className="width-part">
                  <h5 className=" text-section">Visitor</h5>
                </div>
              </div>
            </div>
          </NavLink>

          {/* box5 */}
          <NavLink to="/ginniebox" className="nav-link">
            <div className="boxs-style">
              <div className="section-item-flex">
                <div className="width-part">
                  <img className=" img-fluid" src={img5} alt="nayan"></img>
                </div>
                <div className="width-part">
                  <h5 className=" text-section">Ginnie Box</h5>
                </div>
              </div>
            </div>
          </NavLink>

          {/* box6 */}
          <NavLink to="/product" className="nav-link">
            {" "}
            <div className="boxs-style">
              <div className="section-item-flex">
                <div className="width-part">
                  {" "}
                  <img className=" img-fluid" src={img6} alt="nayan"></img>
                </div>
                <div className="width-part">
                  {" "}
                  <h5 className=" text-section">Product</h5>
                </div>
              </div>
            </div>
          </NavLink>

          {/* box7 */}
          <NavLink to="/leaverequest" className="nav-link">
            <div className="boxs-style">
              <div className="section-item-flex  ">
                <div className="width-part">
                  <img className=" img-fluid" src={img7} alt="nayan"></img>
                </div>
                <div className="width-part">
                  {" "}
                  <h5 className="text-section">Leave Request</h5>
                </div>
              </div>
            </div>
          </NavLink>

          {/* box8 */}
          <NavLink to="/category" className="nav-link">
            {" "}
            <div className="boxs-style">
              <div className="section-item-flex ">
                <div className="width-part">
                  <img className=" img-fluid  " src={img8} alt="nayan"></img>
                </div>
                <div className="width-part">
                  <h5 className="  text-section">Category</h5>
                </div>
              </div>
            </div>
          </NavLink>

          {/* box9 */}
          <NavLink to="/subcategory" className="nav-link">
            <div className="boxs-style">
              <div className="section-item-flex">
                <div className="width-part">
                  <img className=" img-fluid" src={img9} alt="nayan"></img>
                </div>
                <div className="width-part">
                  {" "}
                  <h5 className=" text-section">Sub Category</h5>
                </div>
              </div>
            </div>
          </NavLink>

          {/* box10 */}
          <NavLink to="/message" className="nav-link">
            <div className="boxs-style">
              <div className="section-item-flex">
                <div className="width-part">
                  {" "}
                  <img className=" img-fluid" src={img10} alt="nayan"></img>
                </div>
                <div className="width-part">
                  <h5 className=" text-section">Message</h5>
                </div>
              </div>
            </div>
          </NavLink>

          {/* box11 */}
          <NavLink to="/complaint" className="nav-link">
            <div className="boxs-style">
              <div className="section-item-flex">
                <div className="width-part">
                  {" "}
                  <img className=" img-fluid" src={img11} alt="nayan"></img>
                </div>
                <div className="width-part">
                  <h5 className="  text-section">Complaint</h5>
                </div>
              </div>
            </div>
          </NavLink>

          {/* box12 */}
          <NavLink to="/report" className="nav-link">
            <div className="boxs-style">
              <div className="section-item-flex">
                <div className="width-part">
                  {" "}
                  <img className=" img-fluid" src={img12} alt="nayan"></img>
                </div>
                <div className="width-part">
                  <h5 className=" text-section">Report</h5>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Section;
