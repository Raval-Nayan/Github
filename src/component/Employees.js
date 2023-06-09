import React from "react";
import "../css/dashbord.css";
import "../css/order.css";
import "../css/employee.css";

// import { NavLink } from "react-router-dom";

import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";
import "../css/orderdetails.css";
import user from "../img/user.png";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Employees = () => {
  return (
    <div className="container-fluid dash-back-color d-flex">
      {/* display flex , flex column */}
      <SiderBox></SiderBox>
      <div className="d-flex flex-column main">
        <SearchBox></SearchBox>
        <div>
          <small
            className="pt-2"
            style={{ color: "#7D8592", fontWeight: "400" }}
          >
            Welcome to Care For Each
          </small>
          <h2
            className="mt-1 mb-3"
            style={{
              color: " #091F57",
              fontWeight: "600",
              fontFamily: "Poppins",
            }}
          >
            Employees
          </h2>
          {/* div grid banavo */}
          <div className="postion">
            <div className="back-----color ">
              <div className="background d-flex">
                <img className="img-fluid" src={user} alt="nayan"></img>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                    <li>Contact No : +918743839834</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <button className="button-modify w-100">
                      <i class="fa-solid fa-phone"></i> <span>Call</span>
                    </button>
                    <button className="button-modify w-100 mt-2 mt-sm-0">
                      <i class="fa-solid fa-message"></i> <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* box2 */}
              <div className="background d-flex">
                <img className="img-fluid" src={user} alt="nayan"></img>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                    <li>Contact No : +918743839834</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <button className="button-modify w-100">
                      <i class="fa-solid fa-phone"></i> <span>Call</span>
                    </button>
                    <button className="button-modify w-100 mt-2 mt-sm-0">
                      <i class="fa-solid fa-message"></i> <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* box-3 */}
              <div className="background d-flex">
                <img className="img-fluid" src={user} alt="nayan"></img>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                    <li>Contact No : +918743839834</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <button className="button-modify w-100">
                      <i class="fa-solid fa-phone"></i> <span>Call</span>
                    </button>
                    <button className="button-modify w-100 mt-2 mt-sm-0">
                      <i class="fa-solid fa-message"></i> <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* box-4 */}
              <div className="background d-flex">
                <img className="img-fluid" src={user} alt="nayan"></img>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                    <li>Contact No : +918743839834</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <button className="button-modify w-100">
                      <i class="fa-solid fa-phone"></i> <span>Call</span>
                    </button>
                    <button className="button-modify w-100 mt-2 mt-sm-0">
                      <i class="fa-solid fa-message"></i> <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* box5 */}
              <div className="background d-flex">
                <img className="img-fluid" src={user} alt="nayan"></img>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                    <li>Contact No : +918743839834</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <button className="button-modify w-100">
                      <i class="fa-solid fa-phone"></i> <span>Call</span>
                    </button>
                    <button className="button-modify w-100 mt-2 mt-sm-0">
                      <i class="fa-solid fa-message"></i> <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* box 6 */}

              <div className="background d-flex">
                <img className="img-fluid" src={user} alt="nayan"></img>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                    <li>Contact No : +918743839834</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <button className="button-modify w-100">
                      <i class="fa-solid fa-phone"></i> <span>Call</span>
                    </button>
                    <button className="button-modify w-100 mt-2 mt-sm-0">
                      <i class="fa-solid fa-message"></i> <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* box7 */}
              <div className="background d-flex">
                <img className="img-fluid" src={user} alt="nayan"></img>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                    <li>Contact No : +918743839834</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <button className="button-modify w-100">
                      <i class="fa-solid fa-phone"></i> <span>Call</span>
                    </button>
                    <button className="button-modify w-100 mt-2 mt-sm-0">
                      <i class="fa-solid fa-message"></i> <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* box8 */}
              <div className="background d-flex">
                <img className="img-fluid" src={user} alt="nayan"></img>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                    <li>Contact No : +918743839834</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <button className="button-modify w-100">
                      <i class="fa-solid fa-phone"></i> <span>Call</span>
                    </button>
                    <button className="button-modify w-100 mt-2 mt-sm-0">
                      <i class="fa-solid fa-message"></i> <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* box 9 */}
              <div className="background d-flex">
                <img className="img-fluid" src={user} alt="nayan"></img>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                    <li>Contact No : +918743839834</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <button className="button-modify w-100">
                      <i class="fa-solid fa-phone"></i> <span>Call</span>
                    </button>
                    <button className="button-modify w-100 mt-2 mt-sm-0">
                      <i class="fa-solid fa-message"></i> <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* box10 */}
              <div className="background d-flex">
                <img className="img-fluid" src={user} alt="nayan"></img>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                    <li>Contact No : +918743839834</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <button className="button-modify w-100">
                      <i class="fa-solid fa-phone"></i> <span>Call</span>
                    </button>
                    <button className="button-modify w-100 mt-2 mt-sm-0">
                      <i class="fa-solid fa-message"></i> <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* box11 */}
              <div className="background d-flex">
                <img className="img-fluid" src={user} alt="nayan"></img>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                    <li>Contact No : +918743839834</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <button className="button-modify w-100">
                      <i class="fa-solid fa-phone"></i> <span>Call</span>
                    </button>
                    <button className="button-modify w-100 mt-2 mt-sm-0">
                      <i class="fa-solid fa-message"></i> <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* box12 */}
              <div className="background d-flex">
                <img className="img-fluid" src={user} alt="nayan"></img>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                    <li>Contact No : +918743839834</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <button className="button-modify w-100">
                      <i class="fa-solid fa-phone"></i> <span>Call</span>
                    </button>
                    <button className="button-modify w-100 mt-2 mt-sm-0">
                      <i class="fa-solid fa-message"></i> <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/addemployee">
              <button className="add-button mt-2" style={{ color: "white" }}>
                {" "}
                <span className="text "> Add Employee +</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
