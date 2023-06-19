import React from "react";

import dimg from "../img/dashbord/image 13 (1).png";

import support from "../img/dashbord/8e11c359-67b0-4692-a5e5-c57a74debab3.jpg";

import { NavLink } from "react-router-dom";
import "../css/order.css";

const SiderBox = () => {
  return (
    <>
      <div className="sidebar-boxs  d-flex flex-column m-0 gx-0 sidebar-width mt-3">
        <div className="dash-img d-md-flex pt-3  ">
          <img className="img-fluid imgd h-50" src={dimg} alt="nayan"></img>
          <h4 className="d-h5-text ms-3  me-3 mb-2">CARE FOR EACH</h4>
        </div>

        {/* ul,li flex-column */}
        <ul className="d-flex flex-column  ">
          <li className="uls-style gx-0">
            <NavLink to="/">
              <button className="btn btn-primary   d-md-flex  w-100">
                <i className="fa-solid fa-house mt-1"></i>
                <span className=" li-text ms-md-4">Home</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn2 */}
          <li className="uls-style gx-0">
            <NavLink to="/order">
              <button className="btn btn-danger   d-md-flex w-100">
                <i className="fa-solid fa-grip mt-1"></i>
                <span className="li-text ms-md-4">order</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn3 */}
          <li className="uls-style gx-0">
            <NavLink>
              <button className="btn btn-danger   d-md-flex w-100">
                <i className="fa-solid fa-clipboard-user mt-1"></i>
                <span className="li-text ms-md-4">Attendance</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn4 */}
          <li className="uls-style gx-0">
            <NavLink to="/visitor">
              <button className="btn btn-danger   d-md-flex w-100">
                <i className="fa-solid fa-plane-up mt-1"></i>
                <span className="li-text ms-md-4">Visitor</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn5 */}
          <li className="uls-style gx-0">
            <NavLink to="/employee">
              <button className="btn btn-danger   d-md-flex w-100">
                <i className="fa-solid fa-user mt-1"></i>
                <span className="li-text ms-md-4">Employees</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn6 */}
          <li className="uls-style gx-0">
            <NavLink to="/message">
              <button className="btn btn-danger   d-md-flex w-100">
                <i className="fa-solid fa-comments mt-1"></i>
                <span className="li-text ms-md-4">Messenger</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn  */}

          <li className="uls-style gx-0">
            <NavLink to="/ginniebox">
              <button className="btn btn-danger   d-md-flex w-100">
                <i class="fa-solid fa-box"></i>
                <span className="li-text ms-md-4">Ginnie Box</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn7 */}
          <li className="uls-style gx-0">
            <NavLink to="/product">
              <button className="btn btn-danger   d-md-flex w-100">
                <i className="fa-regular fa-folder mt-1"></i>
                <span className="li-text ms-md-4">Product</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* 8/9 */}
          <li className="uls-style gx-0">
            <NavLink to="/Category">
              <button className="btn btn-danger   d-md-flex w-100">
                <i className="fa-regular fa-folder-open mt-1 "></i>

                <span className="li-text  ms-md-3">Category</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* 9/10 */}
          <li className="uls-style gx-0">
            <NavLink to="/subcategory">
              <button className="btn btn-danger   d-md-flex w-100">
                <i className="fa-regular fa-folder-open mt-1 "></i>

                <span className="li-text  ms-md-3"> sub Category</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn8 */}
          <li className="uls-style gx-0">
            <NavLink to="/leaverequest">
              <button className="btn btn-danger   d-md-flex w-100">
                <i className="fa-regular fa-folder-open mt-1 "></i>
                <span className="li-text  ms-md-3">Leave request</span>
              </button>
            </NavLink>{" "}
          </li>
          {/* btn9 */}
          <li className="uls-style gx-0">
            <NavLink>
              <button className="btn btn-danger   d-md-flex w-100">
                <i className="fa-solid fa-question mt-1"></i>
                <span className="li-text ms-md-4">Complaint</span>
              </button>
            </NavLink>{" "}
          </li>
          {/* btn10 */}
          <li className="uls-style gx-0">
            <NavLink>
              <button className="btn btn-danger   d-md-flex w-100">
                <i className="fa-solid fa-info mt-1"></i>
                <span className="li-text ms-md-4">Report</span>
              </button>
            </NavLink>{" "}
          </li>
          {/* btn11 */}
          <li className="uls-style gx-0">
            <NavLink>
              <button className="btn btn-danger  gx-0 ">
                <img
                  className="img-support img-fluid"
                  src={support}
                  alt="nayan"
                ></img>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn-12 */}
          <li className="uls-style gx-0 ">
            <NavLink>
              <button className="btn btn-danger   d-md-flex w-100 ">
                <i className="fa-solid fa-right-from-bracket mt-1"></i>
                <span className="li-text ms-md-4">Log out</span>
              </button>
            </NavLink>{" "}
          </li>
        </ul>
      </div>
    </>
  );
};

export default SiderBox;
