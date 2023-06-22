import React from "react";
import "../css/dashbord.css";
import "../css/desh.css";
import "../css/category.css";

import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";

// import { NavLink } from "react-router-dom";

const SubCategory = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                Sub Category
              </h2>
            </div>

            <div className="category-box-white">
              <div className="row justify-content-center ">
                <div className="col-ms-10 col-11 category-name  mt-3">
                  <div className="w-75">
                    <h5 className="m-0 ms-sm-2  h5-text ">SubCategory</h5>
                  </div>
                  <div className="w-25 ">
                    <h5 className="m-0 me-sm-2 h5-text">Category</h5>
                  </div>
                </div>
                {/* box2 */}
                <div className="col-ms-10 col-11 category mt-3">
                  <h5 className="m-0 ms-2">Android Application</h5>
                  <div className=" side-category-box ">
                    <span>Mobile Application</span>
                    <i
                      className="fa-solid fa-pen ms-2"
                      onClick={handleShow}
                    ></i>
                  </div>
                </div>
                {/* box-3 */}
                <div className="col-ms-10 col-11 category mt-3">
                  <h5 className="m-0 ms-2">Social Media</h5>
                  <div className="side-category-box ">
                    <span>Digital Marketing</span>
                    <i class="fa-solid fa-pen" onClick={handleShow}></i>
                  </div>
                </div>
                {/* box-4 */}
                <div className="col-ms-10 col-11 category mt-3">
                  <h5 className="m-0 ms-2">IOS</h5>
                  <div className="side-category-box  ">
                    <span>Mobile Application</span>
                    <i class="fa-solid fa-pen" onClick={handleShow}></i>
                  </div>
                </div>
                {/* box-5 */}
                <div className="col-ms-10 col-11 category mt-3">
                  <h5 className="m-0 ms-2">Windows</h5>
                  <div className="side-category-box  ">
                    <span>Mobile Application</span>
                    <i class="fa-solid fa-pen" onClick={handleShow}></i>
                  </div>
                </div>
                {/* box-6 */}
                <div className="col-ms-10 col-11 category mt-3">
                  <h5 className="m-0 ms-2">Operators</h5>
                  <div className="side-category-box ">
                    <span>Customized Software</span>
                    <i class="fa-solid fa-pen" onClick={handleShow}></i>
                  </div>
                </div>

                {/* box-7 */}
                <div className="col-ms-10 col-11 category mt-3">
                  <h5 className="m-0 ms-2">Hello1</h5>
                  <div className="side-category-box  ">
                    <span>Man Power</span>
                    <i class="fa-solid fa-pen" onClick={handleShow}></i>
                  </div>
                </div>

                {/* box-9 */}
              </div>

              <NavLink to="/addnewsubcategory">
                {" "}
                <button className="btn  add-sub-btn"> Add Category +</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        className=""
        backdrop="static"
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>Edit Sub-Category :</Modal.Header>
        <Modal.Body className=" edit-categoty px-3">
          {" "}
          <div>
            <button
              className="btn w-100"
              style={{ color: "#3B968A", border: "1px solid #3B968A" }}
            >
              Mobile Application
            </button>
          </div>
          <div>
            {" "}
            <button
              className="btn w-100 mt-2"
              style={{ color: "#3B968A", border: "1px solid #3B968A" }}
            >
              Android Application
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer className="my-1">
          <NavLink to="#">
            <Button variant="primary" className="w-100" onClick={handleClose}>
              Delete
            </Button>
          </NavLink>
          <NavLink to="#">
            <Button variant="primary" className="w-100" onClick={handleClose}>
              Edit
            </Button>
          </NavLink>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SubCategory;
