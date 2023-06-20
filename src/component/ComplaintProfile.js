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
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const ComplaintProfile = () => {
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
                Complaint Profile
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

            <div className="color-white p-5">
              <div className="row part-2 p-md-5">
                <div className="col-md-5 mt-4 ">
                  <div className="text-center">
                    {" "}
                    <img className="img-fluid " src={user} alt="nayan"></img>
                  </div>

                  <form className="d-flex flex-column">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Employee Name"
                      className=" mt-2  "
                    >
                      <Form.Control
                        type="text"
                        placeholder="    "
                        className="border----bottom  w-100"
                        style={{ backgroundColor: "#D3E0FF" }}
                      />
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email"
                      className=" my-2  "
                    >
                      <Form.Control
                        type="email"
                        placeholder="    "
                        className="border----bottom  w-100"
                        style={{ backgroundColor: "#D3E0FF" }}
                      />
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="floatingInput"
                      label="Company Name"
                      className="   "
                    >
                      <Form.Control
                        type="text"
                        placeholder="    "
                        className="border----bottom  w-100"
                        style={{ backgroundColor: "#D3E0FF" }}
                      />
                    </FloatingLabel>
                  </form>
                </div>
                <div className="col-md-5 mt-lg-5 ">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="date"
                    className="  "
                  >
                    <Form.Control
                      type="date"
                      placeholder="."
                      className="border----bottom  w-100"
                      style={{ backgroundColor: "#D3E0FF" }}
                    />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingInput"
                    label="Time"
                    className=" my-2 "
                  >
                    <Form.Control
                      type="time"
                      placeholder="."
                      className="border----bottom  w-100"
                      style={{ backgroundColor: "#D3E0FF" }}
                    />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingInput"
                    label="Contact No."
                    className=" my-2 "
                  >
                    <Form.Control
                      type="number"
                      placeholder="."
                      className="border----bottom  w-100"
                      style={{ backgroundColor: "#D3E0FF" }}
                    />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                      as="textarea"
                      placeholder="."
                      style={{ height: "100px", backgroundColor: "#D3E0FF" }}
                      className="border----bottom  w-100"
                    />
                  </FloatingLabel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplaintProfile;
