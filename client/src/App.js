import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Navbar from "./Common/Navbar";
import Login from "./Common/Login";
import Register from "./Common/Register";
import Create from "./CreateReview/CreateReview";
import Find from "./FindReview/FindReview";
import Profile from "./Profile/Profile";

function App() {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    (async () => {
      await fetch("http://localhost:5000/@me", {
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          if ("error" in data) {
            console.log("Not logged in");
            setLoggedIn(false);
            //setLoading(false);
            // rather than console log display alert on screen
          } else {
            console.log(data);
            setLoggedIn(true);
            //setLoading(false);
          }
        });
    })();
  }, []);

  return (
    <div className="app">
      <Navbar isLoggedIn={loggedIn} />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create isLoggedIn={loggedIn} />} />
          <Route path="/find" element={<Find />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
