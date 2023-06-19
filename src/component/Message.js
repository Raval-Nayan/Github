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

const Message = () => {
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
              Message
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
              <div className="background d-flex">
                <div className="me-2">
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <div className="w-100 me-1">
                      <NavLink>
                        <button className="button-modify w-100 ">
                          <i class="fa-solid fa-phone"></i> <span>Call</span>
                        </button>
                      </NavLink>
                    </div>
                    <div className="w-100">
                      <NavLink to="/chatbox">
                        <button className="button-modify w-100 mt-2 mt-sm-0">
                          <i class="fa-solid fa-message"></i>{" "}
                          <span>Message</span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* box2 */}
              <div className="background d-flex">
                <div className="me-2">
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <div className="w-100 me-1">
                      <NavLink>
                        <button className="button-modify w-100 ">
                          <i class="fa-solid fa-phone"></i> <span>Call</span>
                        </button>
                      </NavLink>
                    </div>
                    <div className="w-100">
                      <NavLink to="/chatbox">
                        <button className="button-modify w-100 mt-2 mt-sm-0">
                          <i class="fa-solid fa-message"></i>{" "}
                          <span>Message</span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              {/* box-3 */}
              <div className="background d-flex">
                <div className="me-2">
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <div className="w-100 me-1">
                      <NavLink>
                        <button className="button-modify w-100 ">
                          <i class="fa-solid fa-phone"></i> <span>Call</span>
                        </button>
                      </NavLink>
                    </div>
                    <div className="w-100">
                      <NavLink to="/chatbox">
                        <button className="button-modify w-100 mt-2 mt-sm-0">
                          <i class="fa-solid fa-message"></i>{" "}
                          <span>Message</span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              {/* box-4 */}
              <div className="background d-flex">
                <div className="me-2">
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <div className="w-100 me-1">
                      <NavLink>
                        <button className="button-modify w-100 ">
                          <i class="fa-solid fa-phone"></i> <span>Call</span>
                        </button>
                      </NavLink>
                    </div>
                    <div className="w-100">
                      <NavLink to="/chatbox">
                        <button className="button-modify w-100 mt-2 mt-sm-0">
                          <i class="fa-solid fa-message"></i>{" "}
                          <span>Message</span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              {/* box5 */}
              <div className="background d-flex">
                <div className="me-2">
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <div className="w-100 me-1">
                      <NavLink>
                        <button className="button-modify w-100 ">
                          <i class="fa-solid fa-phone"></i> <span>Call</span>
                        </button>
                      </NavLink>
                    </div>
                    <div className="w-100">
                      <NavLink to="/chatbox">
                        <button className="button-modify w-100 mt-2 mt-sm-0">
                          <i class="fa-solid fa-message"></i>{" "}
                          <span>Message</span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              {/* box 6 */}

              <div className="background d-flex">
                <div className="me-2">
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <div className="w-100 me-1">
                      <NavLink>
                        <button className="button-modify w-100 ">
                          <i class="fa-solid fa-phone"></i> <span>Call</span>
                        </button>
                      </NavLink>
                    </div>
                    <div className="w-100">
                      <NavLink to="/chatbox">
                        <button className="button-modify w-100 mt-2 mt-sm-0">
                          <i class="fa-solid fa-message"></i>{" "}
                          <span>Message</span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* box7 */}
              <div className="background d-flex">
                <div className="me-2">
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <div className="w-100 me-1">
                      <NavLink>
                        <button className="button-modify w-100 ">
                          <i class="fa-solid fa-phone"></i> <span>Call</span>
                        </button>
                      </NavLink>
                    </div>
                    <div className="w-100">
                      <NavLink to="/chatbox">
                        <button className="button-modify w-100 mt-2 mt-sm-0">
                          <i class="fa-solid fa-message"></i>{" "}
                          <span>Message</span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              {/* box8 */}
              <div className="background d-flex">
                <div className="me-2">
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <div className="w-100 me-1">
                      <NavLink>
                        <button className="button-modify w-100 ">
                          <i class="fa-solid fa-phone"></i> <span>Call</span>
                        </button>
                      </NavLink>
                    </div>
                    <div className="w-100">
                      <NavLink to="/chatbox">
                        <button className="button-modify w-100 mt-2 mt-sm-0">
                          <i class="fa-solid fa-message"></i>{" "}
                          <span>Message</span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* box 9 */}
              <div className="background d-flex">
                <div className="me-2">
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <div className="w-100 me-1">
                      <NavLink>
                        <button className="button-modify w-100 ">
                          <i class="fa-solid fa-phone"></i> <span>Call</span>
                        </button>
                      </NavLink>
                    </div>
                    <div className="w-100">
                      <NavLink to="/chatbox">
                        <button className="button-modify w-100 mt-2 mt-sm-0">
                          <i class="fa-solid fa-message"></i>{" "}
                          <span>Message</span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              {/* box10 */}
              <div className="background d-flex">
                <div className="me-2">
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <div className="w-100 me-1">
                      <NavLink>
                        <button className="button-modify w-100 ">
                          <i class="fa-solid fa-phone"></i> <span>Call</span>
                        </button>
                      </NavLink>
                    </div>
                    <div className="w-100">
                      <NavLink to="/chatbox">
                        <button className="button-modify w-100 mt-2 mt-sm-0">
                          <i class="fa-solid fa-message"></i>{" "}
                          <span>Message</span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* box11 */}
              <div className="background d-flex">
                <div className="me-2">
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <div className="w-100 me-1">
                      <NavLink>
                        <button className="button-modify w-100 ">
                          <i class="fa-solid fa-phone"></i> <span>Call</span>
                        </button>
                      </NavLink>
                    </div>
                    <div className="w-100">
                      <NavLink to="/chatbox">
                        <button className="button-modify w-100 mt-2 mt-sm-0">
                          <i class="fa-solid fa-message"></i>{" "}
                          <span>Message</span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* box12 */}
              <div className="background d-flex">
                <div className="me-2">
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Person Name : abc</li>
                    <li>Designation : asdjsht</li>
                    <li>Email : asyd@ldsfh.com</li>
                  </ul>
                  <div className="d-sm-flex  ">
                    <div className="w-100 me-1">
                      <NavLink>
                        <button className="button-modify w-100 ">
                          <i class="fa-solid fa-phone"></i> <span>Call</span>
                        </button>
                      </NavLink>
                    </div>
                    <div className="w-100">
                      <NavLink to="/chatbox">
                        <button className="button-modify w-100 mt-2 mt-sm-0">
                          <i class="fa-solid fa-message"></i>{" "}
                          <span>Message</span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
