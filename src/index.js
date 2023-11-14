import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating onSetMovieRate={setMovieRating} maxRating={5} />
      <p>The movie was rated {movieRating}</p>
    </>
  );
}
root.render(
  <React.StrictMode>
    <App />
    {
      // <>
      //   <StarRating
      //     maxRating={5}
      //     messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      //   />
      //   <Test />
      // </>
    }
  </React.StrictMode>
);
