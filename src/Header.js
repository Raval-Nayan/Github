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
          <NavLink to="/" className="brand w-50 nav-link">
            <span className="care-fore-head "> CARE FOR EACH</span>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="navbar-nav  align-items-center space">
              <NavLink to="/" className="me-3 nav-link ">
                <span className="li-text" style={{ display: "block" }}>
                  Home
                </span>
              </NavLink>
              <NavLink to="/contact" className="nav-link ">
                <span className="li-text " style={{ display: "block" }}>
                  Contact us
                </span>
              </NavLink>

              <NavLink to="/dashbord" className=" w-60">
                <button
                  className="btn btn-primary    "
                  style={{ width: "130px" }}
                >
                  Log in
                </button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Nav1;
