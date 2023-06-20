import React from "react";
import "../css/dashbord.css";
import "../css/order.css";
import "../css/employee.css";

// import { NavLink } from "react-router-dom";

import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";
import "../css/orderdetails.css";

import { NavLink } from "react-router-dom";
import cd from "../img/cd.png";
import we from "../img/we.png";
// import { NavLink } from "react-router-dom";
import "../css/chatbox.css";

const ChatBox = () => {
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

          <div className="container-fluid py-5">
            <div className="row d-flex justify-content-center">
              <div
                className="col-md-10 col-lg-8 col-xl-6"
                style={{ width: "90vw" }}
              >
                <div className="card" id="chat2">
                  <div
                    className="card-body"
                    data-mdb-perfect-scrollbar="true"
                    style={{
                      position: "relative",
                      height: "400px",
                      overflow: "auto",
                    }}
                  >
                    <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                      <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-color">
                          Hiii, I'm good.
                        </p>
                      </div>
                      <img
                        src={cd}
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                    </div>

                    <div className="d-flex flex-row justify-content-start mb-4">
                      <img
                        src={we}
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                      <div>
                        <p
                          className="small p-2 ms-3 mb-1 rounded-3 bg-color2"
                          style={{ backgroundcolor: "#0C1947" }}
                        >
                          Okay
                        </p>

                        <p className="small ms-3 mb-3 rounded-3 text-muted">
                          00:07
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Type message"
                    />

                    <NavLink className="ms-3">
                      <button className="btn btn-primary d-flex ">
                        <span className="me-2">SEND</span>{" "}
                        <i className="fas fa-paper-plane"></i>
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
  );
};

export default ChatBox;
