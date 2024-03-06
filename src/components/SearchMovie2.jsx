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

function SearchMovie() {
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
          query: searchQuery,
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

      setMoviesData((prevMovies) => [...prevMovies, ...response.data.results]);
    } catch (error) {
      console.error(error);
    }
  };

  <FoundMovie moviesData={moviesData} />;

  const searchValue = useInput("");
  return (
    <>
      <div className="seachBar mt-3">
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default" className="">
            Search Movie
          </InputGroup.Text>
          <input
            className="w-50"
            placeholder="insert Moviename"
            value={searchValue.value}
            onChange={(e) => {
              searchValue.onChange(e);
              setSearchQuery(e.target.value);
              setPage(1);
              getMovieData();
            }}
          />
          <InputGroup.Text id="inputGroup-sizing-default">
            SearchValue: {searchValue.value}
          </InputGroup.Text>
        </InputGroup>
      </div>

      {moviesData.length > 0 ? (
        <InfiniteScroll
          dataLength={moviesData.length}
          next={() => {
            setPage((prevPage) => prevPage + 1);
            getMovieData();
          }}
          hasMore={true}
          loader={
            <>
              <div className="spinner-border mt-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <h4>Loading...</h4>
            </>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
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
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
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

          {/* {selectedMovie && (
            <ModalCentered
              show={modalShow}
              onHide={() => {
                setModalShow(false);
                setSelectedMovie(null);
              }}
              movie={selectedMovie}
            />
          )} */}
        </InfiniteScroll>
      ) : (
        <MovieNotFound />
      )}
    </>
  );
}

export default SearchMovie;
