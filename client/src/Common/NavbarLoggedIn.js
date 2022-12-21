import React from "react";

function NavbarLoggedIn() {
  const logOutUser = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/logout", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.href = "/";
      });
  };

  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item px-2">
        <a className="btn btn-outline-success" href="/" onClick={logOutUser}>
          Logout
        </a>
      </li>
    </ul>
  );
}

export default NavbarLoggedIn;
