import { useState, useEffect } from "react";

import { serviceMovie } from "../../servisce/api";

import MovieList from "../../components/MovieList/MovieList";
import Container from "components/Container/Container";
import Loader from "components/Loader/Loader";

import { StyledMain } from "./Home.styled";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchMovies = async () => {
      try {
        const data = await serviceMovie();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoader(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Container>
      <StyledMain>
        {loader && <Loader />}
        <MovieList movies={movies}></MovieList>
      </StyledMain>
    </Container>
  )
}

export default Home;
