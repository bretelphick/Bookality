import React from "react";

import { Link } from "react-router-dom";

function NavbarLoggedOut() {
  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item px-2">
        <Link to="/login" className="btn btn-success">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="btn btn-success">
          Register
        </Link>
      </li>
    </ul>
  );
}

export default NavbarLoggedOut;
