import React, { useState, useEffect } from "react";
import NavbarLoggedOut from "./NavbarLoggedOut";
import NavbarLoggedIn from "./NavbarLoggedIn";

const Navbar = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  let navbarButtons;

  useEffect(() => {
    (async () => {
      await fetch("http://localhost:5000/@me", {
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          if ("error" in data) {
            console.log("Unauthorized User");
            setLoading(false);
            // rather than console log display alert on screen
          } else {
            setUser(data);
            console.log(data);
            setLoading(false);
          }
        });
    })();
  }, []);

  if (loading == false && user != null) {
    navbarButtons = <NavbarLoggedIn></NavbarLoggedIn>;
  } else if (loading == false && user == null) {
    navbarButtons = <NavbarLoggedOut></NavbarLoggedOut>;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <a className="navbar-brand m" href="/">
        Bookality
      </a>
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
            <a className="nav-link" href="/create">
              Create Review
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/find">
              Find Reviews
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
        </ul>
        {navbarButtons}
      </div>
    </nav>
  );
};

export default Navbar;
