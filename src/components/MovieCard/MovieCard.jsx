import Container from "components/Container/Container";
import { StyledImg, StyledWrapperDiv, StyledDescriptionDiv, StyledH2, StyledP, StyledSpan, StyledSpanGenre } from "./MovieCard.styled";

const MovieCard = ({ original_title, release_date, overview, genres, poster_path }) => {
    const genresArray = Array.isArray(genres) ? genres : [];

    let img = '';
    if (poster_path) {
        img = `https://image.tmdb.org/t/p/w300${poster_path}`;
    } else {
        img = `https://via.placeholder.com/300x450`
    }



    return (
        <Container>
            <StyledWrapperDiv>
                <StyledImg src={img} loading="lazy" alt={original_title} />
                <StyledDescriptionDiv>
                    <StyledH2>{original_title}</StyledH2>
                    <StyledP>Release date <br />
                        <StyledSpan>{release_date}</StyledSpan>
                    </StyledP>
                    <StyledP>Overview  <br />
                        <StyledSpan> {overview}</StyledSpan>
                    </StyledP>
                    <StyledP> Genres <br />
                        {genresArray.map((genre) => <StyledSpanGenre key={genre.id}>{genre.name}</StyledSpanGenre>)}</StyledP>

                </StyledDescriptionDiv>
            </StyledWrapperDiv>
        </Container>
    )
}
export default MovieCard;