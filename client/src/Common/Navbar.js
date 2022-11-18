import React from "react";

function Navbar() {
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
        <ul className="navbar-nav ms-auto">
          <li class="nav-item px-2">
            <a className="btn btn-outline-success" href="/login">
              Login
            </a>
          </li>
          <li class="nav-item">
            <a className="btn btn-outline-success" href="/register">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
