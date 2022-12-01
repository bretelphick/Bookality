import React from "react";

function NavbarLoggedIn() {
  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item px-2">
        <a className="btn btn-outline-success" href="/">
          Logout
        </a>
      </li>
    </ul>
  );
}

export default NavbarLoggedIn;
