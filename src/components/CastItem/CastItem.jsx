import { StyledLi, StyledImg, StyledImgWrapper, StyledDescriptinDiv, StyledP, StyledSpan } from "./CastItem.styled";

const CastItem = ({ cast }) => {
    const copy = [];
    cast.forEach(function (el) {
        if (el.profile_path) {
            el.profile_path = `https://image.tmdb.org/t/p/w200${el.profile_path}`
        } else {
            el.profile_path = "https://via.placeholder.com/138x207"
        }
        copy.push(el)
    }

    )
    return (
        copy.map((el) =>
            <StyledLi key={el.credit_id}>
                <StyledImgWrapper>
                    <StyledImg src={el.profile_path}
                        loading="lazy"
                        alt={`${el.name}`}
                    />
                </StyledImgWrapper>
                <StyledDescriptinDiv>
                    <StyledP>Character <br />
                        <StyledSpan>{el.character}</StyledSpan></StyledP>
                    <StyledP>Actor <br />
                        <StyledSpan>{el.name}</StyledSpan></StyledP>
                </StyledDescriptinDiv>
            </StyledLi>
        )
    )
}
export default CastItem;