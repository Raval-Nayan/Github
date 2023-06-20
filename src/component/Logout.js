import React from "react";

import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";
import "../css/logout.css";

// import { NavLink } from "react-router-dom";

const Logout = () => {
  return (
    <>
      <div className="container-fluid dash-back-color d-flex">
        {/* display flex , flex column */}
        <SiderBox></SiderBox>
        <div className="d-flex flex-column main">
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
                Logout
              </h2>
            </div>

            <div className="category-box-white align text-center">
              <div className="row">
                <div className="col-3 back-color-blue  ">
                  <h5>Are you sure want to LOGOUT ?</h5>
                  <div className="yes-no-btn">
                    <button className="btn btn-primary w-100 me-2">No</button>
                    <button className="btn btn-primary w-100">Yes</button>
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

export default Logout;
