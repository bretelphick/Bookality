import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Navbar from "./Common/Navbar";
import Login from "./Common/Login";
import Register from "./Common/Register";
import Create from "./CreateReview/CreateReview";
import Find from "./FindReview/FindReview";
import Profile from "./Profile/Profile";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<Create />} />
            <Route path="/find" element={<Find />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
