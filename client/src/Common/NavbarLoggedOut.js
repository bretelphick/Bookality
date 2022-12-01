import React from "react";

function NavbarLoggedOut() {
  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item px-2">
        <a className="btn btn-outline-success" href="/login">
          Login
        </a>
      </li>
      <li className="nav-item">
        <a className="btn btn-outline-success" href="/register">
          Register
        </a>
      </li>
    </ul>
  );
}

export default NavbarLoggedOut;
