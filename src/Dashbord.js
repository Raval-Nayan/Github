import React from "react";
import "./css/dashbord.css";

// import { NavLink } from "react-bootstrap";
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

import SearchBox from "./component/SearchBox";
import SiderBox from "./component/SiderBox";

import { NavLink } from "react-router-dom";

const Dashbord = () => {
  return (
    <>
      <div className="container-fluid dash-back-color d-flex">
        {/* display flex , flex column */}
        <SiderBox></SiderBox>
        <div className="d-flex flex-column main">
          <SearchBox></SearchBox>
          <div>
            <small
              className="pt-2 ms-2 mb-2"
              style={{ color: "#7D8592", fontWeight: "400" }}
            >
              Welcome to Care For Each
            </small>
            <div className="order-box">
              <h2
                className="mt-2 mb-3 ms-3"
                style={{
                  color: " #091F57",
                  fontWeight: "600",
                  fontFamily: "Poppins",
                }}
              >
                Dash Board
              </h2>
            </div>

            <div className="white---color">
              <div className="row ">
                <div className="boxs--style col-lg-3 col-md-4 col-sm-6 col-12 ">
                  <NavLink to="/order">
                    <div className="text-center ">
                      <img className=" imagess" src={img1} alt="nayan"></img>
                      <h5 className=" text-section ms-2">Order</h5>
                    </div>
                  </NavLink>
                </div>
                {/* box2 */}
                <div className="boxs--style col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="text-center">
                    <img className="  imagess" src={img2} alt="nayan"></img>
                    <h5 className=" text-section">Attendance</h5>
                  </div>
                </div>
                {/* box3 */}
                <div className="boxs--style col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="text-center ">
                    <img className="me-2  imagess" src={img3} alt="nayan"></img>
                    <h5 className="ms4 text-section">Employee</h5>
                  </div>
                </div>

                {/* box-4 */}
                <div className="boxs--style col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="text-center">
                    <img className="imagess" src={img4} alt="nayan"></img>
                    <h5 className="ms-2 text-section">Visitor</h5>
                  </div>
                </div>

                {/* box5 */}
                <div className="boxs--style  col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="text-center">
                    <img className="  imagess" src={img5} alt="nayan"></img>
                    <h5 className=" text-section">Ginnie Box</h5>
                  </div>
                </div>

                {/* box6 */}
                <div className="boxs--style col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="text-center ">
                    <img className="pt-1  imagess" src={img6} alt="nayan"></img>
                    <h5 className="ms-3 text-section">Product</h5>
                  </div>
                </div>

                {/* box7 */}
                <div className="boxs--style col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="text-center">
                    <img className="  imagess" src={img7} alt="nayan"></img>
                    <h5 className=" text-section">Leave Request</h5>
                  </div>
                </div>

                {/* box8 */}
                <div className="boxs--style col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="text-center">
                    <img className=" imagess" src={img8} alt="nayan"></img>
                    <h5 className=" text-section">Category</h5>
                  </div>
                </div>

                {/* box9 */}
                <div className="boxs--style col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className=" text-center">
                    <img className="ms-5 imagess" src={img9} alt="nayan"></img>
                    <h5 className="text-section">Sub Category</h5>
                  </div>
                </div>

                {/* box10 */}
                <div className="boxs--style col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className=" text-center">
                    <img className="  imagess" src={img10} alt="nayan"></img>
                    <h5 className=" text-section">Message</h5>
                  </div>
                </div>

                {/* box11 */}
                <div className="boxs--style col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className=" text-center">
                    <img className="  imagess" src={img11} alt="nayan"></img>
                    <h5 className=" text-section">Complaint</h5>
                  </div>
                </div>

                {/* box12 */}
                <div className="boxs--style col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className=" text-center">
                    <img className="  imagess " src={img12} alt="nayan"></img>
                    <h5 className=" text-section text-center">Report</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
