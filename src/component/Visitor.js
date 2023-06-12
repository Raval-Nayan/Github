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

const Visitor = () => {
  return (
    <div className="container-fluid dash-back-color d-flex">
      {/* display flex , flex column */}
      <SiderBox></SiderBox>
      <div className="d-flex flex-column main">
        <SearchBox></SearchBox>
        <div className="ms-2">
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
            Visitor
          </h2>
          {/* div grid banavo */}
          <div className="postion">
            <div className="back-----color ">
              <NavLink to="/visitordetails" className="m-auto mb-md-0 mb-2 ">
                <div className="background d-flex">
                  <div>
                    {" "}
                    <img
                      className="img-fluid me-md-0  me-3"
                      src={user}
                      alt="nayan"
                    ></img>
                  </div>
                  <div className="ms-lg-2">
                    <ul className="mt-4">
                      <li>Person Name : kagkuh</li>
                      <li>Company Name : mygve</li>
                      <li>Date : 09-08-2020</li>
                      <li>Time : 01:30 PM</li>
                      <li>Mail Id : sftctc@gmail.com</li>
                    </ul>
                  </div>
                </div>
              </NavLink>

              {/* box2 */}
              <NavLink to="/visitordetails" className="m-auto mb-md-0 mb-2 ">
                <div className="background d-flex">
                  <div>
                    {" "}
                    <img
                      className="img-fluid  me-md-0  me-3"
                      src={user}
                      alt="nayan"
                    ></img>
                  </div>
                  <div className="ms-lg-2">
                    <ul className="mt-4">
                      <li>Person Name : kagkuh</li>
                      <li>Company Name : mygve</li>
                      <li>Date : 09-08-2020</li>
                      <li>Time : 01:30 PM</li>
                      <li>Mail Id : sftctc@gmail.com</li>
                    </ul>
                  </div>
                </div>
              </NavLink>
              {/* box-3 */}
              <NavLink to="/visitordetails" className="m-auto mb-md-0 mb-2 ">
                <div className="background d-flex">
                  <div>
                    {" "}
                    <img
                      className="img-fluid  me-md-0  me-3  "
                      src={user}
                      alt="nayan"
                    ></img>
                  </div>
                  <div className="ms-lg-2">
                    <ul className="mt-4">
                      <li>Person Name : kagkuh</li>
                      <li>Company Name : mygve</li>
                      <li>Date : 09-08-2020</li>
                      <li>Time : 01:30 PM</li>
                      <li>Mail Id : sftctc@gmail.com</li>
                    </ul>
                  </div>
                </div>
              </NavLink>
              {/* box-4 */}
              <NavLink to="/visitordetails" className="m-auto mb-md-0 mb-2 ">
                <div className="background d-flex">
                  <div>
                    {" "}
                    <img
                      className="img-fluid   me-md-0  me-3"
                      src={user}
                      alt="nayan"
                    ></img>
                  </div>
                  <div className="ms-lg-2">
                    <ul className="mt-4">
                      <li>Person Name : kagkuh</li>
                      <li>Company Name : mygve</li>
                      <li>Date : 09-08-2020</li>
                      <li>Time : 01:30 PM</li>
                      <li>Mail Id : sftctc@gmail.com</li>
                    </ul>
                  </div>
                </div>
              </NavLink>
              {/* box5 */}
              <NavLink to="/visitordetails" className="m-auto mb-md-0 mb-2 ">
                <div className="background d-flex">
                  <div>
                    {" "}
                    <img
                      className="img-fluid   me-md-0  me-3"
                      src={user}
                      alt="nayan"
                    ></img>
                  </div>
                  <div className="ms-lg-2">
                    <ul className="mt-4">
                      <li>Person Name : kagkuh</li>
                      <li>Company Name : mygve</li>
                      <li>Date : 09-08-2020</li>
                      <li>Time : 01:30 PM</li>
                      <li>Mail Id : sftctc@gmail.com</li>
                    </ul>
                  </div>
                </div>
              </NavLink>
              {/* box 6 */}

              <NavLink to="/visitordetails" className="m-auto mb-md-0 mb-2 ">
                <div className="background d-flex">
                  <div>
                    {" "}
                    <img
                      className="img-fluid  me-md-0  me-3 "
                      src={user}
                      alt="nayan"
                    ></img>
                  </div>
                  <div className="ms-lg-2">
                    <ul className="mt-4">
                      <li>Person Name : kagkuh</li>
                      <li>Company Name : mygve</li>
                      <li>Date : 09-08-2020</li>
                      <li>Time : 01:30 PM</li>
                      <li>Mail Id : sftctc@gmail.com</li>
                    </ul>
                  </div>
                </div>
              </NavLink>

              {/* box7 */}
              <NavLink to="/visitordetails" className="m-auto mb-md-0 mb-2 ">
                <div className="background d-flex">
                  <div>
                    {" "}
                    <img
                      className="img-fluid   me-md-0  me-3"
                      src={user}
                      alt="nayan"
                    ></img>
                  </div>
                  <div className="ms-lg-2">
                    <ul className="mt-4">
                      <li>Person Name : kagkuh</li>
                      <li>Company Name : mygve</li>
                      <li>Date : 09-08-2020</li>
                      <li>Time : 01:30 PM</li>
                      <li>Mail Id : sftctc@gmail.com</li>
                    </ul>
                  </div>
                </div>
              </NavLink>
              {/* box8 */}
              <NavLink to="/visitordetails" className="m-auto mb-md-0 mb-2 ">
                <div className="background d-flex">
                  <div>
                    {" "}
                    <img
                      className="img-fluid   me-md-0  me-3"
                      src={user}
                      alt="nayan"
                    ></img>
                  </div>
                  <div className="ms-lg-2">
                    <ul className="mt-4">
                      <li>Person Name : kagkuh</li>
                      <li>Company Name : mygve</li>
                      <li>Date : 09-08-2020</li>
                      <li>Time : 01:30 PM</li>
                      <li>Mail Id : sftctc@gmail.com</li>
                    </ul>
                  </div>
                </div>
              </NavLink>

              {/* box 9 */}
              <NavLink to="/visitordetails" className="m-auto mb-md-0 mb-2 ">
                <div className="background d-flex">
                  <div>
                    {" "}
                    <img
                      className="img-fluid   me-md-0  me-3"
                      src={user}
                      alt="nayan"
                    ></img>
                  </div>
                  <div className="ms-lg-2">
                    <ul className="mt-4">
                      <li>Person Name : kagkuh</li>
                      <li>Company Name : mygve</li>
                      <li>Date : 09-08-2020</li>
                      <li>Time : 01:30 PM</li>
                      <li>Mail Id : sftctc@gmail.com</li>
                    </ul>
                  </div>
                </div>
              </NavLink>
              {/* box10 */}
              <NavLink to="/visitordetails" className="m-auto mb-md-0 mb-2 ">
                <div className="background d-flex">
                  <div>
                    {" "}
                    <img
                      className="img-fluid  me-md-0  me-3"
                      src={user}
                      alt="nayan"
                    ></img>
                  </div>
                  <div className="ms-lg-2">
                    <ul className="mt-4">
                      <li>Person Name : kagkuh</li>
                      <li>Company Name : mygve</li>
                      <li>Date : 09-08-2020</li>
                      <li>Time : 01:30 PM</li>
                      <li>Mail Id : sftctc@gmail.com</li>
                    </ul>
                  </div>
                </div>
              </NavLink>

              {/* box11 */}
              <NavLink to="/visitordetails" className="m-auto mb-md-0 mb-2 ">
                <div className="background d-flex">
                  <div>
                    {" "}
                    <img
                      className="img-fluid   me-md-0  me-3"
                      src={user}
                      alt="nayan"
                    ></img>
                  </div>
                  <div className="ms-lg-2">
                    <ul className="mt-4">
                      <li>Person Name : kagkuh</li>
                      <li>Company Name : mygve</li>
                      <li>Date : 09-08-2020</li>
                      <li>Time : 01:30 PM</li>
                      <li>Mail Id : sftctc@gmail.com</li>
                    </ul>
                  </div>
                </div>
              </NavLink>

              {/* box12 */}
              <NavLink to="/visitordetails" className="m-auto mb-md-0 mb-2 ">
                <div className="background d-flex">
                  <div>
                    {" "}
                    <img
                      className="img-fluid  me-md-0  me-3 "
                      src={user}
                      alt="nayan"
                    ></img>
                  </div>
                  <div className="ms-lg-2">
                    <ul className="mt-4">
                      <li>Person Name : kagkuh</li>
                      <li>Company Name : mygve</li>
                      <li>Date : 09-08-2020</li>
                      <li>Time : 01:30 PM</li>
                      <li>Mail Id : sftctc@gmail.com</li>
                    </ul>
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

export default Visitor;
