import { useEffect, useState } from "react";
import ModalCentered from "./ModalCentered";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, useLocation } from "react-router-dom";

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [moviesData, setMoviesData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovieData = async () => {
      console.log("page: " + page);
      try {
        const response = await axios({
          method: "get",
          url: "https://api.themoviedb.org/3/discover/movie",
          params: {
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
        console.log(response.data.results);

        setMoviesData((prevMoviesData) => [
          ...prevMoviesData, //its an array containing the previous MoviesData when calling setMoviesData
          ...response.data.results,
        ]);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieData();
  }, [page]);

  return (
    <>
      <InfiniteScroll
        dataLength={moviesData.length}
        next={() => setPage((prevPage) => prevPage + 1)} // Updating page on scrolling which triggers new fetch
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="row">
          {moviesData.length > 0 &&
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
    </>
  );
}

export default Home;
