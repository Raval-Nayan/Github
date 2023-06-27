import React from "react";

// import { NavLink } from "react-router-dom";

import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";
import "../css/orderdetails.css";
import user from "../img/user.png";
import { NavLink } from "react-router-dom";
import "../css/dashbord.css";
import "../css/orderdetails.css";

const GinnieBoxDetail = () => {
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
              Ginnie Box Product Detail
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

          <div className="back-color-white">
            {/* box1 */}
            <div className="row details1 ">
              <div className="col-lg-1 col-sm-5 p-0">
                <img className="img-fluid" src={user} alt="nayan"></img>
              </div>
              <div className="col-lg-3 col-sm-6 p-0">
                {" "}
                <ul className=" ms-2 ">
                  <li className="">Name : abc</li>
                  <li>Company Name : asdjsht</li>
                  <li>Email : asyd@ldsfh.com</li>
                  <li>Contact No : +918743839834</li>
                  <li>Date : 01-03-2023</li>
                  <li>Grand Total : ₹ 9874</li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-5 p-0">
                {" "}
                <div className="">
                  <NavLink>
                    <h6 className="highlight-details ">Employee Detail :</h6>
                  </NavLink>
                  <ul>
                    <li>Name : Himanshu Anand</li>
                    <li>Designation : Web Developer</li>
                    <li>Email : hv7460@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 p-0">
                {" "}
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
              <div className="col-lg-2 col-sm-12 p-0">
                <div className=" ms-2 d-lg-flex flex-md-column ">
                  {" "}
                  <NavLink>
                    <button className="btn btn-secondary mt-2  me-1 w-100">
                      Grand Total : ₹ 49309
                    </button>
                  </NavLink>
                  <NavLink>
                    <button className="btn btn-secondary mt-2 me-1 w-100 ">
                      Paid Amount : ₹ 49309
                    </button>
                  </NavLink>
                  <NavLink to="/ginnieboxproductdetail">
                    <button className="btn btn-white mt-2 me-1 w-100">
                      View Product
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* box 2 */}

            <div className="row details1 my-3">
              <div className="col-lg-1 col-sm-5 p-0">
                <img className="img-fluid" src={user} alt="nayan"></img>
              </div>
              <div className="col-lg-3 col-sm-6 p-0">
                {" "}
                <ul className="ms-2 ">
                  <li className="">Name : abc</li>
                  <li>Company Name : asdjsht</li>
                  <li>Email : asyd@ldsfh.com</li>
                  <li>Contact No : +918743839834</li>
                  <li>Date : 01-03-2023</li>
                  <li>Grand Total : ₹ 9874</li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-5 p-0">
                {" "}
                <div className="">
                  <NavLink>
                    <h6 className="highlight-details ">Employee Detail :</h6>
                  </NavLink>
                  <ul>
                    <li>Name : Himanshu Anand</li>
                    <li>Designation : Web Developer</li>
                    <li>Email : hv7460@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 p-0">
                {" "}
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
              <div className="col-lg-2 col-sm-12 p-0">
                <div className=" ms-2 d-lg-flex flex-md-column ">
                  {" "}
                  <NavLink>
                    <button className="btn btn-secondary mt-2  me-1 w-100 ">
                      Grand Total : ₹ 49309
                    </button>
                  </NavLink>
                  <NavLink>
                    <button className="btn btn-secondary mt-2 me-1 w-100 ">
                      Paid Amount : ₹ 49309
                    </button>
                  </NavLink>
                  <NavLink to="/ginnieboxproductdetail">
                    <button className="btn btn-white mt-2 me-1 w-100 ">
                      View Product
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* box 3 */}
            <div className="row details1 my-3">
              <div className="col-lg-1 col-sm-5 p-0">
                <img className="img-fluid" src={user} alt="nayan"></img>
              </div>
              <div className="col-lg-3 col-sm-6 p-0">
                {" "}
                <ul className="ms-2 ">
                  <li className="">Name : abc</li>
                  <li>Company Name : asdjsht</li>
                  <li>Email : asyd@ldsfh.com</li>
                  <li>Contact No : +918743839834</li>
                  <li>Date : 01-03-2023</li>
                  <li>Grand Total : ₹ 9874</li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-5 p-0">
                {" "}
                <div className="">
                  <NavLink>
                    <h6 className="highlight-details ">Employee Detail :</h6>
                  </NavLink>
                  <ul>
                    <li>Name : Himanshu Anand</li>
                    <li>Designation : Web Developer</li>
                    <li>Email : hv7460@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 p-0">
                {" "}
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
              <div className="col-lg-2 col-sm-12 p-0">
                <div className=" ms-2 d-lg-flex flex-md-column ">
                  {" "}
                  <NavLink>
                    <button className="btn btn-secondary mt-2  me-1 w-100">
                      Grand Total : ₹ 49309
                    </button>
                  </NavLink>
                  <NavLink>
                    <button className="btn btn-secondary mt-2 me-1 w-100 ">
                      Paid Amount : ₹ 49309
                    </button>
                  </NavLink>
                  <NavLink to="/ginnieboxproductdetail">
                    <button className="btn btn-white mt-2 me-1  w-100">
                      View Product
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* box 4 */}
            <div className="row details1 ">
              <div className="col-lg-1 col-sm-5 p-0">
                <img className="img-fluid" src={user} alt="nayan"></img>
              </div>
              <div className="col-lg-3 col-sm-6 p-0">
                {" "}
                <ul className="ms-2 ">
                  <li className="">Name : abc</li>
                  <li>Company Name : asdjsht</li>
                  <li>Email : asyd@ldsfh.com</li>
                  <li>Contact No : +918743839834</li>
                  <li>Date : 01-03-2023</li>
                  <li>Grand Total : ₹ 9874</li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-5 p-0">
                {" "}
                <div className="">
                  <NavLink>
                    <h6 className="highlight-details ">Employee Detail :</h6>
                  </NavLink>
                  <ul>
                    <li>Name : Himanshu Anand</li>
                    <li>Designation : Web Developer</li>
                    <li>Email : hv7460@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 p-0">
                {" "}
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
              <div className="col-lg-2 col-sm-12 p-0">
                <div className=" ms-2 d-lg-flex flex-md-column ">
                  {" "}
                  <NavLink>
                    <button className="btn btn-secondary mt-2  me-1 w-100">
                      Grand Total : ₹ 49309
                    </button>
                  </NavLink>
                  <NavLink>
                    <button className="btn btn-secondary mt-2 me-1 w-100 ">
                      Paid Amount : ₹ 49309
                    </button>
                  </NavLink>
                  <NavLink to="/ginnieboxproductdetail">
                    <button className="btn btn-white mt-2 me-1 w-100">
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
  );
};

export default GinnieBoxDetail;
