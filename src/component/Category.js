import React from "react";
import "../css/dashbord.css";
import "../css/desh.css";
import "../css/category.css";

import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";

// import { NavLink } from "react-router-dom";

const Category = () => {
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
                Category
              </h2>
            </div>

            <div className="category-box-white">
              <div className="row justify-content-center ">
                <div className="col-ms-10 col-11 category-name  mt-3">
                  <h5 className="m-0 ms-2">Category Name</h5>
                  <h5 className="m-0 me-2">GST %</h5>
                </div>
                {/* box2 */}
                <div className="col-ms-10 col-11 category mt-3">
                  <h5 className="m-0 ms-2">Select Category</h5>
                  <div className="side-button ">
                    <span>20</span>
                    <i class="fa-solid fa-pen"></i>
                  </div>
                </div>
                {/* box-3 */}
                <div className="col-ms-10 col-11 category mt-3">
                  <h5 className="m-0 ms-2">Mobile Application</h5>
                  <div className="side-button ">
                    <span>20</span>
                    <i class="fa-solid fa-pen"></i>
                  </div>
                </div>
                {/* box-4 */}
                <div className="col-ms-10 col-11 category mt-3">
                  <h5 className="m-0 ms-2">Digital Marketing</h5>
                  <div className="side-button ">
                    <span>20</span>
                    <i class="fa-solid fa-pen"></i>
                  </div>
                </div>
                {/* box-5 */}
                <div className="col-ms-10 col-11 category mt-3">
                  <h5 className="m-0 ms-2">Web Application</h5>
                  <div className="side-button ">
                    <span>20</span>
                    <i class="fa-solid fa-pen"></i>
                  </div>
                </div>
                {/* box-6 */}
                <div className="col-ms-10 col-11 category mt-3">
                  <h5 className="m-0 ms-2">Graphic Designing</h5>
                  <div className="side-button ">
                    <span>20</span>
                    <i class="fa-solid fa-pen"></i>
                  </div>
                </div>

                {/* box-7 */}
                <div className="col-ms-10 col-11 category mt-3">
                  <h5 className="m-0 ms-2">Customized Software</h5>
                  <div className="side-button ">
                    <span>20</span>
                    <i class="fa-solid fa-pen"></i>
                  </div>
                </div>
                {/* box-8 */}
                <div className="col-ms-10 col-11 category mt-3">
                  <h5 className="m-0 ms-2">Man Power</h5>
                  <div className="side-button ">
                    <span>20</span>
                    <i class="fa-solid fa-pen"></i>
                  </div>
                </div>

                {/* box-9 */}
                <div className="col-ms-10 col-11 category mt-3 mb-5 ">
                  <h5 className="m-0 ms-2">hello</h5>
                  <div className="side-button ">
                    <span>20</span>
                    <i class="fa-solid fa-pen "></i>
                  </div>
                </div>
              </div>

              <button className="btn  add-btn-category">Add Category +</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
