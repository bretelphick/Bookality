import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if ("error" in data) {
          // rather than console log display alert on screen
          console.log(data);
        } else {
          window.location.href = "/login";
        }
      });
  };
  return (
    <div className="mt-5">
      <div className="card mx-auto w-50">
        <div className="card-body">
          <div className="text-center">
            <h2>Register</h2>
            <small className="text-muted">Come on in, the waters fine.</small>
          </div>
          <form>
            <div className="form-group mt-3">
              <label htmlfor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group mt-3">
              <label htmlfor="exampleInputUsername1">Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername1"
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlfor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success mt-3"
              onClick={registerUser}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
