import SearchForm from "components/SearchForm/SearchForm";
import MovieList from "components/MovieList/MovieList";
import Container from "components/Container/Container";
import Loader from "components/Loader/Loader";

import { useSearchParams, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

import { fetchMovieByName } from "../servisce/api";

const Movies = () => {
    const [movieData, setMovieData] = useState([]);
    const [query] = useSearchParams({});
    const [loader, setLoader] = useState(false);
    const getQuery = query.get('query') || '';

    useEffect(() => {
        setLoader(true);
        const fetchMovie = async () => {
            try {
                const queryMovie = await fetchMovieByName(getQuery);
                const dataMovies = queryMovie.results;
                setMovieData(dataMovies);

            } catch (error) {
                console.log(error.message);
            } finally {
                setLoader(false);
            }
        }
        fetchMovie();
    }, [getQuery]);

    const location = useLocation();

    return (
        <>
            <SearchForm />
            <Container>
                {loader && <Loader />}
                <MovieList movies={movieData} location={location}></MovieList>
            </Container>
        </>
    )
}

export default Movies;