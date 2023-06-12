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

const VisitorDetails = () => {
  return (
    <>
      <div className="container-fluid dash-back-color d-flex">
        {/* display flex , flex column */}
        <SiderBox></SiderBox>
        <div className="d-flex flex-column main ">
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
                Visitor Detail
              </h2>
              <div className="d-flex w-25 ">
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

            <div className="color-white">
              <div className="row part-2">
                <div className="col-md-5 ">
                  <div className="text-center">
                    {" "}
                    <img className="img-fluid " src={user} alt="nayan"></img>
                  </div>

                  <form className="d-flex flex-column">
                    <input
                      type="text"
                      className="inputdesign color-input mt-3 "
                      placeholder="  Employee Name"
                    ></input>
                    <input
                      type="email"
                      placeholder="  Email"
                      className="inputdesign color-input   mt-2"
                    ></input>

                    <input
                      type="text"
                      placeholder="  Designation"
                      className="inputdesign color-input mt-2"
                    ></input>
                  </form>
                </div>
                <div className="col-md-5 mt-lg-5 ">
                  <input
                    type="text"
                    placeholder="  Joining Date"
                    className="inputdesign color-input mt-2 w-100"
                  ></input>
                  <input
                    type="date"
                    placeholder="  Date of Birth"
                    className="inputdesign color-input mt-2 w-100"
                  ></input>
                  <input
                    type="number"
                    placeholder="  Contact Number"
                    className="inputdesign color-input mt-2 w-100"
                  ></input>
                  <textarea
                    class="form-control mt-2"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="  Discussion"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisitorDetails;
