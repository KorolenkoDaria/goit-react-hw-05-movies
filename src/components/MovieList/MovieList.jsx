import MovieItem from "components/MovieItem/MovieItem";

import { StyledMovieList } from "./MovieList.styled";
const MovieList = ({ movies, location }) => {
  return (
    <StyledMovieList>
      {movies.map((movie) => (

        <MovieItem
          location={location}
          key={movie.id}
          id={movie.id}
          name={movie.name}
          original_title={movie.original_title}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
          release_date={movie.release_date}
          overview={movie.overview}
          first_air_date={movie.first_air_date}
        />

      ))}
    </StyledMovieList>
  );
};

export default MovieList;
