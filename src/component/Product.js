import React from "react";
import "../css/dashbord.css";
import "../css/order.css";
import "../css/employee.css";

// import { NavLink } from "react-router-dom";

import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";
import "../css/orderdetails.css";
import user from "../img/image 11.png";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Product = () => {
  return (
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
              Product
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
          {/* div grid banavo */}

          <div className="postion">
            <div className="back-----color ">
              <div className="background d-flex  ">
                <div className="me-2 m-2">
                  {" "}
                  <img className="img-fluid " src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Name : kagkuh</li>
                    <li>Code : my09e</li>
                    <li>Stock : 9082</li>
                    <li>Price : 1305</li>
                    <li>Description : sftctc diufvb iuvfb</li>
                  </ul>
                </div>
              </div>

              {/* box2 */}
              <div className="background d-flex">
                <div className="me-2 m-2">
                  {" "}
                  <img className="img-fluid " src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Name : kagkuh</li>
                    <li>Code : my09e</li>
                    <li>Stock : 9082</li>
                    <li>Price : 1305</li>
                    <li>Description : sftctc diufvb iuvfb</li>
                  </ul>
                </div>
              </div>
              {/* box-3 */}
              <div className="background d-flex">
                <div className="me-2 m-2">
                  {" "}
                  <img className="img-fluid " src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Name : kagkuh</li>
                    <li>Code : my09e</li>
                    <li>Stock : 9082</li>
                    <li>Price : 1305</li>
                    <li>Description : sftctc diufvb iuvfb</li>
                  </ul>
                </div>
              </div>
              {/* box-4 */}
              <div className="background d-flex">
                <div className="me-2 m-2">
                  {" "}
                  <img className="img-fluid " src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Name : kagkuh</li>
                    <li>Code : my09e</li>
                    <li>Stock : 9082</li>
                    <li>Price : 1305</li>
                    <li>Description : sftctc diufvb iuvfb</li>
                  </ul>
                </div>
              </div>
              {/* box5 */}
              <div className="background d-flex">
                <div className="me-2 m-2">
                  {" "}
                  <img className="img-fluid " src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Name : kagkuh</li>
                    <li>Code : my09e</li>
                    <li>Stock : 9082</li>
                    <li>Price : 1305</li>
                    <li>Description : sftctc diufvb iuvfb</li>
                  </ul>
                </div>
              </div>
              {/* box 6 */}

              <div className="background d-flex">
                <div className="me-2 m-2">
                  {" "}
                  <img className="img-fluid " src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Name : kagkuh</li>
                    <li>Code : my09e</li>
                    <li>Stock : 9082</li>
                    <li>Price : 1305</li>
                    <li>Description : sftctc diufvb iuvfb</li>
                  </ul>
                </div>
              </div>

              {/* box7 */}
              <div className="background d-flex">
                <div className="me-2 m-2">
                  {" "}
                  <img className="img-fluid " src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Name : kagkuh</li>
                    <li>Code : my09e</li>
                    <li>Stock : 9082</li>
                    <li>Price : 1305</li>
                    <li>Description : sftctc diufvb iuvfb</li>
                  </ul>
                </div>
              </div>
              {/* box8 */}
              <div className="background d-flex">
                <div className="me-2 m-2">
                  {" "}
                  <img className="img-fluid " src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Name : kagkuh</li>
                    <li>Code : my09e</li>
                    <li>Stock : 9082</li>
                    <li>Price : 1305</li>
                    <li>Description : sftctc diufvb iuvfb</li>
                  </ul>
                </div>
              </div>

              {/* box 9 */}
              <div className="background d-flex">
                <div className="me-2 m-2">
                  {" "}
                  <img className="img-fluid " src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Name : kagkuh</li>
                    <li>Code : my09e</li>
                    <li>Stock : 9082</li>
                    <li>Price : 1305</li>
                    <li>Description : sftctc diufvb iuvfb</li>
                  </ul>
                </div>
              </div>
              {/* box10 */}
              <div className="background d-flex">
                <div className="me-2 m-2">
                  {" "}
                  <img className="img-fluid " src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Name : kagkuh</li>
                    <li>Code : my09e</li>
                    <li>Stock : 9082</li>
                    <li>Price : 1305</li>
                    <li>Description : sftctc diufvb iuvfb</li>
                  </ul>
                </div>
              </div>

              {/* box11 */}
              <div className="background d-flex">
                <div className="me-2 m-2">
                  {" "}
                  <img className="img-fluid " src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Name : kagkuh</li>
                    <li>Code : my09e</li>
                    <li>Stock : 9082</li>
                    <li>Price : 1305</li>
                    <li>Description : sftctc diufvb iuvfb</li>
                  </ul>
                </div>
              </div>

              {/* box12 */}
              <div className="background d-flex">
                <div className="me-2 m-2">
                  {" "}
                  <img className="img-fluid " src={user} alt="nayan"></img>
                </div>

                <div className="tetx-----div">
                  <ul>
                    <li>Name : kagkuh</li>
                    <li>Code : my09e</li>
                    <li>Stock : 9082</li>
                    <li>Price : 1305</li>
                    <li>Description : sftctc diufvb iuvfb</li>
                  </ul>
                </div>
              </div>
            </div>

            <NavLink to="/addproduct">
              <button className="add-button mt-2" style={{ color: "white" }}>
                {" "}
                <span className="text "> Add Product +</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
