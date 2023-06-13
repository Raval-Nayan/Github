import React from "react";
import "../css/addemployee.css";
import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";
import "../css/orderdetails.css";
import uplode from "../img/uplod.png";
import { NavLink } from "react-router-dom";
import "../css/dashbord.css";
import "../css/order.css";
import "../css/addproduct.css";
// import { NavLink } from "react-bootstrap";

const AddProduct = () => {
  return (
    <>
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
                Add Product
              </h2>
              <div className="d-md-flex  w-25  ">
                {/* btn 1  */}

                <select className=" select-box w-100 h-50">
                  <option className="option-box">All</option>
                  <option className="option-box">This Year</option>
                  <option className="option-box">This Month</option>
                  <option className="option-box">Today</option>
                </select>

                <select className=" select-box ms-md-2 w-100 h-50">
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
              <div className="row data-style gx-0">
                <div className="col-md-5 col-10  me-md-5">
                  <div className="uplode-back-color">
                    <img
                      className="img-fluid p-3"
                      src={uplode}
                      alt="nayan"
                    ></img>
                  </div>

                  <form>
                    <input
                      type="text"
                      placeholder="  Product Name"
                      className="inputdesign mt-2 w-100  productname-color "
                    ></input>

                    <input
                      type="number"
                      placeholder=" Product Code"
                      className="inputdesign mt-2 w-100"
                    ></input>

                    <input
                      type="number"
                      placeholder="  Product Price"
                      className="inputdesign mt-2 w-100"
                    ></input>
                  </form>
                </div>
                <div className="col-md-4 col-10  mt-md-5 me-md-5">
                  <div className="phone-design d-flex flex-column me-md-auto    my-md-5 ">
                    <input
                      type="number"
                      placeholder="  Minimum Selling Price"
                      className="inputdesign mt-2"
                    ></input>
                    <input
                      type="number"
                      placeholder="  Product Stock"
                      className="inputdesign mt-2"
                    ></input>
                    <input
                      type="number"
                      placeholder=" Minimum Stock"
                      className="inputdesign mt-2"
                    ></input>
                    <textarea
                      className="mt-2 text-area"
                      id="story"
                      name="story"
                      rows="5"
                      cols="33"
                      placeholder="  Description :"
                    ></textarea>
                    <NavLink to="/productdetails">
                      <button
                        className="btn btn-sucess mt-5 w-100 mb-3"
                        style={{ color: "white " }}
                      >
                        <span style={{ color: "white", fontFamily: "Poppins" }}>
                          Add Product
                        </span>
                      </button>
                    </NavLink>
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

export default AddProduct;
