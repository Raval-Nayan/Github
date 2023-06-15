import React from "react";
import "./css/header.css";

import { Navbar, Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";

function Nav1() {
  return (
    <>
      {/* navbar */}
      <Navbar expand="lg" className=" border-bottom-3 h-box">
        <div className="container-fluid">
          <Navbar.Brand href="#" className="brand ">
            <span className="care-fore-head"> CARE FOR EACH</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="navbar-nav ms-auto align-items-center">
              <Nav.Link to="#" className="me-3  ">
                <span className="li-text" style={{ display: "block" }}>
                  Home
                </span>
              </Nav.Link>
              <Nav.Link href="#" className=" ">
                <span className="li-text " style={{ display: "block" }}>
                  Contact us
                </span>
              </Nav.Link>

              <Nav.Link href="#" className=" w-60">
                <button className="btn btn-primary  w-100  border">
                  Log in
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Nav1;
