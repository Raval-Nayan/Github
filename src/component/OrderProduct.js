import React from "react";
import "../css//orderproduct.css";

import "../css/dashbord.css";

// import { NavLink } from "react-router-dom";

import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";
import "../css/orderdetails.css";
// import image from "../img/image 11.png";
// import { NavLink } from "react-router-dom";
import OrderPro from "./OrderPro";
import "../css/dashbord.css";

const OrderProduct = () => {
  return (
    <div className="container-fluid dash-back-color d-flex">
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
              Order Product Detail
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
          {/* grid box banavo ahi khali div ma */}

          <OrderPro></OrderPro>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
