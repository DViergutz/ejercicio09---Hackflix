import { useEffect, useState } from "react";
import ModalCentered from "./ModalCentered";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Home from "./Home";
import FoundMovie from "./FoundMovie";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import MovieNotFound from "./MovieNotFound";

function SearchMovie() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [moviesData, setMoviesData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  let totalPages = 99;

  useEffect(() => {
    const getMovieData = async () => {
      console.log("page: " + page);
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
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2RkYzZhYWZiMThjMjNhZGIxMWVjNGRkMWIxOTk3YiIsInN1YiI6IjYzZmNhZTZjNmFhOGUwMDBmMGI3NzE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cxxXmEY4dE-Rq0b9wSnxXuVQvSu2DuKyuudv9IV8rcc",
          },
        });
        totalPages = response.data.total_pages;
        setMoviesData(() => [...response.data.results]);
        console.log(moviesData);
      } catch (error) {
        console.error(error);
      }
    };
    if (searchQuery !== "") {
      getMovieData();
    }

    <FoundMovie moviesData={moviesData} />;
  }, [searchQuery, page]);

  return (
    <>
      <div className="seachBar mt-3">
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Search Movie
          </InputGroup.Text>
          <Form.Control
            placeholder="insert Movie"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1);
            }}
          />
          <InputGroup.Text id="inputGroup-sizing-default">
            Search Movie
          </InputGroup.Text>
        </InputGroup>
      </div>

      {moviesData.length > 0 ? (
        <InfiniteScroll
          dataLength={moviesData.length}
          next={() => setPage((prevPage) => prevPage + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="row">
            {moviesData.length > 0 && //movies.Data.length certainly is > 1 at this point
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
