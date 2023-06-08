import React from "react";

// import { NavLink } from "react-router-dom";

import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";
import "../css/orderdetails.css";
import user from "../img/user.png";
import { NavLink } from "react-router-dom";
import "../css/dashbord.css";

const OrderDetails = () => {
  return (
    <div className="container-fluid dash-back-color d-flex">
      {/* display flex , flex column */}
      <SiderBox></SiderBox>
      <div className="d-flex flex-column box">
        <SearchBox></SearchBox>
        <div className="box">
          <small
            className="pt-2"
            style={{ color: "#7D8592", fontWeight: "400" }}
          >
            Welcome to Care For Each
          </small>
          <h2
            className="mt-1 mb-3 ms-2"
            style={{
              color: " #091F57",
              fontWeight: "600",
              fontFamily: "Poppins",
            }}
          >
            Add Employee
          </h2>
          {/* div grid banavo */}

          <div className="order-details-box ">
            <div className="d-flex details1 w-sm-100">
              <div className="d-md-flex me-2 user-name-width ">
                <img className="img-fluid" src={user} alt="nayan"></img>
                <ul className="ms-2 mt-3 w-100">
                  <li>Name : abc</li>
                  <li>Company Name : asdjsht</li>
                  <li>Email : asyd@ldsfh.com</li>
                  <li>Contact No : +918743839834</li>
                  <li>Date : 01-03-2023</li>
                  <li>Grand Total : ₹ 9874</li>
                </ul>
              </div>

              <div className="d-md-flex w-50 ms-2">
                <div className="ms-2">
                  <NavLink>
                    <h6 className="highlight-details ">Employee Detail :</h6>
                  </NavLink>
                  <ul>
                    <li>Name : Himanshu Anand</li>
                    <li>Designation : Web Developer</li>
                    <li>Email : hv7460@gmail.com</li>
                  </ul>
                </div>

                <div className="">
                  <NavLink>
                    <h6 className="highlight-details ">Payment Detail :</h6>
                  </NavLink>
                  <ul>
                    <li>Date : 05-03-2023</li>
                    <li>Payment type : Cash</li>
                    <li>Paid Amount : ₹ 49309</li>
                  </ul>
                </div>
              </div>
              <div className="w-50 ms-2 ">
                {" "}
                <NavLink>
                  <button className="btn btn-secondary mt-2 w-100">
                    Grand Total : ₹ 49309
                  </button>
                </NavLink>
                <NavLink>
                  <button className="btn btn-secondary mt-2 w-100 ">
                    Paid Amount : ₹ 49309
                  </button>
                </NavLink>
                <NavLink to="/orderproduct">
                  <button className="btn btn-white mt-2 w-100">
                    View Product
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="d-flex details1 w-sm-100">
              <div className="d-md-flex me-2 user-name-width ">
                <img className="img-fluid" src={user} alt="nayan"></img>
                <ul className="ms-2 mt-3 w-100">
                  <li>Name : abc</li>
                  <li>Company Name : asdjsht</li>
                  <li>Email : asyd@ldsfh.com</li>
                  <li>Contact No : +918743839834</li>
                  <li>Date : 01-03-2023</li>
                  <li>Grand Total : ₹ 9874</li>
                </ul>
              </div>

              <div className="d-md-flex w-50 ms-2">
                <div className="ms-2">
                  <NavLink>
                    <h6 className="highlight-details ">Employee Detail :</h6>
                  </NavLink>
                  <ul>
                    <li>Name : Himanshu Anand</li>
                    <li>Designation : Web Developer</li>
                    <li>Email : hv7460@gmail.com</li>
                  </ul>
                </div>

                <div className="">
                  <NavLink>
                    <h6 className="highlight-details ">Payment Detail :</h6>
                  </NavLink>
                  <ul>
                    <li>Date : 05-03-2023</li>
                    <li>Payment type : Cash</li>
                    <li>Paid Amount : ₹ 49309</li>
                  </ul>
                </div>
              </div>
              <div className="w-50 ms-2 ">
                {" "}
                <NavLink>
                  <button className="btn btn-secondary mt-2 w-100">
                    Grand Total : ₹ 49309
                  </button>
                </NavLink>
                <NavLink>
                  <button className="btn btn-secondary mt-2 w-100 ">
                    Paid Amount : ₹ 49309
                  </button>
                </NavLink>
                <NavLink to="/orderproduct">
                  <button className="btn btn-white mt-2 w-100">
                    View Product
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="d-flex details1 w-sm-100">
              <div className="d-md-flex me-2 user-name-width ">
                <img className="img-fluid" src={user} alt="nayan"></img>
                <ul className="ms-2 mt-3 w-100">
                  <li>Name : abc</li>
                  <li>Company Name : asdjsht</li>
                  <li>Email : asyd@ldsfh.com</li>
                  <li>Contact No : +918743839834</li>
                  <li>Date : 01-03-2023</li>
                  <li>Grand Total : ₹ 9874</li>
                </ul>
              </div>

              <div className="d-md-flex w-50 ms-2">
                <div className="ms-2">
                  <NavLink>
                    <h6 className="highlight-details ">Employee Detail :</h6>
                  </NavLink>
                  <ul>
                    <li>Name : Himanshu Anand</li>
                    <li>Designation : Web Developer</li>
                    <li>Email : hv7460@gmail.com</li>
                  </ul>
                </div>

                <div className="">
                  <NavLink>
                    <h6 className="highlight-details ">Payment Detail :</h6>
                  </NavLink>
                  <ul>
                    <li>Date : 05-03-2023</li>
                    <li>Payment type : Cash</li>
                    <li>Paid Amount : ₹ 49309</li>
                  </ul>
                </div>
              </div>
              <div className="w-50 ms-2 ">
                {" "}
                <NavLink>
                  <button className="btn btn-secondary mt-2 w-100">
                    Grand Total : ₹ 49309
                  </button>
                </NavLink>
                <NavLink>
                  <button className="btn btn-secondary mt-2 w-100 ">
                    Paid Amount : ₹ 49309
                  </button>
                </NavLink>
                <NavLink to="/orderproduct">
                  <button className="btn btn-white mt-2 w-100">
                    View Product
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="d-flex details1 w-sm-100">
              <div className="d-md-flex me-2 user-name-width ">
                <img className="img-fluid" src={user} alt="nayan"></img>
                <ul className="ms-2 mt-3 w-100">
                  <li>Name : abc</li>
                  <li>Company Name : asdjsht</li>
                  <li>Email : asyd@ldsfh.com</li>
                  <li>Contact No : +918743839834</li>
                  <li>Date : 01-03-2023</li>
                  <li>Grand Total : ₹ 9874</li>
                </ul>
              </div>

              <div className="d-md-flex w-50 ms-2">
                <div className="ms-2">
                  <NavLink>
                    <h6 className="highlight-details ">Employee Detail :</h6>
                  </NavLink>
                  <ul>
                    <li>Name : Himanshu Anand</li>
                    <li>Designation : Web Developer</li>
                    <li>Email : hv7460@gmail.com</li>
                  </ul>
                </div>

                <div className="">
                  <NavLink>
                    <h6 className="highlight-details ">Payment Detail :</h6>
                  </NavLink>
                  <ul>
                    <li>Date : 05-03-2023</li>
                    <li>Payment type : Cash</li>
                    <li>Paid Amount : ₹ 49309</li>
                  </ul>
                </div>
              </div>
              <div className="w-50 ms-2 ">
                {" "}
                <NavLink>
                  <button className="btn btn-secondary mt-2 w-100">
                    Grand Total : ₹ 49309
                  </button>
                </NavLink>
                <NavLink>
                  <button className="btn btn-secondary mt-2 w-100 ">
                    Paid Amount : ₹ 49309
                  </button>
                </NavLink>
                <NavLink to="/orderproduct">
                  <button className="btn btn-white mt-2 w-100">
                    View Product
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
