import { useEffect, useState } from "react";
import ModalCentered from "./ModalCentered";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FoundMovie from "./FoundMovie";
import { Link } from "react-router-dom";
import MovieNotFound from "./MovieNotFound";

import useInput from "./useInput";
import submitForm from "./useInput";

function SearchMovieClick() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [moviesData, setMoviesData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  let totalPages = 99;

  const getMovieData = async () => {
    // console.log("page: " + page);
    try {
      const response = await axios({
        method: "get",
        url: "https://api.themoviedb.org/3/search/movie",
        params: {
          query: searchValue.value,
          include_adult: "false",
          include_video: "false",
          language: "en-US",
          page: page,
          sort_by: "popularity.desc",
        },
        headers: {
          accept: "application/json",
          Authorization: import.meta.env.VITE_BEARER,
        },
      });
      totalPages = response.data.total_pages;

      setMoviesData(() => [...response.data.results]);
    } catch (error) {
      console.error(error);
    }
  };

  <FoundMovie moviesData={moviesData} />;

  const searchValue = useInput("");

  const submitForm = (event) => {
    event.preventDefault();
    console.log("value: ", searchValue.value);
    getMovieData();
  };

  return (
    <>
      <div className="">
        <div className="seachBar mt-3 ">
          <form onSubmit={submitForm} className="container" id="formfield">
            <div className="input-group mb-3 row">
              <InputGroup.Text
                id="inputGroup-sizing-default"
                className="col-2 text-wrap"
              >
                Search Movie
              </InputGroup.Text>
              <input
                id="searchInput"
                className="col-7"
                placeholder="insert Moviename"
                {...searchValue}
              />
              <button className="btn btn-success col-3 mx-0 " type="submit">
                Search: {searchValue.value}
              </button>
            </div>
          </form>
        </div>
      </div>
      {moviesData.length > 0 ? (
        <div className="row">
          {moviesData.length > 0 &&
            //movies.Data.length certainly is > 1 at this point
            moviesData.map((movie) => {
              const duplicateMovies = moviesData.filter(
                (mov) => mov.id === movie.id
              );

              if (duplicateMovies.length === 1) {
                return (
                  <div className="col-3 gy-2" key={movie.id}>
                    <div className="card p-2">
                      <Link to={`/movie/${movie.id}`} state={movie}>
                        <img
                          src={
                            movie.poster_path &&
                            `https://image.tmdb.org/t/p/original${movie.poster_path}`
                          }
                          className="card-img-top rounded"
                          alt="no poster found"
                          // onClick={() => movieClick(movie)}
                        />
                      </Link>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      ) : (
        <MovieNotFound />
      )}
    </>
  );
}

export default SearchMovieClick;
