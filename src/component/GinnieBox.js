import React from "react";
import "../css/dashbord.css";
import "../css/order.css";
import "../css/employee.css";
import "../css/orderdetails.css";

// import { NavLink } from "react-router-dom";

import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";
import "../css/orderdetails.css";
import user from "../img/user.png";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const GinnieBox = () => {
  return (
    <div className="container-fluid dash-back-color d-flex">
      {/* display flex , flex column */}
      <SiderBox></SiderBox>
      <div className="d-flex flex-column main">
        <SearchBox></SearchBox>
        <div className="box">
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
              Ginnie Box
            </h2>
            <div className="d-flex width----drop ">
              {/* btn 1  */}

              <select className=" select-box w-100 h-50">
                <option className="option-box">All</option>
                <option className="option-box">This Year</option>
                <option className="option-box">This Month</option>
                <option className="option-box">Today</option>
              </select>

              <select className=" select-box ms-2 w-100 h-50">
                <option className="option-box">abc</option>
                <option className="option-box">def</option>
                <option className="option-box">ghi</option>
                <option className="option-box">jkl</option>
                <option className="option-box">mno</option>
              </select>
            </div>
          </div>
          {/* div grid banavo */}

          <div className="postion">
            <div className="back-----color ">
              <NavLink to="/ginnieboxdetail " className="nav-link">
                <div className="background d-flex">
                  <div className="me-2">
                    <img className="img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="tetx-----div">
                    <ul className="p-0 m-0 mt-1">
                      <li>Name : salkjh</li>
                      <li>Company Name : WebEarl</li>
                      <li>Date : 01-01-2021</li>
                      <li>Email : skjhhfi@gmail.com</li>
                      <li>Contact No : 6789012345</li>
                      <li>Grand Total : ₹ 987978</li>
                    </ul>
                    <div className="d-sm-flex  m-0 p-0 ">
                      <div className="w-100 me-1">
                        <NavLink>
                          <button className="button-modify w-100 ">
                            <i class="fa-solid fa-phone"></i> <span>Call</span>
                          </button>
                        </NavLink>
                      </div>
                      <div className="w-100">
                        <NavLink to="">
                          <button className="button-modify w-100 mt-2 mt-sm-0">
                            <i class="fa-solid fa-message"></i>{" "}
                            <span>Message</span>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>

              {/* box2 */}
              <NavLink to="/ginnieboxdetail " className="nav-link">
                <div className="background d-flex">
                  <div className="me-2">
                    <img className="img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="tetx-----div">
                    <ul className="p-0 m-0 mt-1">
                      <li>Name : salkjh</li>
                      <li>Company Name : WebEarl</li>
                      <li>Date : 01-01-2021</li>
                      <li>Email : skjhhfi@gmail.com</li>
                      <li>Contact No : 6789012345</li>
                      <li>Grand Total : ₹ 987978</li>
                    </ul>
                    <div className="d-sm-flex  m-0 p-0 ">
                      <div className="w-100 me-1">
                        <NavLink>
                          <button className="button-modify w-100 ">
                            <i class="fa-solid fa-phone"></i> <span>Call</span>
                          </button>
                        </NavLink>
                      </div>
                      <div className="w-100">
                        <NavLink to="">
                          <button className="button-modify w-100 mt-2 mt-sm-0">
                            <i class="fa-solid fa-message"></i>{" "}
                            <span>Message</span>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
              {/* box-3 */}
              <NavLink to="/ginnieboxdetail " className="nav-link">
                <div className="background d-flex">
                  <div className="me-2">
                    <img className="img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="tetx-----div">
                    <ul className="p-0 m-0 mt-1">
                      <li>Name : salkjh</li>
                      <li>Company Name : WebEarl</li>
                      <li>Date : 01-01-2021</li>
                      <li>Email : skjhhfi@gmail.com</li>
                      <li>Contact No : 6789012345</li>
                      <li>Grand Total : ₹ 987978</li>
                    </ul>
                    <div className="d-sm-flex  m-0 p-0 ">
                      <div className="w-100 me-1">
                        <NavLink>
                          <button className="button-modify w-100 ">
                            <i class="fa-solid fa-phone"></i> <span>Call</span>
                          </button>
                        </NavLink>
                      </div>
                      <div className="w-100">
                        <NavLink to="">
                          <button className="button-modify w-100 mt-2 mt-sm-0">
                            <i class="fa-solid fa-message"></i>{" "}
                            <span>Message</span>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
              {/* box-4 */}
              <NavLink to="/ginnieboxdetail " className="nav-link">
                <div className="background d-flex">
                  <div className="me-2">
                    <img className="img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="tetx-----div">
                    <ul className="p-0 m-0 mt-1">
                      <li>Name : salkjh</li>
                      <li>Company Name : WebEarl</li>
                      <li>Date : 01-01-2021</li>
                      <li>Email : skjhhfi@gmail.com</li>
                      <li>Contact No : 6789012345</li>
                      <li>Grand Total : ₹ 987978</li>
                    </ul>
                    <div className="d-sm-flex  m-0 p-0 ">
                      <div className="w-100 me-1">
                        <NavLink>
                          <button className="button-modify w-100 ">
                            <i class="fa-solid fa-phone"></i> <span>Call</span>
                          </button>
                        </NavLink>
                      </div>
                      <div className="w-100">
                        <NavLink to="">
                          <button className="button-modify w-100 mt-2 mt-sm-0">
                            <i class="fa-solid fa-message"></i>{" "}
                            <span>Message</span>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
              {/* box5 */}
              <NavLink to="/ginnieboxdetail " className="nav-link">
                <div className="background d-flex">
                  <div className="me-2">
                    <img className="img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="tetx-----div">
                    <ul className="p-0 m-0 mt-1">
                      <li>Name : salkjh</li>
                      <li>Company Name : WebEarl</li>
                      <li>Date : 01-01-2021</li>
                      <li>Email : skjhhfi@gmail.com</li>
                      <li>Contact No : 6789012345</li>
                      <li>Grand Total : ₹ 987978</li>
                    </ul>
                    <div className="d-sm-flex  m-0 p-0 ">
                      <div className="w-100 me-1">
                        <NavLink>
                          <button className="button-modify w-100 ">
                            <i class="fa-solid fa-phone"></i> <span>Call</span>
                          </button>
                        </NavLink>
                      </div>
                      <div className="w-100">
                        <NavLink to="">
                          <button className="button-modify w-100 mt-2 mt-sm-0">
                            <i class="fa-solid fa-message"></i>{" "}
                            <span>Message</span>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
              {/* box 6 */}

              <NavLink to="/ginnieboxdetail " className="nav-link">
                <div className="background d-flex">
                  <div className="me-2">
                    <img className="img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="tetx-----div">
                    <ul className="p-0 m-0 mt-1">
                      <li>Name : salkjh</li>
                      <li>Company Name : WebEarl</li>
                      <li>Date : 01-01-2021</li>
                      <li>Email : skjhhfi@gmail.com</li>
                      <li>Contact No : 6789012345</li>
                      <li>Grand Total : ₹ 987978</li>
                    </ul>
                    <div className="d-sm-flex  m-0 p-0 ">
                      <div className="w-100 me-1">
                        <NavLink>
                          <button className="button-modify w-100 ">
                            <i class="fa-solid fa-phone"></i> <span>Call</span>
                          </button>
                        </NavLink>
                      </div>
                      <div className="w-100">
                        <NavLink to="">
                          <button className="button-modify w-100 mt-2 mt-sm-0">
                            <i class="fa-solid fa-message"></i>{" "}
                            <span>Message</span>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>

              {/* box7 */}
              <NavLink to="/ginnieboxdetail " className="nav-link">
                <div className="background d-flex">
                  <div className="me-2">
                    <img className="img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="tetx-----div">
                    <ul className="p-0 m-0 mt-1">
                      <li>Name : salkjh</li>
                      <li>Company Name : WebEarl</li>
                      <li>Date : 01-01-2021</li>
                      <li>Email : skjhhfi@gmail.com</li>
                      <li>Contact No : 6789012345</li>
                      <li>Grand Total : ₹ 987978</li>
                    </ul>
                    <div className="d-sm-flex  m-0 p-0 ">
                      <div className="w-100 me-1">
                        <NavLink>
                          <button className="button-modify w-100 ">
                            <i class="fa-solid fa-phone"></i> <span>Call</span>
                          </button>
                        </NavLink>
                      </div>
                      <div className="w-100">
                        <NavLink to="">
                          <button className="button-modify w-100 mt-2 mt-sm-0">
                            <i class="fa-solid fa-message"></i>{" "}
                            <span>Message</span>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
              {/* box8 */}
              <NavLink to="/ginnieboxdetail " className="nav-link">
                <div className="background d-flex">
                  <div className="me-2">
                    <img className="img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="tetx-----div">
                    <ul className="p-0 m-0 mt-1">
                      <li>Name : salkjh</li>
                      <li>Company Name : WebEarl</li>
                      <li>Date : 01-01-2021</li>
                      <li>Email : skjhhfi@gmail.com</li>
                      <li>Contact No : 6789012345</li>
                      <li>Grand Total : ₹ 987978</li>
                    </ul>
                    <div className="d-sm-flex  m-0 p-0 ">
                      <div className="w-100 me-1">
                        <NavLink>
                          <button className="button-modify w-100 ">
                            <i class="fa-solid fa-phone"></i> <span>Call</span>
                          </button>
                        </NavLink>
                      </div>
                      <div className="w-100">
                        <NavLink to="">
                          <button className="button-modify w-100 mt-2 mt-sm-0">
                            <i class="fa-solid fa-message"></i>{" "}
                            <span>Message</span>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>

              {/* box 9 */}
              <NavLink to="/ginnieboxdetail " className="nav-link">
                <div className="background d-flex">
                  <div className="me-2">
                    <img className="img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="tetx-----div">
                    <ul className="p-0 m-0 mt-1">
                      <li>Name : salkjh</li>
                      <li>Company Name : WebEarl</li>
                      <li>Date : 01-01-2021</li>
                      <li>Email : skjhhfi@gmail.com</li>
                      <li>Contact No : 6789012345</li>
                      <li>Grand Total : ₹ 987978</li>
                    </ul>
                    <div className="d-sm-flex  m-0 p-0 ">
                      <div className="w-100 me-1">
                        <NavLink>
                          <button className="button-modify w-100 ">
                            <i class="fa-solid fa-phone"></i> <span>Call</span>
                          </button>
                        </NavLink>
                      </div>
                      <div className="w-100">
                        <NavLink to="">
                          <button className="button-modify w-100 mt-2 mt-sm-0">
                            <i class="fa-solid fa-message"></i>{" "}
                            <span>Message</span>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
              {/* box10 */}
              <NavLink to="/ginnieboxdetail " className="nav-link">
                <div className="background d-flex">
                  <div className="me-2">
                    <img className="img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="tetx-----div">
                    <ul className="p-0 m-0 mt-1">
                      <li>Name : salkjh</li>
                      <li>Company Name : WebEarl</li>
                      <li>Date : 01-01-2021</li>
                      <li>Email : skjhhfi@gmail.com</li>
                      <li>Contact No : 6789012345</li>
                      <li>Grand Total : ₹ 987978</li>
                    </ul>
                    <div className="d-sm-flex  m-0 p-0 ">
                      <div className="w-100 me-1">
                        <NavLink>
                          <button className="button-modify w-100 ">
                            <i class="fa-solid fa-phone"></i> <span>Call</span>
                          </button>
                        </NavLink>
                      </div>
                      <div className="w-100">
                        <NavLink to="">
                          <button className="button-modify w-100 mt-2 mt-sm-0">
                            <i class="fa-solid fa-message"></i>{" "}
                            <span>Message</span>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>

              {/* box11 */}
              <NavLink to="/ginnieboxdetail " className="nav-link">
                <div className="background d-flex">
                  <div className="me-2">
                    <img className="img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="tetx-----div">
                    <ul className="p-0 m-0 mt-1">
                      <li>Name : salkjh</li>
                      <li>Company Name : WebEarl</li>
                      <li>Date : 01-01-2021</li>
                      <li>Email : skjhhfi@gmail.com</li>
                      <li>Contact No : 6789012345</li>
                      <li>Grand Total : ₹ 987978</li>
                    </ul>
                    <div className="d-sm-flex  m-0 p-0 ">
                      <div className="w-100 me-1">
                        <NavLink>
                          <button className="button-modify w-100 ">
                            <i class="fa-solid fa-phone"></i> <span>Call</span>
                          </button>
                        </NavLink>
                      </div>
                      <div className="w-100">
                        <NavLink to="">
                          <button className="button-modify w-100 mt-2 mt-sm-0">
                            <i class="fa-solid fa-message"></i>{" "}
                            <span>Message</span>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>

              {/* box12 */}
              <NavLink to="/ginnieboxdetail " className="nav-link">
                <div className="background d-flex">
                  <div className="me-2">
                    <img className="img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="tetx-----div">
                    <ul className="p-0 m-0 mt-1">
                      <li>Name : salkjh</li>
                      <li>Company Name : WebEarl</li>
                      <li>Date : 01-01-2021</li>
                      <li>Email : skjhhfi@gmail.com</li>
                      <li>Contact No : 6789012345</li>
                      <li>Grand Total : ₹ 987978</li>
                    </ul>
                    <div className="d-sm-flex  m-0 p-0 ">
                      <div className="w-100 me-1">
                        <NavLink>
                          <button className="button-modify w-100 ">
                            <i class="fa-solid fa-phone"></i> <span>Call</span>
                          </button>
                        </NavLink>
                      </div>
                      <div className="w-100">
                        <NavLink to="">
                          <button className="button-modify w-100 mt-2 mt-sm-0">
                            <i class="fa-solid fa-message"></i>{" "}
                            <span>Message</span>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GinnieBox;
