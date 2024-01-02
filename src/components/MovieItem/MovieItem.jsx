import { Link } from "react-router-dom";

import { routes } from "routes";

import { StyledLi, StyledImg, StyledIDiv, StyledH2, StyledP, StyledSpan, StyledSpanOverview } from "./MovieItem.styled";

const MovieItem = ({ original_title, name, poster_path, vote_average, release_date, overview, id, location, first_air_date }) => {

  let img = ''
  if (poster_path) {
    img = `https://image.tmdb.org/t/p/w300${poster_path}`;
  } else {
    img = `https://via.placeholder.com/300x450`
  }
  if (!release_date) {
    release_date = first_air_date ? first_air_date : "-";
  }

  return (
    <StyledLi>
      <Link to={`${routes.MOVIES}/${id}`} state={{ from: location }}>
        <StyledImg src={img} alt={`${original_title}`} />
        <StyledIDiv>
          <StyledH2>{name ? name : original_title}</StyledH2>
          <StyledP>Release date <br />
            <StyledSpan>{release_date}</StyledSpan>
          </StyledP>
          <StyledP>Vote Average<br />
            <StyledSpan>{vote_average}</StyledSpan>
          </StyledP>
          <StyledP>Overview <br />
            <StyledSpanOverview>{overview}</StyledSpanOverview>
          </StyledP>
        </StyledIDiv>
      </Link>
    </StyledLi >
  );
}
export default MovieItem;