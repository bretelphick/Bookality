import React, { useState } from "react";

function CreateReview() {
  const [book, setBook] = useState("");
  const [review, setReview] = useState("");
  const [location, setLocation] = useState("");

  const createBookReview = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/createReview", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        book: book,
        review: review,
        location: location,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if ("error" in data) {
          console.log(data);
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
            <h2>Create Review</h2>
            <small className="text-muted">Create the backbone.</small>
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
              <label htmlFor="exampleInputReview1">Review</label>
              <textarea
                class="form-control"
                id="exampleInputReview1"
                placeholder="Enter genius"
                rows="3"
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
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
            <button
              type="submit"
              className="btn btn-success mt-3"
              onClick={createBookReview}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateReview;
