import React from "react";

import "../css/dashbord.css";

import avtar from "../img/dashbord/photo.png";

import "../css/order.css";

const SearchBox = () => {
  return (
    <div className="search-box mt-4 ">
      <div className="w-50 search-input">
        <input
          className="form-control search  "
          type="text"
          placeholder="search"
        ></input>
        <span className="search-icon mt-1">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
      <div className="ms-md-auto mt-md-0 mt-3">
        <button className="btn btn-dark ms-1">
          <i className="fa-solid fa-message"></i>
        </button>
        <buuton className="btn btn-dark ms-3">
          <i className="fa-solid fa-bell"></i>
        </buuton>
        <button className="btn btn-info dropdown-toggle ms-3">
          <img className="img-fluid me-1" src={avtar} alt="nayan"></img>
          Your Profile
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
