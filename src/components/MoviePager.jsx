import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, useLocation } from "react-router-dom";

function MoviePager() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [moviesData, setMoviesData] = useState([]);
  const [page, setPage] = useState(1);
  let total_pages = 1;

  useEffect(() => {
    const getMovieData = async () => {
      // console.log("page: " + page);
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
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2RkYzZhYWZiMThjMjNhZGIxMWVjNGRkMWIxOTk3YiIsInN1YiI6IjYzZmNhZTZjNmFhOGUwMDBmMGI3NzE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cxxXmEY4dE-Rq0b9wSnxXuVQvSu2DuKyuudv9IV8rcc",
          },
        });
        console.log(response.data);

        // total_pages = response.data.res.total_pages;

        setMoviesData((prevMoviesData) => [...response.data.results]);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieData();
  }, [page]);

  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center p-2 rounded-bottom">
          <li className="page-item w-25">
            <a
              className="page-link"
              onClick={() => {
                setPage((prevPage) => prevPage - 1);
                console.log(page);
              }}
            >
              Previous Page
            </a>
          </li>

          <li className="page-item w-25">
            <a
              className="page-link"
              onClick={() => {
                setPage((prevPage) => prevPage + 1);
                console.log(page);
              }}
            >
              Next Page
            </a>
          </li>
        </ul>
      </nav>

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
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center p-2 rounded-bottom mt-5">
          <li className="page-item w-25">
            <a
              className="page-link"
              onClick={() => {
                setPage((prevPage) => prevPage - 1);
                window.scrollTo(0, 0);
                console.log(page);
              }}
            >
              Previous Page
            </a>
          </li>

          <li className="page-item w-25">
            <a
              className="page-link"
              onClick={() => {
                setPage((prevPage) => prevPage + 1);
                window.scrollTo(0, 0);
                console.log(page);
              }}
            >
              Next Page
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MoviePager;
