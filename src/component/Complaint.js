import React from "react";
import "../css/dashbord.css";
import "../css/order.css";
import "../css/employee.css";

// import { NavLink } from "react-router-dom";

import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";
import "../css/orderdetails.css";
import "../css/complaint.css";

import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Complaint = () => {
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
              Complaint
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
          {/* div  banavo */}

          <div className="complaint-white-box">
            <div className="row  gap-2 justify-content-center">
              {/* box1 */}
              <div className="col-lg-4 col-md-6 col-8 out-stru ">
                <div className="circle-create ">
                  <span className="cd-text">CD</span>
                </div>
                <div className="div-----width">
                  <NavLink to="/complaintprofile " className="nav-link">
                    {" "}
                    <ul className="d-flex flex-column flex-end">
                      <li className="li-texts">Name : Abc</li>
                      <li className="li-texts">
                        Designation : Flutter Developer
                      </li>
                      <li className="li-texts">Subject : Payment</li>
                      <li className="li-texts"> Description : XYZ</li>
                      <li className="li-texts">Date : 01-03-2023</li>
                    </ul>
                  </NavLink>
                </div>
              </div>
              {/* box2 */}
              <div className="col-lg-4 col-md-6 col-8 out-stru ">
                <div className="circle-create ">
                  <span className="cd-text">CD</span>
                </div>
                <div className="div-----width">
                  <NavLink to="/complaintprofile " className="nav-link">
                    {" "}
                    <ul className="d-flex flex-column flex-end">
                      <li className="li-texts">Name : Abc</li>
                      <li className="li-texts">
                        Designation : Flutter Developer
                      </li>
                      <li className="li-texts">Subject : Payment</li>
                      <li className="li-texts"> Description : XYZ</li>
                      <li className="li-texts">Date : 01-03-2023</li>
                    </ul>
                  </NavLink>
                </div>
              </div>
              {/* box3 */}
              <div className="col-lg-4  col-md-6  col-8 out-stru ">
                <div className="circle-create ">
                  <span className="cd-text">CD</span>
                </div>
                <div className="div-----width">
                  <NavLink to="/complaintprofile " className="nav-link">
                    {" "}
                    <ul className="d-flex flex-column flex-end">
                      <li className="li-texts">Name : Abc</li>
                      <li className="li-texts">
                        Designation : Flutter Developer
                      </li>
                      <li className="li-texts">Subject : Payment</li>
                      <li className="li-texts"> Description : XYZ</li>
                      <li className="li-texts">Date : 01-03-2023</li>
                    </ul>
                  </NavLink>
                </div>
              </div>

              {/* box4 */}
              <div className="col-lg-4  col-md-6 col-8 out-stru ">
                <div className="circle-create ">
                  <span className="cd-text">CD</span>
                </div>
                <div className="div-----width">
                  <NavLink to="/complaintprofile " className="nav-link">
                    {" "}
                    <ul className="d-flex flex-column flex-end">
                      <li className="li-texts">Name : Abc</li>
                      <li className="li-texts">
                        Designation : Flutter Developer
                      </li>
                      <li className="li-texts">Subject : Payment</li>
                      <li className="li-texts"> Description : XYZ</li>
                      <li className="li-texts">Date : 01-03-2023</li>
                    </ul>
                  </NavLink>
                </div>
              </div>

              {/* box-5 */}
              <div className="col-lg-4  col-md-6 col-8 out-stru ">
                <div className="circle-create ">
                  <span className="cd-text">CD</span>
                </div>
                <div className="div-----width">
                  <NavLink to="/complaintprofile " className="nav-link">
                    {" "}
                    <ul className="d-flex flex-column flex-end">
                      <li className="li-texts">Name : Abc</li>
                      <li className="li-texts">
                        Designation : Flutter Developer
                      </li>
                      <li className="li-texts">Subject : Payment</li>
                      <li className="li-texts"> Description : XYZ</li>
                      <li className="li-texts">Date : 01-03-2023</li>
                    </ul>
                  </NavLink>
                </div>
              </div>
              {/* box-6 */}
              <div className="col-lg-4  col-md-6 col-8 out-stru ">
                <div className="circle-create ">
                  <span className="cd-text">CD</span>
                </div>
                <div className="div-----width">
                  <NavLink to="/complaintprofile " className="nav-link">
                    {" "}
                    <ul className="d-flex flex-column flex-end">
                      <li className="li-texts">Name : Abc</li>
                      <li className="li-texts">
                        Designation : Flutter Developer
                      </li>
                      <li className="li-texts">Subject : Payment</li>
                      <li className="li-texts"> Description : XYZ</li>
                      <li className="li-texts">Date : 01-03-2023</li>
                    </ul>
                  </NavLink>
                </div>
              </div>

              {/* box-7 */}
              <div className="col-lg-4  col-md-6 col-8 out-stru ">
                <div className="circle-create ">
                  <span className="cd-text">CD</span>
                </div>
                <div className="div-----width">
                  <NavLink to="/complaintprofile " className="nav-link">
                    {" "}
                    <ul className="d-flex flex-column flex-end">
                      <li className="li-texts">Name : Abc</li>
                      <li className="li-texts">
                        Designation : Flutter Developer
                      </li>
                      <li className="li-texts">Subject : Payment</li>
                      <li className="li-texts"> Description : XYZ</li>
                      <li className="li-texts">Date : 01-03-2023</li>
                    </ul>
                  </NavLink>
                </div>
              </div>
              {/* box-8 */}
              <div className="col-lg-4  col-md-6 col-8 out-stru ">
                <div className="circle-create ">
                  <span className="cd-text">CD</span>
                </div>
                <div className="div-----width">
                  <NavLink to="/complaintprofile " className="nav-link">
                    {" "}
                    <ul className="d-flex flex-column flex-end">
                      <li className="li-texts">Name : Abc</li>
                      <li className="li-texts">
                        Designation : Flutter Developer
                      </li>
                      <li className="li-texts">Subject : Payment</li>
                      <li className="li-texts"> Description : XYZ</li>
                      <li className="li-texts">Date : 01-03-2023</li>
                    </ul>
                  </NavLink>
                </div>
              </div>
              {/* 9 */}
              <div className="col-lg-4  col-md-6 col-8 out-stru ">
                <div className="circle-create ">
                  <span className="cd-text">CD</span>
                </div>
                <div className="div-----width">
                  <NavLink to="/complaintprofile " className="nav-link">
                    {" "}
                    <ul className="d-flex flex-column flex-end">
                      <li className="li-texts">Name : Abc</li>
                      <li className="li-texts">
                        Designation : Flutter Developer
                      </li>
                      <li className="li-texts">Subject : Payment</li>
                      <li className="li-texts"> Description : XYZ</li>
                      <li className="li-texts">Date : 01-03-2023</li>
                    </ul>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaint;
