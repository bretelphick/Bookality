import React from "react";

function Home() {
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
}

export default Home;
