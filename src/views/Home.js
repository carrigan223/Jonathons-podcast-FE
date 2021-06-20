import React, { useState } from "react";

const Home = () => {
  const [Genres, setGenres] = useState([]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <h1>Home Page</h1>
      {/* <div>
        <div></div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
