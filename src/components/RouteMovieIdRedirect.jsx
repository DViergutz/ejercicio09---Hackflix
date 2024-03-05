import React from "react";
import { useParams } from "react-router-dom";

export default function routeMovieIdRedirect() {
  const params = useParams();
  return <div>pelicula/movieId redirect with params: {params.movieId}</div>;
}
