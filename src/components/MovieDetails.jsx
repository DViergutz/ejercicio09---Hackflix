import { useLocation, useParams } from "react-router-dom";
import NotFound from "./PageNotFound";

function MovieDetails() {
  const params = useParams();
  const location = useLocation(); // "Similar" a req.path en Express.
  const movie = location.state || {};

  return (
    <div className="p-2 mt-2">
      <h1>
        {movie.title} - {params.movieId}{" "}
      </h1>
      <div className="row">
        <div className="col-6 text-center">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            id="modalPoster"
            alt="poster"
          />
        </div>
        <div className="col-6 ">
          <p>MovieId: {movie.id}</p>
          <p>Rating: {movie.vote_average} </p>
          <p>Released : {movie.release_date}</p>
          <p className="fw-bold">{movie.overview} </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
