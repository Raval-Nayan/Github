import React from "react";

import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import excle from "../img/image 25.png";
import "../css/report.css";

// import { NavLink } from "react-router-dom";

const Report = () => {
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
                Logout
              </h2>
            </div>

            <div className="category-box-white p-4 ">
              <div className="color-xyz">
                <div className="w-50 mt-5">
                  <select className="drop-select p-2 w-100">
                    <option>Report Type</option>

                    <option>Attendance Report</option>
                    <option>Visitor Report</option>
                    <option>Complaint Report</option>
                    <option>Sales Report</option>
                    <option>Customer Report</option>
                    <option>Customer Report</option>
                    <option>Ginnie Box Report</option>
                    <option>Pending Collection Report</option>
                    <option>Location Report</option>
                    <option>Leave Report</option>
                  </select>

                  {/*  */}

                  <select className="drop-select mt-2 p-2  w-100">
                    <option>Select Employee</option>
                  </select>

                  <div className="d-md-flex mt-2 ">
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Start Date"
                      className="me-2 my-2 color-dates my-md-0 w-100"
                    >
                      <Form.Control
                        type="Date"
                        placeholder="Password"
                        className="color-dates"
                      />
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="floatingPassword"
                      label="End Date"
                      className="w-100 "
                    >
                      <Form.Control
                        type="Date"
                        placeholder="Password"
                        className="color-dates"
                      />
                    </FloatingLabel>
                  </div>

                  <div className="d-flex align-items-center mt-2">
                    <img
                      className="img-fluid my-3 me-2"
                      src={excle}
                      alt="nayan"
                    ></img>
                    <h5 className="h5-excle">Total Result :</h5>
                  </div>

                  <div className="text-center my-2">
                    <button className="btn btn-primary btn-width">Ok</button>
                  </div>

                  <div className="my-3 table-border">
                    <table style={{ width: "100%" }}>
                      <tr>
                        <th></th>
                        <th></th>
                      </tr>

                      <tr>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
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

export default Report;
