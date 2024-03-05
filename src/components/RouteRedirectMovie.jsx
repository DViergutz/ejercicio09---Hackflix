import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function routeRedirectMovie() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/movie/${params.movieId}`);
  }, []);

  return <div></div>;
}

export default routeRedirectMovie;
