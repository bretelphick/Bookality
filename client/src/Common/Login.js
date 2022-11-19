import React from "react";

function Login() {
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
							<label for="exampleInputUsername1">Username</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputUsername1"
								placeholder="Enter username"
							/>
						</div>
						<div className="form-group mt-3">
							<label for="exampleInputPassword1">Password</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Password"
							/>
						</div>
						<button type="submit" className="btn btn-success mt-3">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
