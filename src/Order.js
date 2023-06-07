import React from "react";

import "./css/dashbord.css";

import "./css/order.css";
import SiderBox from "./component/SiderBox";

import Ordergrid from "./component/Ordergrid";
import SearchBox from "./component/SearchBox";

const Order = () => {
  return (
    <div className="container-fluid dash-back-color d-flex">
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
          <div className="order-box">
            <h2
              className="mt-1 mb-3"
              style={{
                color: " #091F57",
                fontWeight: "600",
                fontFamily: "Poppins",
              }}
            >
              Order
            </h2>
            <div className="d-flex">
              {/* btn 1  */}

              <select className=" select-box">
                <option className="option-box">All</option>
                <option className="option-box">This Year</option>
                <option className="option-box">This Month</option>
                <option className="option-box">Today</option>
              </select>

              <select className="ms-3 select-box">
                <option className="option-box">abc</option>
                <option className="option-box">def</option>
                <option className="option-box">ghi</option>
                <option className="option-box">jkl</option>
                <option className="option-box">mno</option>
              </select>
            </div>
          </div>
          {/* grid box banavo ahi khali div ma */}

          <Ordergrid></Ordergrid>
        </div>
      </div>
    </div>
  );
};

export default Order;
