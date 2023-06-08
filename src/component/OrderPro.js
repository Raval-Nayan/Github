import React from "react";
import "../css/orderproduct.css";
import image from "../img/image 11.png";

const OrderPro = () => {
  return (
    <div className="grid-product  ">
      <div className="white d-md-flex m-3 text-center p-2">
        <div className="me-3 mt-1">
          <img className="img-fluid img--1" src={image} alt="nayan"></img>
        </div>
        <div className="">
          <h6 className="h6----text">HIGHLANDER</h6>
          <ul className="ul----text">
            <li>Men Slim Fit Solid Cut Away Collar Casual Jacket.</li>
            <li>Product Code : rtx34</li>
            <li>Quantity : 20</li>
            <li>Price : ₹ 19980</li>
            <li>Description : loremloremloremlorem</li>
          </ul>
        </div>
      </div>
      <div className="white d-md-flex m-3 p-1 text-center p-2">
        <div className="me-3">
          <img className="img-fluid img--1" src={image} alt="nayan"></img>
        </div>
        <div className="  ">
          <h6 className="h6----text mt-1">HIGHLANDER</h6>
          <ul className="ul----text">
            <li>Men Slim Fit Solid Cut Away Collar Casual Jacket.</li>
            <li>Product Code : rtx34</li>
            <li>Quantity : 20</li>
            <li>Price : ₹ 19980</li>
            <li>Description : loremloremloremlorem</li>
          </ul>
        </div>
      </div>
      <div className="white d-md-flex m-3 text-center p-2">
        <div className="me-3">
          <img className="img-fluid img--1" src={image} alt="nayan"></img>
        </div>
        <div className="">
          <h6 className="h6----text mt-1">HIGHLANDER</h6>
          <ul className="ul----text">
            <li>Men Slim Fit Solid Cut Away Collar Casual Jacket.</li>
            <li>Product Code : rtx34</li>
            <li>Quantity : 20</li>
            <li>Price : ₹ 19980</li>
            <li>Description : loremloremloremlorem</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderPro;
