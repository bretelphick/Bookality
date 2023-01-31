import React, { useState } from "react";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const logInUser = async (e) => {
		e.preventDefault();
		await fetch("http://localhost:5000/login", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if ("error" in data) {
					console.log("Unauthorized User");
					// rather than console log display alert on screen
				} else {
					window.location.href = "/";
				}
			});
	};

	return (
		<div className="mt-5">
			<div className="card mx-auto w-50">
				<div className="card-body">
					<div className="text-center">
						<h2>Login</h2>
						<small className="text-muted">Welcome back.</small>
					</div>
					<form>
						<div className="form-group mt-3">
							<label htmlFor="exampleInputUsername1">Username</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputUsername1"
								placeholder="Enter username"
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className="form-group mt-3">
							<label htmlFor="exampleInputPassword1">Password</label>
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
							onClick={logInUser}>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
