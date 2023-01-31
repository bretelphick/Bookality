import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="m-5 text-center">
			<h1>Bookality</h1>
			<p>Welcome to Bookality. Create and read reviews at different scopes.</p>
			<Link to="/create" className="link-success p-3">
				Create a Review
			</Link>
			<Link to="/find" className="link-success">
				Find a Review
			</Link>
		</div>
	);
}

export default Home;
