import React, { useState, useEffect } from "react";

const Home = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		(async () => {
			fetch("http://localhost:5000/@me", {
				credentials: "include",
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
				})
				.catch((error) => {
					console.log("The user is unauthorized");
				});
		})();
	}, []);

	return (
		<div className="m-5 text-center">
			<h1>Bookality</h1>
			<p>Welcome to Bookality. Create and read reviews at different scopes.</p>
			<a className="link-success p-3" href="/create">
				Create a Review
			</a>
			<a className="link-success" href="/find">
				Find a Review
			</a>
		</div>
	);
};

export default Home;
