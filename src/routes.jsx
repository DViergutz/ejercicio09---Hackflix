import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchMovie from "./components/SearchMovie";
import PageNotFound from "./components/PageNotFound";
import MovieDetails from "./components/MovieDetails";
import MainLayout from "./components/MainLayout";
import About from "./components/About";
import Contact from "./components/contact";
import RouteRedirectMovie from "./components/RouteRedirectMovie";
import Home from "./components/Home";
import MoviePager from "./components/MoviePager";
import SearchMovieClick from "./components/SearchMovieClick";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "movie_pager",
        element: <MoviePager />,
      },
      {
        path: "searchClick",
        element: <SearchMovieClick />,
      },
      {
        path: "search",
        element: <SearchMovie />,
      },
      {
        path: "movie/:movieId",
        element: <MovieDetails />,
      },
      {
        path: "sobre-nosotros",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/pelicula/:movieId",
        element: <RouteRedirectMovie />,
      },
      {
        path: "404",
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: "/movie/*",
    element: <PageNotFound />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
