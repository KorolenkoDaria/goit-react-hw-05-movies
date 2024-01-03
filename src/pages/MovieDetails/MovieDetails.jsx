import { fetchMovieById } from "servisce/api";

import { useState, useEffect, useRef, Suspense } from "react";

import { useParams, useLocation, Link, Outlet } from "react-router-dom";

import MovieCard from "components/MovieCard/MovieCard";
import GoBackButton from "components/GoBackButton/GoBackButton";
import Container from "components/Container/Container";
import Loader from "components/Loader/Loader";

import { StyledSection, StyledButtonDiv, StyledNavLink, StyledNavLinkWrapper, StyledH2 } from "./MovieDetails.styled";



const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        const fetchMovie = async () => {
            if (!movieId) {
                return
            }
            try {
                const movieData = await fetchMovieById(movieId);
                setMovie(movieData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoader(false);
            }
        }

        fetchMovie();

    }, [movieId])
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? '/');
    return (
        <>
            <Container>
                <StyledButtonDiv><Link to={backLink.current}><GoBackButton /></Link ></StyledButtonDiv>
            </Container>
            <StyledSection>
                {loader && <Loader />}
                {movie ? <MovieCard
                    original_title={movie.original_title}
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                    overview={movie.overview}
                    genres={movie.genres}
                /> : <StyledH2> Movie not found! </StyledH2>}
            </StyledSection>
            {movie && <Container>
                <StyledNavLinkWrapper>
                    <StyledNavLink to="cast">Cast</StyledNavLink>
                    <StyledNavLink to="reviews">Reviews</StyledNavLink>
                </StyledNavLinkWrapper>
                <Suspense fallback={<div>Loading...</div>}>{<Outlet />}</Suspense>
            </Container>}
        </>

    )
}

export default MovieDetails;