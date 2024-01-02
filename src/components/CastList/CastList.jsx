import CastItem from "components/CastItem/CastItem";
import Container from "components/Container/Container";

import { StyledUl } from "./CastList.styled"
const CastList = ({ cast }) => {
    return (
        <Container>
            <StyledUl>
                {cast && cast.length > 0 && <CastItem cast={cast} />}
            </StyledUl>
        </Container>
    )
}
export default CastList;