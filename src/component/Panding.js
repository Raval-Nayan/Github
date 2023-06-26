import React from "react";
import "../css/dashbord.css";
import "../css/order.css";
import "../css/employee.css";
import "../css/productdetails.css";
import "../css/leaverequest.css";
import yellow from "../img/circle yellow.png";

// import { NavLink } from "react-router-dom";

import SearchBox from "../component/SearchBox";
import SiderBox from "../component/SiderBox";
import "../css/orderdetails.css";
import user from "../img/user.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Panding = () => {
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
                Leave Request
              </h2>
              <div className="d-flex   ">
                {/* group1 */}
                <div>
                  {" "}
                  {/* btn 1  */}
                  <NavLink to="/leaverequest">
                    {" "}
                    <button className="btn btn-light ms-2 mb-2 mb-md-0 btn-green">
                      All
                    </button>
                  </NavLink>
                  {/* btn2 */}
                  <NavLink to="/panding">
                    {" "}
                    <button className="btn btn-light blue-btn-2 ms-2">
                      Pending
                    </button>
                  </NavLink>
                </div>

                {/* group2 */}
                <div>
                  {/* btn3 */}
                  <NavLink to="/approved">
                    <button className="btn btn-light ms-2 mb-2  mb-md-0  btn-green  ">
                      Approved
                    </button>
                  </NavLink>
                  {/* btn4 */}
                  <NavLink to="/rejected">
                    {" "}
                    <button className="btn btn-light ms-2 btn-green">
                      Rejected
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            {/* div grid banavo */}

            <div className=" oreder-grid   mb-2 mt-2 ">
              {/* item 1 */}
              <div className="item d-flex  " onClick={handleShow}>
                <div className="me-2">
                  <img className=" img-fluid me-2" src={user} alt="nayan"></img>
                </div>

                <div className="circle-icon-position">
                  <ul clasname="ul-item">
                    <li className="li-item">Name : kagkuh</li>
                    <li className="li-item">Designation : asdfghj</li>
                    <li className="li-item">Start Date : 09-08-2023</li>
                    <li className="li-item">End Date : 11-09-2023</li>
                    <li className="li-item">Reason : asdfg sdfghj dfghj </li>
                  </ul>
                  <img className="circle-icon" src={yellow} alt="nayan"></img>
                </div>
              </div>

              {/* item2 */}
              <div className="item d-flex  " onClick={handleShow}>
                <div className="me-2">
                  <img className=" img-fluid me-2" src={user} alt="nayan"></img>
                </div>

                <div className="circle-icon-position">
                  <ul clasname="ul-item">
                    <li className="li-item">Name : kagkuh</li>
                    <li className="li-item">Designation : asdfghj</li>
                    <li className="li-item">Start Date : 09-08-2023</li>
                    <li className="li-item">End Date : 11-09-2023</li>
                    <li className="li-item">Reason : asdfg sdfghj dfghj </li>
                  </ul>
                  <img className="circle-icon" src={yellow} alt="nayan"></img>
                </div>
              </div>

              {/* item3 */}
              <div className="item d-flex  " onClick={handleShow}>
                <div className="me-2">
                  <img className=" img-fluid me-2" src={user} alt="nayan"></img>
                </div>

                <div className="circle-icon-position">
                  <ul clasname="ul-item">
                    <li className="li-item">Name : kagkuh</li>
                    <li className="li-item">Designation : asdfghj</li>
                    <li className="li-item">Start Date : 09-08-2023</li>
                    <li className="li-item">End Date : 11-09-2023</li>
                    <li className="li-item">Reason : asdfg sdfghj dfghj </li>
                  </ul>
                  <img className="circle-icon" src={yellow} alt="nayan"></img>
                </div>
              </div>
              {/* item 4 */}
              <div className="item d-flex  " onClick={handleShow}>
                <div className="me-2">
                  <img className=" img-fluid me-2" src={user} alt="nayan"></img>
                </div>

                <div className="circle-icon-position">
                  <ul clasname="ul-item">
                    <li className="li-item">Name : kagkuh</li>
                    <li className="li-item">Designation : asdfghj</li>
                    <li className="li-item">Start Date : 09-08-2023</li>
                    <li className="li-item">End Date : 11-09-2023</li>
                    <li className="li-item">Reason : asdfg sdfghj dfghj </li>
                  </ul>
                  <img className="circle-icon" src={yellow} alt="nayan"></img>
                </div>
              </div>

              {/* item 5 */}
              <div className="item d-flex  " onClick={handleShow}>
                <div className="me-2">
                  <img className=" img-fluid me-2" src={user} alt="nayan"></img>
                </div>

                <div className="circle-icon-position">
                  <ul clasname="ul-item">
                    <li className="li-item">Name : kagkuh</li>
                    <li className="li-item">Designation : asdfghj</li>
                    <li className="li-item">Start Date : 09-08-2023</li>
                    <li className="li-item">End Date : 11-09-2023</li>
                    <li className="li-item">Reason : asdfg sdfghj dfghj </li>
                  </ul>
                  <img className="circle-icon" src={yellow} alt="nayan"></img>
                </div>
              </div>

              {/* item 6 */}

              <div className="item d-flex  " onClick={handleShow}>
                <div className="me-2">
                  <img className=" img-fluid me-2" src={user} alt="nayan"></img>
                </div>

                <div className="circle-icon-position">
                  <ul clasname="ul-item">
                    <li className="li-item">Name : kagkuh</li>
                    <li className="li-item">Designation : asdfghj</li>
                    <li className="li-item">Start Date : 09-08-2023</li>
                    <li className="li-item">End Date : 11-09-2023</li>
                    <li className="li-item">Reason : asdfg sdfghj dfghj </li>
                  </ul>
                  <img className="circle-icon" src={yellow} alt="nayan"></img>
                </div>
              </div>

              {/* item 7 */}
              <div className="item d-flex  " onClick={handleShow}>
                <div className="me-2">
                  <img className=" img-fluid me-2" src={user} alt="nayan"></img>
                </div>

                <div className="circle-icon-position">
                  <ul clasname="ul-item">
                    <li className="li-item">Name : kagkuh</li>
                    <li className="li-item">Designation : asdfghj</li>
                    <li className="li-item">Start Date : 09-08-2023</li>
                    <li className="li-item">End Date : 11-09-2023</li>
                    <li className="li-item">Reason : asdfg sdfghj dfghj </li>
                  </ul>
                  <img className="circle-icon" src={yellow} alt="nayan"></img>
                </div>
              </div>

              {/* item 8 */}

              <div className="item d-flex  " onClick={handleShow}>
                <div className="me-2">
                  <img className=" img-fluid me-2" src={user} alt="nayan"></img>
                </div>

                <div className="circle-icon-position">
                  <ul clasname="ul-item">
                    <li className="li-item">Name : kagkuh</li>
                    <li className="li-item">Designation : asdfghj</li>
                    <li className="li-item">Start Date : 09-08-2023</li>
                    <li className="li-item">End Date : 11-09-2023</li>
                    <li className="li-item">Reason : asdfg sdfghj dfghj </li>
                  </ul>
                  <img className="circle-icon" src={yellow} alt="nayan"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} backdrop="static" onHide={handleClose} centered>
        <Modal.Header closeButton>leave status :</Modal.Header>
        <Modal.Body className="model--body">
          {" "}
          <div>
            <input type="radio" name="click" className="p-3"></input>
            Approved
          </div>
          <div>
            {" "}
            <input type="radio" name="click" className="p-3"></input>
            Rejected
          </div>
        </Modal.Body>
        <Modal.Footer className="mb-3">
          <Button variant="primary" onClick={handleClose}>
            Cancle
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Panding;
