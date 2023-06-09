import React from "react";

import dimg from "../img/dashbord/image 13 (1).png";

import support from "../img/dashbord/8e11c359-67b0-4692-a5e5-c57a74debab3.jpg";

import { NavLink } from "react-router-dom";
import "../css/order.css";
import "../css/sidebarboxs.css";

const SiderBox = () => {
  return (
    <>
      <div className="sidebar-boxs  d-flex flex-column m-0 gx-0 sidebar-width mt-3">
        <div className="dash-img d-md-flex pt-3  ">
          <img className="img-fluid p-2 imgd " src={dimg} alt="nayan"></img>
          <h4 className="d-h5-text ms-3  me-3 mb-2">
            CARE <br /> FOR <br />
            EACH
          </h4>
        </div>

        {/* ul,li flex-column */}
        <ul className="d-flex flex-column  ">
          <li className="uls-style gx-0">
            <NavLink to="/dashbord" className="nav-link  ">
              <button className="btn btn-color icon  d-md-flex  w-100">
                <i className="fa-solid fa-house mt-1"></i>
                <span className=" li-text ms-md-4">Home</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn2 */}
          <li className="uls-style gx-0">
            <NavLink to="/order" className="nav-link">
              <button className="btn  btn-color icon   d-md-flex w-100">
                <i className="fa-solid fa-grip mt-1"></i>
                <span className="li-text ms-md-4">order</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn3 */}
          <li className="uls-style gx-0">
            <NavLink to="/attendance" className="nav-link">
              <button className="btn  icon  btn-color d-md-flex w-100">
                <i className="fa-solid fa-clipboard-user mt-1"></i>
                <span className="li-text ms-md-4">Attendance</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn4 */}
          <li className="uls-style gx-0">
            <NavLink to="/visitor" className="nav-link">
              <button className="btn icon btn-color   d-md-flex w-100">
                <i className="fa-solid fa-plane-up mt-1"></i>
                <span className="li-text ms-md-4">Visitor</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn5 */}
          <li className="uls-style gx-0">
            <NavLink to="/employee" className="nav-link">
              <button className="btn icon btn-color   d-md-flex w-100">
                <i className="fa-solid fa-user mt-1"></i>
                <span className="li-text ms-md-4">Employees</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn6 */}
          <li className="uls-style gx-0">
            <NavLink to="/message" className="nav-link">
              <button className="btn icon btn-color   d-md-flex w-100">
                <i className="fa-solid fa-comments mt-1"></i>
                <span className="li-text ms-md-4">Messenger</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn  */}

          <li className="uls-style gx-0">
            <NavLink to="/ginniebox" className="nav-link">
              <button className="btn icon btn-color   d-md-flex w-100">
                <i class="fa-solid fa-box"></i>
                <span className="li-text ms-md-4">Ginnie Box</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn7 */}
          <li className="uls-style gx-0">
            <NavLink to="/product" className="nav-link">
              <button className="btn icon btn-color   d-md-flex w-100">
                <i className="fa-regular fa-folder mt-1"></i>
                <span className="li-text ms-md-4">Product</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* 8/9 */}
          <li className="uls-style gx-0">
            <NavLink to="/Category" className="nav-link">
              <button className="btn icon btn-color   d-md-flex w-100">
                <i className="fa-regular fa-folder-open mt-1 "></i>

                <span className="li-text  ms-md-3">Category</span>
              </button>
            </NavLink>{" "}
          </li>

          {/* 9/10 */}
          <li className="uls-style gx-0">
            <NavLink to="/subcategory" className="nav-link">
              <button className="btn icon btn-color   d-md-flex w-100">
                <i className="fa-regular fa-folder-open mt-1 "></i>

                <span className="li-text  ms-md-3" style={{ fontSize: "12px" }}>
                  {" "}
                  sub Category
                </span>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn8 */}
          <li className="uls-style gx-0">
            <NavLink to="/leaverequest" className="nav-link">
              <button className="btn icon btn-color   d-md-flex w-100">
                <i className="fa-regular fa-folder-open mt-1 "></i>
                <span className="li-text  ms-md-3" style={{ fontSize: "12px" }}>
                  Leave request
                </span>
              </button>
            </NavLink>{" "}
          </li>
          {/* btn9 */}
          <li className="uls-style gx-0">
            <NavLink to="/complaint" className="nav-link">
              <button className="btn icon  btn-color   d-md-flex w-100">
                <i className="fa-solid fa-question mt-1"></i>
                <span className="li-text ms-md-4">Complaint</span>
              </button>
            </NavLink>{" "}
          </li>
          {/* btn10 */}
          <li className="uls-style gx-0">
            <NavLink to="/report" className="nav-link">
              <button className="btn icon btn-color   d-md-flex w-100">
                <i className="fa-solid fa-info mt-1"></i>
                <span className="li-text ms-md-4">Report</span>
              </button>
            </NavLink>{" "}
          </li>
          {/* btn11 */}
          <li className="uls-style gx-0">
            <NavLink className="nav-link d-flex ">
              <button className="btn btn-danger  gx-0 ">
                <div className="d-flex ">
                  <img
                    className="img-support w-50   img-fluid"
                    src={support}
                    alt="nayan"
                  ></img>
                </div>
              </button>
            </NavLink>{" "}
          </li>

          {/* btn-12 */}
          <li className="uls-style gx-0 ">
            <NavLink to="/logout" className="nav-link btn-color-navlink">
              <button className="btn icon btn-color   d-md-flex w-100 ">
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
