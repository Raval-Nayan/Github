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
              <NavLink to="/visitordetails" className="m-auto">
                <div className="background d-flex">
                  <div>
                    {" "}
                    <img className="img-fluid" src={user} alt="nayan"></img>
                  </div>
                  <div className="tetx-----div">
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
              <div className="background d-flex">
                <div>
                  {" "}
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>
                <div className="tetx-----div">
                  <ul className="mt-4">
                    <li>Person Name : kagkuh</li>
                    <li>Company Name : mygve</li>
                    <li>Date : 09-08-2020</li>
                    <li>Time : 01:30 PM</li>
                    <li>Mail Id : sftctc@gmail.com</li>
                  </ul>
                </div>
              </div>
              {/* box-3 */}
              <div className="background d-flex">
                <div>
                  {" "}
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>
                <div className="tetx-----div">
                  <ul className="mt-4">
                    <li>Person Name : kagkuh</li>
                    <li>Company Name : mygve</li>
                    <li>Date : 09-08-2020</li>
                    <li>Time : 01:30 PM</li>
                    <li>Mail Id : sftctc@gmail.com</li>
                  </ul>
                </div>
              </div>
              {/* box-4 */}
              <div className="background d-flex">
                <div>
                  {" "}
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>
                <div className="tetx-----div">
                  <ul className="mt-4">
                    <li>Person Name : kagkuh</li>
                    <li>Company Name : mygve</li>
                    <li>Date : 09-08-2020</li>
                    <li>Time : 01:30 PM</li>
                    <li>Mail Id : sftctc@gmail.com</li>
                  </ul>
                </div>
              </div>
              {/* box5 */}
              <div className="background d-flex">
                <div>
                  {" "}
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>
                <div className="tetx-----div">
                  <ul className="mt-4">
                    <li>Person Name : kagkuh</li>
                    <li>Company Name : mygve</li>
                    <li>Date : 09-08-2020</li>
                    <li>Time : 01:30 PM</li>
                    <li>Mail Id : sftctc@gmail.com</li>
                  </ul>
                </div>
              </div>
              {/* box 6 */}

              <div className="background d-flex">
                <div>
                  {" "}
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>
                <div className="tetx-----div">
                  <ul className="mt-4">
                    <li>Person Name : kagkuh</li>
                    <li>Company Name : mygve</li>
                    <li>Date : 09-08-2020</li>
                    <li>Time : 01:30 PM</li>
                    <li>Mail Id : sftctc@gmail.com</li>
                  </ul>
                </div>
              </div>

              {/* box7 */}
              <div className="background d-flex">
                <div>
                  {" "}
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>
                <div className="tetx-----div">
                  <ul className="mt-4">
                    <li>Person Name : kagkuh</li>
                    <li>Company Name : mygve</li>
                    <li>Date : 09-08-2020</li>
                    <li>Time : 01:30 PM</li>
                    <li>Mail Id : sftctc@gmail.com</li>
                  </ul>
                </div>
              </div>
              {/* box8 */}
              <div className="background d-flex">
                <div>
                  {" "}
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>
                <div className="tetx-----div">
                  <ul className="mt-4">
                    <li>Person Name : kagkuh</li>
                    <li>Company Name : mygve</li>
                    <li>Date : 09-08-2020</li>
                    <li>Time : 01:30 PM</li>
                    <li>Mail Id : sftctc@gmail.com</li>
                  </ul>
                </div>
              </div>

              {/* box 9 */}
              <div className="background d-flex">
                <div>
                  {" "}
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>
                <div className="tetx-----div">
                  <ul className="mt-4">
                    <li>Person Name : kagkuh</li>
                    <li>Company Name : mygve</li>
                    <li>Date : 09-08-2020</li>
                    <li>Time : 01:30 PM</li>
                    <li>Mail Id : sftctc@gmail.com</li>
                  </ul>
                </div>
              </div>
              {/* box10 */}
              <div className="background d-flex">
                <div>
                  {" "}
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>
                <div className="tetx-----div">
                  <ul className="mt-4">
                    <li>Person Name : kagkuh</li>
                    <li>Company Name : mygve</li>
                    <li>Date : 09-08-2020</li>
                    <li>Time : 01:30 PM</li>
                    <li>Mail Id : sftctc@gmail.com</li>
                  </ul>
                </div>
              </div>

              {/* box11 */}
              <div className="background d-flex">
                <div>
                  {" "}
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>
                <div className="tetx-----div">
                  <ul className="mt-4">
                    <li>Person Name : kagkuh</li>
                    <li>Company Name : mygve</li>
                    <li>Date : 09-08-2020</li>
                    <li>Time : 01:30 PM</li>
                    <li>Mail Id : sftctc@gmail.com</li>
                  </ul>
                </div>
              </div>

              {/* box12 */}
              <div className="background d-flex">
                <div>
                  {" "}
                  <img className="img-fluid" src={user} alt="nayan"></img>
                </div>
                <div className="tetx-----div">
                  <ul className="mt-4">
                    <li>Person Name : kagkuh</li>
                    <li>Company Name : mygve</li>
                    <li>Date : 09-08-2020</li>
                    <li>Time : 01:30 PM</li>
                    <li>Mail Id : sftctc@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visitor;
