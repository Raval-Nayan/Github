import React from "react";
import "../css/dashbord.css";
import "../css/desh.css";
import "../css/addnewcategory.css";

import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const AddNewCategory = () => {
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
                Add New Category
              </h2>
            </div>

            <div className="category-box-white">
              <div className="row justify-content-center ">
                <div className="col-ms-10 col-12  category-name  mt-1">
                  <h5 className="m-0 ms-1">Category Name</h5>
                  <h5 className="m-0 me-1">GST %</h5>
                </div>
              </div>

              <div className="m-4">
                <div className="row justify-content-center ">
                  <div className="col-sm-9 m-3  addcategory">
                    <div className="col-sm-8 m-auto mt-1">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Enter Category Name "
                        className="my-2  "
                      >
                        <Form.Control
                          type="text"
                          placeholder="    "
                          className="border----bottom  w-100"
                          style={{ backgroundColor: "#D3E0FF" }}
                        />
                      </FloatingLabel>

                      <FloatingLabel
                        controlId="floatingInput"
                        label="ADD GST % "
                        className="my-1  "
                      >
                        <Form.Control
                          type="text"
                          placeholder="    "
                          className="border----bottom  w-100"
                        />
                      </FloatingLabel>

                      <div className="d-flex justify-content-center">
                        <button className="btn btn-primary font m-1 button-width-addcategory ">
                          <span>Save Category</span>
                        </button>
                      </div>
                    </div>
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

export default AddNewCategory;
