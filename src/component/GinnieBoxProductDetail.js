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

const GinnieBoxProductDetail = () => {
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
              Ginnie Box Product Detail
            </h2>
          </div>
          {/* grid box banavo ahi khali div ma */}

          <OrderPro></OrderPro>
        </div>
      </div>
    </div>
  );
};

export default GinnieBoxProductDetail;
