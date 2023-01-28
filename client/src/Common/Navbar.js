import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarLoggedOut from "./NavbarLoggedOut";
import NavbarLoggedIn from "./NavbarLoggedIn";

const Navbar = (props) => {
  let navbarButtons;

  console.log(props.isLoggedIn);

  if (props.isLoggedIn == true) {
    navbarButtons = <NavbarLoggedIn></NavbarLoggedIn>;
  } else if (props.isLoggedIn == false) {
    navbarButtons = <NavbarLoggedOut></NavbarLoggedOut>;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Link to="/" className="navbar-brand m">
        Bookality
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/create" className="nav-link">
              Create Review
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/find" className="nav-link">
              Find Reviews
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
        {navbarButtons}
      </div>
    </nav>
  );
};

export default Navbar;
