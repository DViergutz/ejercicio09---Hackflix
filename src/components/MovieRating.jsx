import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Movie from "./Movie";
import NotFound from "./NotFound";

function MovieRating() {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate = number) => {
    setRating(rate);
    // other logic
  };

  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value = number, index = number) =>
    console.log(value, index);

  return (
    <>
      <div className="Stars mb-2">
        <Rating
          onClick={handleRating}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}
          /* Available Props */
        />{" "}
        <p className="fs-3">Choose a star Rating</p>
      </div>
      <div className="row">
        {rating === 5 ? (
          <Movie rating={8} />
        ) : rating === 4 ? (
          <Movie rating={6} />
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
}

export default MovieRating;
