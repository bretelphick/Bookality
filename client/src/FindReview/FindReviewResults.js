import React from "react";
import { useParams } from "react-router-dom";

function FindReviewResults() {
	const params = useParams();
	console.log(params);

	return (
		<div>
			<h1>{params.book}</h1>
			<h1>{params.location}</h1>
		</div>
	);
}

export default FindReviewResults;
