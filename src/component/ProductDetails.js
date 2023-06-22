import React from "react";
import "../css/dashbord.css";
import "../css/order.css";
import "../css/employee.css";
import "../css/productdetails.css";

// import { NavLink } from "react-router-dom";

import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";
import "../css/orderdetails.css";
import user from "../img/image 11.png";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const ProductDetails = () => {
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
              Product Details
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

          <div className="color-white">
            <div className="row gx-0">
              <div className="col-md-5 col-12  me-auto d-md-flex product--box justy-content-center mb-3">
                <img
                  className="img-fluid me-md-2 img-position"
                  src={user}
                  alt="nayan"
                ></img>
                <div className="icon-delete-position">
                  <ul>
                    <li>Name : asdfgh</li>
                    <li>Product Code : rtx34</li>
                    <li>Available Stock : 1234</li>
                    <li>Minimum Stock : 25</li>
                    <li>Minimum Price : ₹ 19980</li>
                    <li>Description : loremloremloremlorem</li>
                  </ul>

                  <i class="fa-solid fa-trash delete-icon"></i>

                  <NavLink>
                    <button className="btn btn-primary   ">
                      {" "}
                      Delete Product
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="col-md-5 col-12 d-md-flex product--box justy-content-center mb-3">
                <img className="img-fluid me-md-2" src={user} alt="nayan"></img>
                <div className="icon-delete-position">
                  <ul>
                    <li>Name : asdfgh</li>
                    <li>Product Code : rtx34</li>
                    <li>Available Stock : 1234</li>
                    <li>Minimum Stock : 25</li>
                    <li>Minimum Price : ₹ 19980</li>
                    <li>Description : loremloremloremlorem</li>
                  </ul>

                  <i class="fa-solid fa-trash delete-icon"></i>

                  <NavLink>
                    <button className="btn btn-primary ">
                      {" "}
                      Delete Product
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="col-md-5 col-12  me-auto d-md-flex product--box justy-content-center mb-3">
                <img
                  className="img-fluid me-md-2 img-position"
                  src={user}
                  alt="nayan"
                ></img>
                <div className="icon-delete-position">
                  <ul>
                    <li>Name : asdfgh</li>
                    <li>Product Code : rtx34</li>
                    <li>Available Stock : 1234</li>
                    <li>Minimum Stock : 25</li>
                    <li>Minimum Price : ₹ 19980</li>
                    <li>Description : loremloremloremlorem</li>
                  </ul>

                  <i class="fa-solid fa-trash delete-icon"></i>

                  <NavLink>
                    <button className="btn btn-primary  ">
                      {" "}
                      Delete Product
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="col-md-5 col-12 d-md-flex product--box justy-content-center mb-3">
                <img className="img-fluid me-md-2" src={user} alt="nayan"></img>
                <div className="icon-delete-position">
                  <ul>
                    <li>Name : asdfgh</li>
                    <li>Product Code : rtx34</li>
                    <li>Available Stock : 1234</li>
                    <li>Minimum Stock : 25</li>
                    <li>Minimum Price : ₹ 19980</li>
                    <li>Description : loremloremloremlorem</li>
                  </ul>

                  <i class="fa-solid fa-trash delete-icon"></i>

                  <NavLink>
                    <button className="btn btn-primary ">
                      {" "}
                      Delete Product
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="col-md-5 col-12  me-auto d-md-flex product--box justy-content-center mb-3">
                <img
                  className="img-fluid me-md-2 img-position"
                  src={user}
                  alt="nayan"
                ></img>
                <div className="icon-delete-position">
                  <ul>
                    <li>Name : asdfgh</li>
                    <li>Product Code : rtx34</li>
                    <li>Available Stock : 1234</li>
                    <li>Minimum Stock : 25</li>
                    <li>Minimum Price : ₹ 19980</li>
                    <li>Description : loremloremloremlorem</li>
                  </ul>

                  <i class="fa-solid fa-trash delete-icon"></i>

                  <NavLink>
                    <button className="btn btn-primary  ">
                      {" "}
                      Delete Product
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="col-md-5 col-12 d-md-flex product--box justy-content-center mb-3">
                <img className="img-fluid me-md-2" src={user} alt="nayan"></img>
                <div className="icon-delete-position">
                  <ul>
                    <li>Name : asdfgh</li>
                    <li>Product Code : rtx34</li>
                    <li>Available Stock : 1234</li>
                    <li>Minimum Stock : 25</li>
                    <li>Minimum Price : ₹ 19980</li>
                    <li>Description : loremloremloremlorem</li>
                  </ul>

                  <i class="fa-solid fa-trash delete-icon"></i>

                  <NavLink>
                    <button className="btn btn-primary ">
                      {" "}
                      Delete Product
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

export default ProductDetails;
