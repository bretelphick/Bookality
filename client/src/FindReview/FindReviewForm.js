import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FindReviewResults from "./FindReviewResults";
import Profile from "../Profile/Profile";

function FindReview() {
	const [book, setBook] = useState("");
	const [location, setLocation] = useState("");
	const navigate = useNavigate();

	//const [formSubmitted, setFormSubmitted] = useState(false);

	const findBookReviews = async (e) => {
		e.preventDefault();
		navigate(`/find/${encodeURI(book)}/${encodeURI(location)}`);
	};

	return (
		<div className="mt-5">
			<div className="card mx-auto w-50">
				<div className="card-body">
					<div className="text-center">
						<h2>Find Reviews</h2>
						<small className="text-muted">Search the backbone.</small>
					</div>
					<form>
						<div className="form-group mt-3">
							<label htmlFor="exampleInputBook1">Book Title</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputBook1"
								placeholder="Enter book title"
								onChange={(e) => setBook(e.target.value)}
							/>
						</div>
						<div className="form-group mt-3">
							<label htmlFor="exampleInputLocation1">Location</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputLocation1"
								placeholder="Enter location"
								onChange={(e) => setLocation(e.target.value)}
							/>
						</div>
						<button className="btn btn-success mt-3" onClick={findBookReviews}>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default FindReview;
