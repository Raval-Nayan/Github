import React from "react";
import "../css/addemployee.css";
import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";
import "../css/orderdetails.css";
import user from "../img/user.png";
import { NavLink } from "react-router-dom";
import "../css/dashbord.css";
import "../css/order.css";
// import { NavLink } from "react-bootstrap";

const AddEmployee = () => {
  return (
    <>
      <div className="container-fluid dash-back-color d-flex gx-0">
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
              Add Employee
            </h2>
            {/* div grid banavo */}
            <div className="color-white">
              <div className="row data-style gx-0">
                <div className="col-md-5 col-10 ">
                  <div className="d-flex flex-column  ms-md-5 my-md-5 me-md-4">
                    <div className="text-center">
                      <img className="img-fluid " src={user} alt="nayan"></img>
                      <div>
                        <h6 className="upload">
                          {" "}
                          Upload a photo{" "}
                          <i class="fa-solid fa-cloud-arrow-up"></i>{" "}
                        </h6>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Employee Name"
                    ></input>

                    <input
                      type="text"
                      placeholder="Employee Designation"
                      className="inputdesign mt-2"
                    ></input>
                    <div className="">
                      <input
                        type="date"
                        placeholder="Select Date of Birth"
                        className="me-1 date-style mt-2 "
                      ></input>
                      <input type="date" className=" date-style"></input>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-10 me-md-5">
                  <div className="phone-design d-flex flex-column me-md-auto    my-md-5 ">
                    <input
                      type="text"
                      placeholder="Address"
                      className="inputdesign mt-2"
                    ></input>
                    <input
                      type="emial"
                      placeholder="Email Id"
                      className="inputdesign mt-2"
                    ></input>
                    <input
                      type="number"
                      placeholder="Contact Number"
                      className="inputdesign mt-2"
                    ></input>
                    <input
                      type="text"
                      placeholder="Education"
                      className="inputdesign mt-2"
                    ></input>
                    <input
                      type="password"
                      className="form-control mt-2 "
                      placeholder="password"
                    ></input>
                    <input
                      type="password"
                      className="form-control mt-2 "
                      placeholder="Re-password"
                    ></input>
                    <NavLink to="/empprofile">
                      <button
                        className="btn btn-sucess mt-3 w-100"
                        style={{ color: "white " }}
                      >
                        <span style={{ color: "white", fontFamily: "Poppins" }}>
                          Add Employee
                        </span>
                      </button>
                    </NavLink>
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

export default AddEmployee;
