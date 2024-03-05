import { useEffect, useState } from "react";
import ModalCentered from "./ModalCentered";
import InfiniteScroll from "react-infinite-scroll-component";

function FoundMovie({ moviesData }) {
  const [modalShow, setModalShow] = useState(false);
  const [page, setPage] = useState(1);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const movieClick = (movie) => {
    setSelectedMovie(movie);
    setModalShow(true);
  };
  return <></>;
}

export default FoundMovie;
