import React from "react";
import "../css/addemployee.css";
import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";
import "../css/orderdetails.css";
import user from "../img/user.png";
// import { NavLink } from "react-router-dom";
import "../css/dashbord.css";
import "../css/order.css";
import "../css/empprofile.css";
import { NavLink } from "react-router-dom";
const EmpProfile = () => {
  return (
    <>
      <div className="container-fluid dash-back-color d-flex">
        {/* display flex , flex column */}
        <SiderBox></SiderBox>
        <div className="d-flex flex-column box">
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
              <div className=" d-flex flex column  mt-2">
                <div className="addemp-grid">
                  <div className="d-flex flex-column  part2">
                    <div className="text-center">
                      <img className="img-fluid " src={user} alt="nayan"></img>
                    </div>
                    <input
                      type="text"
                      className="inputdesign color-input "
                      placeholder="Employee Name"
                    ></input>

                    <input
                      type="email"
                      placeholder="Email"
                      className="inputdesign color-input  mt-2"
                    ></input>

                    <input
                      type="text"
                      placeholder="Designation"
                      className="inputdesign color-input mt-2"
                    ></input>
                  </div>
                  {/* part 2 */}
                  <div className="phone-design  part2 d-flex flex-column ms-auto  ms-2 ">
                    <input
                      type="text"
                      placeholder="Joining Date"
                      className="inputdesign color-input mt-2"
                    ></input>
                    <input
                      type="date"
                      placeholder="Date of Birth"
                      className="inputdesign color-input mt-2"
                    ></input>
                    <input
                      type="number"
                      placeholder="Contact Number"
                      className="inputdesign color-input mt-2"
                    ></input>
                    <input
                      type="text"
                      placeholder="Address"
                      className="inputdesign color-input mt-2"
                    ></input>
                    <input
                      type="text"
                      className="inputdesign color-input mt-2 "
                      placeholder="Education"
                    ></input>

                    <NavLink className="dlt-btn">
                      <button
                        className="btn btn-primary mt-3"
                        style={{ color: "white " }}
                      >
                        <span style={{ color: "white", fontFamily: "Poppins" }}>
                          Delete Profile
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

export default EmpProfile;
