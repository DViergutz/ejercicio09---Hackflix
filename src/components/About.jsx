function About() {
  return (
    <div className="p-2 mt-2">
      <h1>About Hackflix</h1>
      <div class="container mt-3">
        <h2>1. Home Component Description</h2>
        <p>
          This React component, named Home, is designed to display a list of
          popular movies fetched from the "The Movie Database" (TMDb) API. It
          utilizes React hooks such as useState and useEffect for managing state
          and handling side effects respectively.
        </p>

        <h4>Movie Fetching Logic</h4>
        <p>
          The component fetches movie data using the Axios library, which
          communicates with the TMDb API. It retrieves movie data based on
          popularity and dynamically loads more movies as the user scrolls down
          the page. This is achieved using the InfiniteScroll component from the
          react-infinite-scroll-component library.
        </p>

        <h4>Displaying Movies</h4>
        <p>
          Each movie is displayed as a clickable card, which leads to a detailed
          view of the movie when clicked. This is implemented using React
          Router's Link component.
        </p>
      </div>
      <div class="container">
        <h2>2. Movie Search Component Description</h2>
        <p>
          This React component, named SearchMovie, is designed to search and
          display movies based on user input. It interacts with the "The Movie
          Database" (TMDb) API to fetch movie data dynamically.
        </p>

        <h4>Search Functionality</h4>
        <p>
          The component includes a search bar where users can input movie names.
          As the user types, the component dynamically fetches and displays
          relevant movies from the TMDb API.
        </p>

        <h4>Displaying Search Results</h4>
        <p>
          Search results are displayed as clickable cards, each representing a
          movie. Clicking on a card leads to a detailed view of the respective
          movie.
        </p>

        <h4>Scrolling and Pagination</h4>
        <p>
          The component incorporates infinite scrolling, allowing users to
          continuously load more movies as they scroll down the page. Pagination
          is handled automatically based on the total number of available pages.
        </p>

        <h4>Loading Indicator</h4>
        <p>
          While fetching data or loading more movies, a loading indicator is
          displayed to provide feedback to the user.
        </p>
      </div>
      <div class="container">
        <h2>3. MoviePager Component Description</h2>
        <p>
          This React component, named MoviePager, is responsible for paginating
          through a list of movies fetched from the "The Movie Database" (TMDb)
          API. It enables users to navigate between different pages of movie
          results.
        </p>

        <h4>Pagination Navigation</h4>
        <p>
          The component includes navigation links for moving to the previous and
          next pages of movie results. These links are styled as pagination
          controls.
        </p>

        <h4>Displaying Movies</h4>
        <p>
          Movie results for the current page are displayed as clickable cards,
          each representing a movie. Clicking on a card leads to a detailed view
          of the respective movie.
        </p>

        <h4>Scrolling to Top</h4>
        <p>
          When navigating to the previous or next page, the component
          automatically scrolls to the top of the page to provide a smooth user
          experience.
        </p>

        <h4>Handling Duplicate Movies</h4>
        <p>
          The component filters out duplicate movies before displaying them,
          ensuring that each movie is displayed only once.
        </p>
      </div>
    </div>
  );
}

export default About;
