import React from "react";

// import Ordergrid from "./component/Ordergrid";
import SiderBox from "./component/SiderBox";

import user from "./img/user.png";
import { NavLink } from "react-router-dom";
import SearchBox from "./component/SearchBox";
import "./css/order.css";

const Order = () => {
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
              Order
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

          <div className=" oreder-grid   ">
            {/* item 1 */}
            <NavLink to="/orderdetails " className="nav-link">
              <div className="center-align">
                {" "}
                <div className="item d-flex  ">
                  <div className="m-2 ">
                    <img className="  img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="m-2">
                    <ul clasname="ul-item">
                      <li className="li-item">Name : abc</li>
                      <li className="li-item">Company Name : asdjsht</li>
                      <li className="li-item">Email : asyd@ldsfh.com</li>
                      <li className="li-item">Contact No : +918743839834</li>
                      <li className="li-item">Date : 01-03-2023</li>
                      <li className="li-item">Grand Total : ₹ 9874 </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavLink>

            {/* item2 */}
            <NavLink to="/orderdetails" className="nav-link">
              <div className="center-align">
                {" "}
                <div className="item d-flex  ">
                  <div className="m-2 ">
                    <img className="  img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="m-2">
                    <ul clasname="ul-item">
                      <li className="li-item">Name : abc</li>
                      <li className="li-item">Company Name : asdjsht</li>
                      <li className="li-item">Email : asyd@ldsfh.com</li>
                      <li className="li-item">Contact No : +918743839834</li>
                      <li className="li-item">Date : 01-03-2023</li>
                      <li className="li-item">Grand Total : ₹ 9874 </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavLink>

            {/* item3 */}
            <NavLink to="/orderdetails" className="nav-link">
              <div className="center-align">
                {" "}
                <div className="item d-flex  ">
                  <div className="m-2 ">
                    <img className="  img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="m-2">
                    <ul clasname="ul-item">
                      <li className="li-item">Name : abc</li>
                      <li className="li-item">Company Name : asdjsht</li>
                      <li className="li-item">Email : asyd@ldsfh.com</li>
                      <li className="li-item">Contact No : +918743839834</li>
                      <li className="li-item">Date : 01-03-2023</li>
                      <li className="li-item">Grand Total : ₹ 9874 </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavLink>

            {/* item 4 */}
            <NavLink to="/orderdetails" className="nav-link">
              <div className="center-align">
                {" "}
                <div className="item d-flex  ">
                  <div className="m-2 ">
                    <img className="  img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="m-2">
                    <ul clasname="ul-item">
                      <li className="li-item">Name : abc</li>
                      <li className="li-item">Company Name : asdjsht</li>
                      <li className="li-item">Email : asyd@ldsfh.com</li>
                      <li className="li-item">Contact No : +918743839834</li>
                      <li className="li-item">Date : 01-03-2023</li>
                      <li className="li-item">Grand Total : ₹ 9874 </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavLink>

            {/* item 5 */}
            <NavLink to="/orderdetails" className="nav-link">
              <div className="center-align">
                {" "}
                <div className="item d-flex  ">
                  <div className="m-2 ">
                    <img className="  img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="m-2">
                    <ul clasname="ul-item">
                      <li className="li-item">Name : abc</li>
                      <li className="li-item">Company Name : asdjsht</li>
                      <li className="li-item">Email : asyd@ldsfh.com</li>
                      <li className="li-item">Contact No : +918743839834</li>
                      <li className="li-item">Date : 01-03-2023</li>
                      <li className="li-item">Grand Total : ₹ 9874 </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavLink>

            {/* item 6 */}

            <NavLink to="/orderdetails" className="nav-link">
              <div className="center-align">
                {" "}
                <div className="item d-flex  ">
                  <div className="m-2 ">
                    <img className="  img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="m-2">
                    <ul clasname="ul-item">
                      <li className="li-item">Name : abc</li>
                      <li className="li-item">Company Name : asdjsht</li>
                      <li className="li-item">Email : asyd@ldsfh.com</li>
                      <li className="li-item">Contact No : +918743839834</li>
                      <li className="li-item">Date : 01-03-2023</li>
                      <li className="li-item">Grand Total : ₹ 9874 </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavLink>

            {/* item 7 */}
            <NavLink to="/orderdetails" className="nav-link">
              <div className="center-align">
                {" "}
                <div className="item d-flex  ">
                  <div className="m-2 ">
                    <img className="  img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="m-2">
                    <ul clasname="ul-item">
                      <li className="li-item">Name : abc</li>
                      <li className="li-item">Company Name : asdjsht</li>
                      <li className="li-item">Email : asyd@ldsfh.com</li>
                      <li className="li-item">Contact No : +918743839834</li>
                      <li className="li-item">Date : 01-03-2023</li>
                      <li className="li-item">Grand Total : ₹ 9874 </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavLink>

            {/* item 8 */}

            <NavLink to="/orderdetails" className="nav-link">
              <div className="center-align">
                {" "}
                <div className="item d-flex  ">
                  <div className="m-2 ">
                    <img className="  img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="m-2">
                    <ul clasname="ul-item">
                      <li className="li-item">Name : abc</li>
                      <li className="li-item">Company Name : asdjsht</li>
                      <li className="li-item">Email : asyd@ldsfh.com</li>
                      <li className="li-item">Contact No : +918743839834</li>
                      <li className="li-item">Date : 01-03-2023</li>
                      <li className="li-item">Grand Total : ₹ 9874 </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavLink>

            {/* item 9 */}

            <NavLink to="/orderdetails" className="nav-link">
              <div className="center-align">
                {" "}
                <div className="item d-flex  ">
                  <div className="m-2 ">
                    <img className="  img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="m-2">
                    <ul clasname="ul-item">
                      <li className="li-item">Name : abc</li>
                      <li className="li-item">Company Name : asdjsht</li>
                      <li className="li-item">Email : asyd@ldsfh.com</li>
                      <li className="li-item">Contact No : +918743839834</li>
                      <li className="li-item">Date : 01-03-2023</li>
                      <li className="li-item">Grand Total : ₹ 9874 </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavLink>

            {/* item 10 */}
            <NavLink to="/orderdetails" className="nav-link">
              <div className="center-align">
                {" "}
                <div className="item d-flex  ">
                  <div className="m-2 ">
                    <img className="  img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="m-2">
                    <ul clasname="ul-item">
                      <li className="li-item">Name : abc</li>
                      <li className="li-item">Company Name : asdjsht</li>
                      <li className="li-item">Email : asyd@ldsfh.com</li>
                      <li className="li-item">Contact No : +918743839834</li>
                      <li className="li-item">Date : 01-03-2023</li>
                      <li className="li-item">Grand Total : ₹ 9874 </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavLink>

            {/* item 11 */}
            <NavLink to="/orderdetails" className="nav-link">
              <div className="center-align">
                {" "}
                <div className="item d-flex  ">
                  <div className="m-2 ">
                    <img className="  img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="m-2">
                    <ul clasname="ul-item">
                      <li className="li-item">Name : abc</li>
                      <li className="li-item">Company Name : asdjsht</li>
                      <li className="li-item">Email : asyd@ldsfh.com</li>
                      <li className="li-item">Contact No : +918743839834</li>
                      <li className="li-item">Date : 01-03-2023</li>
                      <li className="li-item">Grand Total : ₹ 9874 </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavLink>
            {/* item 12 */}

            <NavLink to="/orderdetails" className="nav-link ">
              <div className="center-align">
                {" "}
                <div className="item d-flex  ">
                  <div className="m-2 ">
                    <img className="  img-fluid" src={user} alt="nayan"></img>
                  </div>

                  <div className="m-2">
                    <ul clasname="ul-item">
                      <li className="li-item">Name : abc</li>
                      <li className="li-item">Company Name : asdjsht</li>
                      <li className="li-item">Email : asyd@ldsfh.com</li>
                      <li className="li-item">Contact No : +918743839834</li>
                      <li className="li-item">Date : 01-03-2023</li>
                      <li className="li-item">Grand Total : ₹ 9874 </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
