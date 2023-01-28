import React from "react";

import { useNavigate, Link } from "react-router-dom";

function NavbarLoggedIn() {
  const navigate = useNavigate();
  const logOutUser = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/logout", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.href = "/";
        //navigate("/");
      });
  };

  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item px-2">
        <button className="btn btn-success" onClick={logOutUser}>
          Logout
        </button>
      </li>
    </ul>
  );
}

export default NavbarLoggedIn;
