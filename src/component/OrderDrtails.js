import React from "react";

import "../css/dashbord.css";
import "../css/order.css";

// import { NavLink } from "react-router-dom";

import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";
import "../css/orderdetails.css";
import user from "../img/user.png";
import { NavLink } from "react-router-dom";

const OrderDetails = () => {
  return (
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

          <div className="order-details-box ">
            <div className="row mt-1">
              <div className=" pt-3">
                <div className="col-md-12 d-flex details1  ">
                  <div className="col-1 mt-2 me-1">
                    <img className="img-fluid" src={user} alt="nayan"></img>
                  </div>
                  <div className="col-3 mt-2">
                    {" "}
                    <ul>
                      <li>Name : abc</li>
                      <li>Company Name : asdjsht</li>
                      <li>Email : asyd@ldsfh.com</li>
                      <li>Contact No : +918743839834</li>
                      <li>Date : 01-03-2023</li>
                      <li>Grand Total : ₹ 9874</li>
                    </ul>
                  </div>
                  <div className="col-3">
                    <NavLink>
                      <h6 className="highlight-details mt-2">
                        Employee Detail :
                      </h6>
                    </NavLink>
                    <ul>
                      <li>Name : Himanshu Anand</li>
                      <li>Designation : Web Developer</li>
                      <li>Email : hv7460@gmail.com</li>
                    </ul>
                  </div>
                  <div className="col-2   me-2">
                    {" "}
                    <NavLink>
                      <h6 className="highlight-details mt-2 ">
                        Payment Detail :
                      </h6>
                    </NavLink>
                    <ul>
                      <li>Date : 05-03-2023</li>
                      <li>Payment type : Cash</li>
                      <li>Paid Amount : ₹ 49309</li>
                    </ul>
                  </div>
                  <div className="col-3">
                    {" "}
                    <NavLink>
                      <button className="btn btn-secondary mt-2">
                        Grand Total : ₹ 49309
                      </button>
                    </NavLink>
                    <NavLink>
                      <button className="btn btn-secondary mt-2">
                        Paid Amount : ₹ 49309
                      </button>
                    </NavLink>
                    <NavLink to="/orderproduct">
                      <button className="btn btn-white mt-2">
                        View Product
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="pt-3">
                <div className="col-12 d-flex details1   ">
                  <div className="col-1 mt-2 me-1">
                    <img className="img-fluid" src={user} alt="nayan"></img>
                  </div>
                  <div className="col-3 mt-2 ">
                    {" "}
                    <ul>
                      <li>Name : abc</li>
                      <li>Company Name : asdjsht</li>
                      <li>Email : asyd@ldsfh.com</li>
                      <li>Contact No : +918743839834</li>
                      <li>Date : 01-03-2023</li>
                      <li>Grand Total : ₹ 9874</li>
                    </ul>
                  </div>
                  <div className="col-3 mt-2 ">
                    <NavLink>
                      <h6 className="highlight-details">Employee Detail :</h6>
                    </NavLink>
                    <ul>
                      <li>Name : Himanshu Anand</li>
                      <li>Designation : Web Developer</li>
                      <li>Email : hv7460@gmail.com</li>
                    </ul>
                  </div>
                  <div className="col-2 mt-2 ">
                    {" "}
                    <NavLink>
                      <h6 className="highlight-details">Payment Detail :</h6>
                    </NavLink>
                    <ul>
                      <li>Date : 05-03-2023</li>
                      <li>Payment type : Cash</li>
                      <li>Paid Amount : ₹ 49309</li>
                    </ul>
                  </div>
                  <div className="col-3">
                    {" "}
                    <NavLink>
                      <button className="btn btn-secondary mt-2">
                        Grand Total : ₹ 49309
                      </button>
                    </NavLink>
                    <NavLink>
                      <button className="btn btn-secondary mt-2">
                        Paid Amount : ₹ 49309
                      </button>
                    </NavLink>
                    <NavLink>
                      <button className="btn btn-white mt-2">
                        View Product
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className=" pt-3">
                <div className="col-12 d-flex details1 ">
                  <div className="col-1 mt-2 me-2 ">
                    <img className="img-fluid" src={user} alt="nayan"></img>
                  </div>
                  <div className="col-3 mt-2  ">
                    {" "}
                    <ul>
                      <li>Name : abc</li>
                      <li>Company Name : asdjsht</li>
                      <li>Email : asyd@ldsfh.com</li>
                      <li>Contact No : +918743839834</li>
                      <li>Date : 01-03-2023</li>
                      <li>Grand Total : ₹ 9874</li>
                    </ul>
                  </div>
                  <div className="col-3 mt-2 ">
                    <NavLink>
                      <h6 className="highlight-details">Employee Detail :</h6>
                    </NavLink>
                    <ul>
                      <li>Name : Himanshu Anand</li>
                      <li>Designation : Web Developer</li>
                      <li>Email : hv7460@gmail.com</li>
                    </ul>
                  </div>
                  <div className="col-2  mt-2 ">
                    {" "}
                    <NavLink>
                      <h6 className="highlight-details">Payment Detail :</h6>
                    </NavLink>
                    <ul>
                      <li>Date : 05-03-2023</li>
                      <li>Payment type : Cash</li>
                      <li>Paid Amount : ₹ 49309</li>
                    </ul>
                  </div>
                  <div className="col-3">
                    {" "}
                    <NavLink>
                      <button className="btn btn-secondary mt-2">
                        Grand Total : ₹ 49309
                      </button>
                    </NavLink>
                    <NavLink>
                      <button className="btn btn-secondary mt-2">
                        Paid Amount : ₹ 49309
                      </button>
                    </NavLink>
                    <NavLink>
                      <button className="btn btn-white mt-2">
                        View Product
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className=" pt-3">
                <div className="col-12 d-flex details1 ">
                  <div className="col-1 mt-2 me-1">
                    <img className="img-fluid" src={user} alt="nayan"></img>
                  </div>
                  <div className="col-3 mt-2 ">
                    {" "}
                    <ul>
                      <li>Name : abc</li>
                      <li>Company Name : asdjsht</li>
                      <li>Email : asyd@ldsfh.com</li>
                      <li>Contact No : +918743839834</li>
                      <li>Date : 01-03-2023</li>
                      <li>Grand Total : ₹ 9874</li>
                    </ul>
                  </div>
                  <div className="col-3 mt-2 ">
                    <NavLink>
                      <h6 className="highlight-details">Employee Detail :</h6>
                    </NavLink>
                    <ul>
                      <li>Name : Himanshu Anand</li>
                      <li>Designation : Web Developer</li>
                      <li>Email : hv7460@gmail.com</li>
                    </ul>
                  </div>
                  <div className="col-2  mt-2 ">
                    {" "}
                    <NavLink to="#">
                      <h6 className="highlight-details">Payment Detail :</h6>
                    </NavLink>
                    <ul>
                      <li>Date : 05-03-2023</li>
                      <li>Payment type : Cash</li>
                      <li>Paid Amount : ₹ 49309</li>
                    </ul>
                  </div>
                  <div className="col-3">
                    {" "}
                    <NavLink to="#">
                      <button className="btn btn-secondary mt-2">
                        Grand Total : ₹ 49309
                      </button>
                    </NavLink>
                    <NavLink>
                      <button className="btn btn-secondary mt-2">
                        Paid Amount : ₹ 49309
                      </button>
                    </NavLink>
                    <NavLink to="/orderproduct">
                      <button className="btn btn-white mt-2">
                        View Product
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

export default OrderDetails;
