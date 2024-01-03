import { StyledLi, StyledImg, StyledImgWrapper, StyledDescriptinDiv, StyledP, StyledSpan } from "./CastItem.styled";

const CastItem = ({ cast }) => {
    const defaultImg = "https://via.placeholder.com/138x207";

    return (
        cast.map((el) =>
            <StyledLi key={el.credit_id}>
                <StyledImgWrapper>
                    {el.profile_path ? (
                        <StyledImg
                            src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                            alt={`${el.name}`}
                        />
                    ) : (
                        <StyledImg
                            src={`${defaultImg}`}
                            alt={`${el.name}`}
                        />
                    )}
                </StyledImgWrapper>
                <StyledDescriptinDiv>
                    <StyledP>
                        Character <br />
                        <StyledSpan>{el.character}</StyledSpan>
                    </StyledP>
                    <StyledP>
                        Actor <br />
                        <StyledSpan>{el.name}</StyledSpan>
                    </StyledP>
                </StyledDescriptinDiv>
            </StyledLi>
        )
    )
}

export default CastItem;
